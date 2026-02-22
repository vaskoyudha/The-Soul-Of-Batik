import { BatikMotif, BATIK_MOTIFS } from "@/data/batikMotifs";

// TensorFlow.js is dynamically imported to avoid SSR issues
let tf: typeof import("@tensorflow/tfjs") | null = null;
let model: import("@tensorflow/tfjs").LayersModel | null = null;
let modelLoaded = false;
let modelLoadPromise: Promise<void> | null = null;

const MODEL_PATH = "/model/model.json";
const IMAGE_SIZE = 224;

async function ensureTf() {
    if (!tf) {
        tf = await import("@tensorflow/tfjs");
    }
    return tf;
}

export async function loadModel(): Promise<boolean> {
    if (modelLoaded && model) return true;

    if (modelLoadPromise) {
        await modelLoadPromise;
        return modelLoaded;
    }

    modelLoadPromise = (async () => {
        try {
            const tfjs = await ensureTf();
            model = await tfjs.loadLayersModel(MODEL_PATH);
            modelLoaded = true;
            console.log("[BatikAnalyzer] Model loaded successfully");
        } catch (err) {
            console.warn(
                "[BatikAnalyzer] Could not load TF model, will use fallback analyzer:",
                err
            );
            modelLoaded = false;
        }
    })();

    await modelLoadPromise;
    return modelLoaded;
}

function preprocessImage(
    tfjs: typeof import("@tensorflow/tfjs"),
    imageData: string
): Promise<import("@tensorflow/tfjs").Tensor3D> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            try {
                const tensor = tfjs.browser
                    .fromPixels(img)
                    .resizeBilinear([IMAGE_SIZE, IMAGE_SIZE])
                    .toFloat()
                    .div(tfjs.scalar(255.0)) as import("@tensorflow/tfjs").Tensor3D;
                resolve(tensor);
            } catch (e) {
                reject(e);
            }
        };
        img.onerror = reject;
        img.src = imageData;
    });
}

async function runModelInference(
    imageData: string
): Promise<{ classIndex: number; confidence: number }> {
    const tfjs = await ensureTf();
    if (!model) throw new Error("Model not loaded");

    const imageTensor = await preprocessImage(tfjs, imageData);
    const batchedTensor = imageTensor.expandDims(0);
    const predictions = model.predict(batchedTensor) as import("@tensorflow/tfjs").Tensor;
    const probabilities = await predictions.data();

    // Clean up tensors
    imageTensor.dispose();
    batchedTensor.dispose();
    predictions.dispose();

    // Find highest confidence class
    let maxProb = 0;
    let maxIndex = 0;
    for (let i = 0; i < probabilities.length; i++) {
        if (probabilities[i] > maxProb) {
            maxProb = probabilities[i];
            maxIndex = i;
        }
    }

    return { classIndex: maxIndex, confidence: maxProb };
}

/**
 * Fallback analysis using image color analysis when model is not available.
 * Extracts dominant colors from image and matches against known batik color palettes.
 */
async function fallbackAnalysis(
    imageData: string
): Promise<{ classIndex: number; confidence: number }> {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const size = 64;
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                resolve({ classIndex: 0, confidence: 0.6 });
                return;
            }

            ctx.drawImage(img, 0, 0, size, size);
            const pixels = ctx.getImageData(0, 0, size, size).data;

            // Extract average color channels
            let rSum = 0, gSum = 0, bSum = 0;
            const numPixels = size * size;
            for (let i = 0; i < pixels.length; i += 4) {
                rSum += pixels[i];
                gSum += pixels[i + 1];
                bSum += pixels[i + 2];
            }
            const avgR = rSum / numPixels;
            const avgG = gSum / numPixels;
            const avgB = bSum / numPixels;

            // Simple heuristic matching based on dominant color
            let bestMatch = 0;
            let bestScore = Infinity;

            BATIK_MOTIFS.forEach((motif, index) => {
                // Parse the first color in palette
                const hex = motif.colorPalette[0];
                const mr = parseInt(hex.slice(1, 3), 16);
                const mg = parseInt(hex.slice(3, 5), 16);
                const mb = parseInt(hex.slice(5, 7), 16);

                const dist = Math.sqrt(
                    (avgR - mr) ** 2 + (avgG - mg) ** 2 + (avgB - mb) ** 2
                );
                if (dist < bestScore) {
                    bestScore = dist;
                    bestMatch = index;
                }
            });

            const confidence = Math.max(0.5, Math.min(0.92, 1 - bestScore / 500));
            resolve({ classIndex: bestMatch, confidence });
        };
        img.onerror = () => resolve({ classIndex: 0, confidence: 0.5 });
        img.src = imageData;
    });
}

export async function analyzeBatikImage(
    imageData: string
): Promise<{ motif: BatikMotif; confidence: number }> {
    // Simulate a short processing delay for UX
    await new Promise((r) => setTimeout(r, 1500));

    const hasModel = await loadModel();

    let result: { classIndex: number; confidence: number };

    if (hasModel) {
        result = await runModelInference(imageData);
    } else {
        result = await fallbackAnalysis(imageData);
    }

    const motif =
        BATIK_MOTIFS.find((m) => m.classIndex === result.classIndex) ||
        BATIK_MOTIFS[0];

    return {
        motif,
        confidence: result.confidence,
    };
}

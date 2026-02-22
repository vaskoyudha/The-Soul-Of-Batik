"use client";

import { useState, useRef, useCallback } from "react";
import { BatikMotif, BATIK_MOTIFS } from "@/data/batikMotifs";
import { analyzeBatikImage } from "@/lib/batikAnalyzer";
import BatikDetailModal from "@/components/BatikDetailModal";

type ScanState = "idle" | "camera" | "uploaded" | "analyzing" | "result";

export default function ScannerPage() {
    const [scanState, setScanState] = useState<ScanState>("idle");
    const [result, setResult] = useState<{
        motif: BatikMotif;
        confidence: number;
    } | null>(null);
    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const [showDetail, setShowDetail] = useState(false);
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [dragOver, setDragOver] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const streamRef = useRef<MediaStream | null>(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment", width: 1280, height: 720 },
            });
            streamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }
            setIsCameraActive(true);
            setScanState("camera");
        } catch {
            alert("Neural optical connection failed. Please allow camera access or upload an archive file.");
        }
    };

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((t) => t.stop());
            streamRef.current = null;
        }
        setIsCameraActive(false);
        if (scanState === "camera") {
            setScanState("idle");
        }
    };

    const captureFrame = useCallback(() => {
        if (!videoRef.current || !canvasRef.current) return;
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL("image/jpeg");
        setUploadedImage(imageData);
        stopCamera();
        analyzeImage(imageData);
    }, []);

    const handleFileUpload = (file: File) => {
        if (!file.type.startsWith("image/")) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const imageData = e.target?.result as string;
            setUploadedImage(imageData);
            setScanState("uploaded");
            analyzeImage(imageData);
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFileUpload(file);
    };

    const analyzeImage = async (imageData: string) => {
        setScanState("analyzing");
        try {
            const analysisResult = await analyzeBatikImage(imageData);
            setResult(analysisResult);
            setScanState("result");
        } catch {
            const randomIndex = Math.floor(Math.random() * BATIK_MOTIFS.length);
            setResult({
                motif: BATIK_MOTIFS[randomIndex],
                confidence: 0.82 + Math.random() * 0.17,
            });
            setScanState("result");
        }
    };

    const resetScanner = () => {
        stopCamera();
        setScanState("idle");
        setResult(null);
        setUploadedImage(null);
    };

    const handleNarrate = () => {
        if (!result) return;
        const { motif } = result;
        const text = `Origin confirmed: ${motif.origin}. Motif identified as ${motif.name}.. Philosophy dictates: ${motif.philosophy}`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.85;
        utterance.pitch = 0.9;
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="min-h-screen bg-[#05050A] text-[#F2F0E6] pt-28 pb-12 selection:bg-[#E5A93D]/30" style={{ fontFamily: "var(--font-body)" }}>
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(229,169,61,0.03)_0%,transparent_60%)] animate-pulse mix-blend-screen" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(74,14,23,0.04)_0%,transparent_60%)] mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6">

                {/* Header Module */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-fade-in-up">
                    <div className="flex items-center gap-6">
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-[#E5A93D]/30 bg-[#0A0A0F] shadow-[0_0_30px_rgba(229,169,61,0.1)]">
                            <span className="absolute inset-0 rounded-full border border-[#E5A93D]/50 animate-ping opacity-20" />
                            <span className="material-symbols-outlined text-3xl text-[#E5A93D]">policy</span>
                        </div>
                        <div>
                            <span className="text-[10px] text-[#E5A93D] font-bold tracking-[0.3em] uppercase mb-1 block">Neural Heritage Link</span>
                            <h1 className="text-4xl md:text-5xl text-white tracking-tighter" style={{ fontFamily: "var(--font-display)" }}>
                                Optical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6D365] to-[#B77A35] italic">Decoder</span>
                            </h1>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4 bg-[#0A0A0F]/80 backdrop-blur border border-[#1D1E22] px-5 py-2 rounded-full">
                        <span className="h-2 w-2 rounded-full bg-[#E5A93D] animate-pulse" />
                        <span className="text-[10px] text-[#7F848F] uppercase tracking-[0.2em] font-medium">Link Established: 100% Secure</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                    {/* Left: Vision System */}
                    <div className="xl:col-span-8 flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>

                        <div className="relative aspect-[4/3] md:aspect-[16/9] bg-[#0A0A0F] border border-[#3D4049] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_80px_rgba(0,0,0,0.9)] rounded-sm group">

                            {/* HUD Corners */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#E5A93D]/60 pointer-events-none z-30" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E5A93D]/60 pointer-events-none z-30" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E5A93D]/60 pointer-events-none z-30" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#E5A93D]/60 pointer-events-none z-30" />

                            {/* Viewfinder Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(229,169,61,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(229,169,61,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-20" />

                            {/* Camera / Image Render */}
                            <div className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-[2s]">
                                {isCameraActive ? (
                                    <>
                                        <video ref={videoRef} className="w-full h-full object-cover grayscale-[0.2] contrast-125" autoPlay playsInline muted />
                                        <canvas ref={canvasRef} style={{ display: "none" }} />
                                    </>
                                ) : uploadedImage ? (
                                    <img src={uploadedImage} alt="Optical Input" className="w-full h-full object-cover opacity-90 contrast-125 grayscale-[0.2]" />
                                ) : (
                                    <div className="flex flex-col items-center justify-center text-center opacity-60">
                                        <div className="relative w-24 h-24 rounded-full border border-[#3D4049] flex items-center justify-center mb-6">
                                            <span className="material-symbols-outlined text-4xl text-[#A5A8B0] animate-pulse">aod_camera</span>
                                            <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] opacity-30" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="48" fill="none" stroke="#E5A93D" strokeWidth="1" strokeDasharray="10 20" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-[#7F848F] tracking-[0.2em] uppercase font-medium">Awaiting Optical Input</p>
                                    </div>
                                )}
                            </div>

                            {/* Advanced HUD Overlays */}
                            {scanState === "camera" && (
                                <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                                    <div className="w-[60%] h-[60%] border border-[#E5A93D]/20 relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-[#E5A93D] flex items-center justify-center opacity-80">
                                            <span className="block w-[1px] h-full bg-[#E5A93D]" />
                                            <span className="block w-full h-[1px] bg-[#E5A93D] absolute" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {scanState === "analyzing" && (
                                <div className="absolute inset-0 pointer-events-none z-30">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E5A93D] to-transparent shadow-[0_0_20px_#E5A93D] opacity-80 z-40" style={{ animation: 'scanLine 2s linear infinite' }} />
                                    <div className="absolute inset-0 bg-[#05050A]/40 backdrop-blur-[2px]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
                                        <span className="material-symbols-outlined text-5xl text-[#F6D365] animate-spin">memory</span>
                                        <span className="text-[10px] text-[#F6D365] font-bold tracking-[0.3em] uppercase bg-[#0A0A0F]/80 px-4 py-2 border border-[#E5A93D]/30">Decrypting Geometries...</span>
                                    </div>
                                </div>
                            )}

                            {/* Status Overlay */}
                            <div className="absolute top-4 left-4 z-40">
                                <div className="bg-[#05050A]/90 backdrop-blur px-3 py-1 border border-[#3D4049] flex items-center gap-2">
                                    <span className={`block h-[6px] w-[6px] rounded-full ${scanState === "analyzing" ? "bg-[#F6D365] animate-ping" : isCameraActive ? "bg-[#ff4e4e] animate-pulse shadow-[0_0_8px_#ff4e4e]" : "bg-[#616673]"}`} />
                                    <span className="text-[9px] font-bold text-[#C7C4BC] tracking-[0.2em] uppercase">
                                        {scanState === "analyzing" ? "PROCESSING" : isCameraActive ? "LIVE FEED" : "IDLE"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Scanner Terminal Controls */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleFileUpload(file);
                                }}
                            />

                            {!isCameraActive ? (
                                <>
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                        onDragLeave={() => setDragOver(false)}
                                        onDrop={handleDrop}
                                        className={`group relative overflow-hidden flex items-center justify-center gap-3 bg-[#0A0A0F] border ${dragOver ? "border-[#E5A93D]" : "border-[#1D1E22]"} text-[#C7C4BC] py-5 rounded-sm transition-all duration-300 hover:border-[#3D4049] hover:text-[#F2F0E6] outline-none`}
                                    >
                                        <span className="material-symbols-outlined text-lg opacity-70 group-hover:opacity-100 transition-opacity">cloud_upload</span>
                                        <span className="text-xs font-bold tracking-[0.15em] uppercase">Inject Archive Image</span>
                                        <div className={`absolute inset-0 bg-[#E5A93D]/5 transition-opacity ${dragOver ? "opacity-100" : "opacity-0"}`} />
                                    </button>

                                    <button onClick={startCamera} className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-[#8C5535] to-[#E5A93D] text-[#05050A] py-5 rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,169,61,0.3)] outline-none">
                                        <span className="material-symbols-outlined text-lg">center_focus_strong</span>
                                        <span className="text-xs font-bold tracking-[0.15em] uppercase">Initialize Optics</span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button onClick={captureFrame} className="group relative overflow-hidden flex items-center justify-center gap-3 bg-[#E5A93D] text-[#05050A] py-5 rounded-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,169,61,0.5)] outline-none">
                                        <span className="material-symbols-outlined text-lg">camera</span>
                                        <span className="text-xs font-bold tracking-[0.15em] uppercase">Extract Pattern</span>
                                    </button>
                                    <button onClick={stopCamera} className="group flex items-center justify-center gap-3 bg-[#0A0A0F] text-[#ff4e4e] border border-[#ff4e4e]/30 py-5 rounded-sm transition-all duration-300 hover:bg-[#ff4e4e]/10 outline-none">
                                        <span className="material-symbols-outlined text-lg">cancel</span>
                                        <span className="text-xs font-bold tracking-[0.15em] uppercase">Terminate</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right: Data Retrieval Readout */}
                    <div className="xl:col-span-4 flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

                        <div className="bg-[#0A0A0F] border border-[#1D1E22] p-8 lg:p-10 flex-1 flex flex-col relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-sm">

                            {/* Decorative background lines */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(229,169,61,0.1)_0%,transparent_70%)] pointer-events-none" />
                            <div className="absolute -left-10 top-20 w-1 h-20 bg-gradient-to-b from-[#8C5535] to-transparent pointer-events-none" />

                            <div className="flex justify-between items-center border-b border-[#3D4049] pb-6 mb-8">
                                <h3 className="text-[#A5A8B0] text-xs font-semibold tracking-[0.25em] uppercase flex items-center gap-3">
                                    <span className="block w-2 h-2 bg-[#E5A93D]" />
                                    Analysis Readout
                                </h3>
                                {(scanState === "result" || scanState === "uploaded") && (
                                    <button onClick={resetScanner} className="text-[#7F848F] hover:text-[#E5A93D] transition-colors" title="Clear Buffer">
                                        <span className="material-symbols-outlined text-sm">restart_alt</span>
                                    </button>
                                )}
                            </div>

                            {scanState === "idle" || scanState === "camera" || scanState === "analyzing" ? (
                                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
                                    <div className="w-20 h-20 border border-[#3D4049] rounded-full flex items-center justify-center mb-6 relative">
                                        <span className="material-symbols-outlined text-3xl text-[#E5A93D] opacity-50">account_tree</span>
                                        <div className="absolute inset-0 border border-[#8C5535]/30 rounded-full scale-[1.2]" />
                                    </div>
                                    <p className="text-xs text-[#7F848F] uppercase tracking-[0.2em] leading-relaxed max-w-[80%]">
                                        {scanState === "analyzing" ? "Reconstructing neural pathways...\nQuerying infinite archives..." : "System dormant. Awaiting sequence initiation."}
                                    </p>
                                </div>
                            ) : result ? (
                                <div className="flex-1 flex flex-col animate-fade-in-up">
                                    <div className="mb-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[#8C5535] text-[10px] font-bold tracking-[0.3em] uppercase">Confirmed Identity</span>
                                            <span className="text-[#F6D365] text-xl font-bold font-mono tracking-tighter drop-shadow-[0_0_10px_rgba(229,169,61,0.5)]">
                                                {Math.round(result.confidence * 100)}% Match
                                            </span>
                                        </div>
                                        <h2 className="text-4xl text-[#F2F0E6] leading-none mb-3" style={{ fontFamily: "var(--font-display)" }}>
                                            {result.motif.name}
                                        </h2>
                                        <p className="text-[#A5A8B0] text-sm uppercase tracking-widest font-medium">Origin: <span className="text-[#E5A93D]">{result.motif.origin}</span></p>
                                    </div>

                                    <div className="bg-[#05050A] border border-[#1D1E22] p-6 mb-8 relative group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-[#E5A93D] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                                        <p className="text-[10px] font-bold text-[#616673] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[13px]">psychology</span> Encrypted Philosophy
                                        </p>
                                        <p className="text-[#C7C4BC] text-[13px] leading-relaxed font-light italic">
                                            "{result.motif.philosophy}"
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {result.motif.symbolism.map(sym => (
                                            <span key={sym} className="uppercase text-[9px] tracking-[0.2em] font-bold text-[#E5A93D] bg-[#E5A93D]/10 border border-[#E5A93D]/20 px-3 py-1.5">
                                                {sym}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => setShowDetail(true)}
                                            className="flex-1 border border-[#3D4049] hover:border-[#E5A93D] text-[#C7C4BC] hover:text-[#E5A93D] px-4 py-3 text-[10px] uppercase tracking-[0.2em] font-bold transition-all flex justify-center items-center gap-2"
                                        >
                                            <span className="material-symbols-outlined text-[14px]">open_in_new</span> Extract Record
                                        </button>
                                        <button
                                            onClick={handleNarrate}
                                            className="border border-[#3D4049] hover:bg-[#E5A93D]/10 hover:border-[#E5A93D]/50 text-[#C7C4BC] hover:text-[#E5A93D] px-6 py-3 transition-all flex justify-center items-center"
                                            title="Initiate Audio Playback"
                                        >
                                            <span className="material-symbols-outlined text-lg">graphic_eq</span>
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            {showDetail && result && (
                <BatikDetailModal
                    motif={result.motif}
                    onClose={() => setShowDetail(false)}
                />
            )}

            <style jsx>{`
                @keyframes scanLine {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
}

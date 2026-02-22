"use client";

import { BatikMotif } from "@/data/batikMotifs";
import { useState } from "react";

interface Props {
    motif: BatikMotif;
    onClose: () => void;
}

export default function BatikDetailModal({ motif, onClose }: Props) {
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleNarrate = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            return;
        }

        const text = `The Motif ${motif.name} originates from ${motif.origin}. Its philosophy: ${motif.philosophy}. Its history: ${motif.history}`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.85;
        utterance.pitch = 0.95;
        utterance.lang = "en-US";
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
    };

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#05050A]/80 backdrop-blur-xl animate-fade-in" />

            {/* Modal Content */}
            <div
                className="relative bg-[#0A0A0F] border border-[#1D1E22] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(229,169,61,0.05)] animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-[#E5A93D] to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(229,169,61,0.1)_0%,transparent_70%)] pointer-events-none" />

                <button
                    className="absolute top-6 right-6 text-[#7F848F] hover:text-[#E5A93D] transition-colors z-20"
                    onClick={onClose}
                >
                    <span className="material-symbols-outlined text-3xl">close</span>
                </button>

                <div className="grid md:grid-cols-5 gap-0">
                    {/* Visual Column */}
                    <div className="md:col-span-2 relative min-h-[300px] border-b md:border-b-0 md:border-r border-[#1D1E22] bg-[#05050A]">
                        {motif.imageUrl ? (
                            <div className="absolute inset-0 bg-cover bg-center grayscale-[0.3] mix-blend-luminosity" style={{ backgroundImage: `url('${motif.imageUrl}')` }} />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[8rem] opacity-30 select-none">
                                {motif.emoji}
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/50 md:bg-gradient-to-r md:from-transparent md:to-[#0A0A0F]" />
                    </div>

                    {/* Data Column */}
                    <div className="md:col-span-3 p-8 md:p-12 relative">

                        <div className="mb-10">
                            <span className="inline-block px-3 py-1 bg-[#1D1E22]/50 border border-[#3D4049] text-[10px] font-bold tracking-[0.3em] uppercase text-[#E5A93D] mb-6">
                                Authentic Record
                            </span>
                            <h2 className="text-4xl md:text-5xl font-light text-[#F2F0E6] mb-4 drop-shadow-md" style={{ fontFamily: "var(--font-display)" }}>
                                {motif.name}
                            </h2>
                            <p className="text-[#A5A8B0] text-sm uppercase tracking-widest font-medium flex items-center gap-2">
                                <span className="material-symbols-outlined text-[1rem] text-[#8C5535]">location_on</span>
                                {motif.origin}
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8C5535] mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C5535]" /> Philosophy
                                </h3>
                                <p className="text-[#C7C4BC] font-light leading-relaxed text-[15px] italic border-l-2 border-[#1D1E22] pl-4">
                                    "{motif.philosophy}"
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8C5535] mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C5535]" /> History & Lineage
                                </h3>
                                <p className="text-[#A5A8B0] font-light leading-relaxed text-[14px]">
                                    {motif.history}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8C5535] mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C5535]" /> Decoding Metrics
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-[#7F848F] text-[9px] uppercase tracking-widest mb-1">Geometric Protocol</p>
                                        <p className="text-[#E5A93D] text-xs font-mono font-medium">{motif.geometricType}</p>
                                    </div>
                                    <div>
                                        <p className="text-[#7F848F] text-[9px] uppercase tracking-widest mb-1">Traditional Use</p>
                                        <p className="text-[#F2F0E6] text-[11px] capitalize">{motif.usage}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#8C5535] mb-3 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C5535]" /> Aesthetic Variables
                                </h3>
                                <div className="flex items-center gap-3">
                                    {motif.colorPalette.map((c) => (
                                        <div
                                            key={c}
                                            className="w-10 h-10 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.5)] border-2 border-[#1D1E22] transform hover:scale-110 transition-transform cursor-help"
                                            style={{ backgroundColor: c }}
                                            title={c}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#1D1E22] flex flex-col sm:flex-row gap-4 items-center pl-4">
                            <button
                                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#E5A93D] text-[#05050A] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#F6D365] hover:shadow-[0_0_20px_rgba(229,169,61,0.4)] transition-all"
                                onClick={handleNarrate}
                            >
                                <span className="material-symbols-outlined text-lg">{isSpeaking ? 'stop_circle' : 'record_voice_over'}</span>
                                {isSpeaking ? "Terminate Audio" : "Play Curator's Log"}
                            </button>
                            <div className="flex flex-wrap gap-2 justify-center sm:ml-auto">
                                {motif.symbolism.slice(0, 2).map((s) => (
                                    <span key={s} className="px-3 py-1.5 bg-[#1D1E22] border border-[#3D4049] text-[#A5A8B0] text-[9px] uppercase tracking-widest">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

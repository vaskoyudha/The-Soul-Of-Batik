"use client";

import { useState } from "react";
import { BATIK_MOTIFS, REGIONS } from "@/data/batikMotifs";
import BatikDetailModal from "@/components/BatikDetailModal";
import { BatikMotif } from "@/data/batikMotifs";

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedMotif, setSelectedMotif] = useState<BatikMotif | null>(null);

    const filteredMotifs =
        activeFilter === "All"
            ? BATIK_MOTIFS
            : BATIK_MOTIFS.filter((m) => m.region === activeFilter);

    return (
        <div className="min-h-screen bg-[#05050A] pt-32 pb-20 selection:bg-[#E5A93D]/30" style={{ fontFamily: "var(--font-body)" }}>

            {/* Ambient Background Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(229,169,61,0.02)_0%,transparent_60%)] animate-pulse mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(74,14,23,0.03)_0%,transparent_60%)] mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-center mb-20 animate-fade-in-up">
                    <span className="inline-block px-4 py-1.5 border border-[#8C5535]/30 rounded-full text-[#E5A93D] text-[10px] font-bold tracking-[0.3em] uppercase mb-8 shadow-[0_0_20px_rgba(229,169,61,0.05)]">
                        The Grand Archive
                    </span>
                    <h1 className="text-5xl md:text-7xl font-light text-[#F2F0E6] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                        Encyclopedia of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6D365] to-[#B77A35] italic">Motifs</span>
                    </h1>
                    <p className="text-[#A5A8B0] max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-lg">
                        Explore the rich tapestry of Indonesian Batik heritage — each motif a chapter in a centuries-old story, woven with royal philosophy and sacred tradition.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <button
                        className={`px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border rounded-sm outline-none ${activeFilter === "All"
                            ? "bg-[#E5A93D]/10 text-[#E5A93D] border-[#E5A93D]/50 shadow-[0_0_25px_rgba(229,169,61,0.15)]"
                            : "bg-[#0A0A0F] text-[#7F848F] border-[#1D1E22] hover:border-[#8C5535]/50 hover:text-[#C7C4BC]"
                            }`}
                        onClick={() => setActiveFilter("All")}
                    >
                        COMPLETE COLLECTION
                    </button>
                    {REGIONS.map((region) => (
                        <button
                            key={region}
                            className={`px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 border rounded-sm outline-none ${activeFilter === region
                                ? "bg-[#E5A93D]/10 text-[#E5A93D] border-[#E5A93D]/50 shadow-[0_0_25px_rgba(229,169,61,0.15)]"
                                : "bg-[#0A0A0F] text-[#7F848F] border-[#1D1E22] hover:border-[#8C5535]/50 hover:text-[#C7C4BC]"
                                }`}
                            onClick={() => setActiveFilter(region)}
                        >
                            {region}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {filteredMotifs.map((motif, idx) => (
                        <div
                            key={motif.id}
                            className="group relative bg-[#0A0A0F] overflow-hidden border border-[#1D1E22] hover:border-[#8C5535]/40 transition-all duration-700 cursor-pointer flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(140,85,53,0.1)] outline-none"
                            onClick={() => setSelectedMotif(motif)}
                            style={{ animationDelay: `${0.1 * (idx % 4)}s` }}
                        >
                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#A5A8B0]/20 group-hover:border-[#E5A93D]/50 transition-colors z-20" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#A5A8B0]/20 group-hover:border-[#E5A93D]/50 transition-colors z-20" />

                            <div className="aspect-[4/5] w-full overflow-hidden relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-70 grayscale-[0.5] group-hover:grayscale-0 group-hover:opacity-90 mix-blend-luminosity group-hover:mix-blend-normal"
                                    style={{ backgroundImage: `url('${motif.imageUrl || "https://images.unsplash.com/photo-1620619896350-4a8eefdd4ab5?auto=format&fit=crop&q=80"}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/40 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#05050A]/80 via-transparent to-transparent opacity-80" />

                                <div className="absolute top-6 left-6 z-20">
                                    <span className="px-3 py-1 bg-[#1D1E22]/80 backdrop-blur-md border border-[#3D4049] text-[9px] uppercase tracking-[0.2em] text-[#E5A93D]">
                                        {motif.origin}
                                    </span>
                                </div>

                                {/* Placeholder Emoji logic if no image */}
                                {!motif.imageUrl && (
                                    <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-30 group-hover:opacity-70 transition-opacity">
                                        {motif.emoji}
                                    </div>
                                )}
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <p className="text-[#8C5535] text-[10px] font-bold tracking-[0.25em] uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 absolute -top-6">
                                        {motif.symbolism[0]}
                                    </p>
                                    <h3 className="text-2xl md:text-3xl font-normal text-[#F2F0E6] mb-3 drop-shadow-lg" style={{ fontFamily: "var(--font-display)" }}>
                                        {motif.name}
                                    </h3>
                                    <p className="text-[#C7C4BC] text-xs font-light tracking-wide leading-relaxed line-clamp-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                                        "{motif.philosophy}"
                                    </p>
                                </div>
                                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-[#E5A93D]/30 flex items-center justify-center text-[#E5A93D] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-[0_0_15px_rgba(229,169,61,0.2)] bg-[#05050A]/80 backdrop-blur-md">
                                    <span className="material-symbols-outlined text-[1.1rem]">read_more</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedMotif && (
                <BatikDetailModal
                    motif={selectedMotif}
                    onClose={() => setSelectedMotif(null)}
                />
            )}
        </div>
    );
}

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#05050A] border-t border-[#1D1E22] py-16 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(229,169,61,0.02)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center relative z-10 text-center">
                <div className="w-12 h-12 rounded-full border border-[#E5A93D]/20 flex items-center justify-center text-[#E5A93D] mb-8 shadow-[0_0_15px_rgba(229,169,61,0.05)]">
                    <span className="material-symbols-outlined">all_inclusive</span>
                </div>

                <p className="max-w-2xl text-[16px] md:text-[20px] italic text-[#C7C4BC] font-light leading-relaxed mb-10" style={{ fontFamily: "var(--font-display)" }}>
                    "Batik is not merely art — it is the soul of a civilization,
                    woven thread by thread, generation by generation."
                </p>

                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#8C5535] to-transparent mb-10" />

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-[11px] font-bold tracking-[0.2em] uppercase text-[#7F848F]">
                    <span>© {new Date().getFullYear()} The Soul of Batik</span>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-[#3D4049]" />
                    <span className="text-[#E5A93D]">UNESCO Intangible Cultural Heritage</span>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-[#3D4049]" />
                    <Link href="/about" className="hover:text-[#F2F0E6] transition-colors">Project Mission</Link>
                </div>
            </div>
        </footer>
    );
}

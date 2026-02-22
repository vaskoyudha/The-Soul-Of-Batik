"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-[1000] py-4 px-6 md:px-12 bg-[#05050A]/80 backdrop-blur-xl border-b border-[#E5A93D]/10 transition-all duration-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full border border-[#E5A93D]/30 flex items-center justify-center text-[#E5A93D] shadow-[0_0_15px_rgba(229,169,61,0.1)] transition-transform duration-500 group-hover:rotate-90">
                        <span className="material-symbols-outlined text-xl">all_inclusive</span>
                    </div>
                    <span className="text-xl tracking-wide text-[#F2F0E6] transition-colors group-hover:text-[#F6D365]" style={{ fontFamily: "var(--font-display)" }}>
                        The Soul of Batik
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { link: "/", label: "Home" },
                        { link: "/scanner", label: "Scanner Lens" },
                        { link: "/gallery", label: "The Archive" },
                        { link: "/about", label: "Our Mission" },
                    ].map((item) => {
                        const isActive = pathname === item.link || (item.link !== "/" && pathname.startsWith(item.link));
                        return (
                            <Link
                                key={item.link}
                                href={item.link}
                                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 relative py-2 ${isActive ? "text-[#E5A93D]" : "text-[#7F848F] hover:text-[#C7C4BC]"
                                    }`}
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5A93D] to-transparent shadow-[0_0_8px_#E5A93D]" />
                                )}
                            </Link>
                        );
                    })}

                    <div className="w-[1px] h-6 bg-[#3D4049]" />

                    <Link
                        href="/scanner"
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E5A93D]/40 bg-[#E5A93D]/5 text-[#E5A93D] text-xs font-bold uppercase tracking-[0.15em] transition-all hover:bg-[#E5A93D] hover:text-[#05050A] shadow-[0_0_15px_rgba(229,169,61,0.1)] hover:shadow-[0_0_20px_rgba(229,169,61,0.4)]"
                    >
                        <span className="material-symbols-outlined text-[1.1rem]">barcode_scanner</span>
                        Initialize
                    </Link>
                </nav>

                <button className="md:hidden flex items-center text-[#F2F0E6] hover:text-[#E5A93D] transition-colors">
                    <span className="material-symbols-outlined text-3xl">menu</span>
                </button>
            </div>
        </header>
    );
}

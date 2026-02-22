import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#05050A] pt-32 pb-20 text-[#A5A8B0] selection:bg-[#E5A93D]/30" style={{ fontFamily: "var(--font-body)" }}>

            {/* Ambient Lighting */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(229,169,61,0.02)_0%,transparent_60%)] mix-blend-screen" />
            </div>

            {/* Hero Editorial Section */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 mb-32 animate-fade-in-up">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    <div className="lg:col-span-6 relative">
                        <div className="inline-flex items-center gap-4 mb-10">
                            <span className="w-16 h-[1px] bg-[#E5A93D]" />
                            <span className="text-[#E5A93D] text-[10px] font-bold tracking-[0.3em] uppercase">The Manifesto</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-light text-[#F2F0E6] mb-8 leading-[0.9] tracking-tighter" style={{ fontFamily: "var(--font-display)" }}>
                            The Soul of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6D365] to-[#B77A35] italic pr-4 drop-shadow-[0_0_20px_rgba(229,169,61,0.3)]">Batik</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-[#C7C4BC] font-light leading-relaxed mb-12 border-l-2 border-[#8C5535]/50 pl-8 py-2">
                            Bridging centuries of majestic cultural wisdom with cutting-edge artificial intelligence to preserve Indonesia's profound intangible heritage.
                        </p>

                        <Link href="/scanner" className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#8C5535] to-[#E5A93D] text-[#05050A] text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,169,61,0.3)]">
                            Initiate Optical Decoder
                            <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                        </Link>
                    </div>

                    <div className="lg:col-span-6 relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-[#8C5535]/15 to-[#E5A93D]/10 blur-3xl" />
                        <div className="relative aspect-[3/4] w-full bg-[#0A0A0F] border border-[#1D1E22] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                            <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs2WBj9CW3y-lbj8qmqhHnILjdr3PUaW-LopDxFwC8PUmjfYTySZTAW1TVcOYHJlGjhoM0XR8xAn3QuzyHXbhd5ibRd7btOD0QSkdTPi7NzXJ6pixqKW39Uth9i-LxFaplW9CpBjxHNLxacBImcP83I052F5p3X-7Dpfw32YJB9Vqm7i3XYbOjp2txSDmTsgH0y-T2vaIEIeA8omPPH3Jx6ZCGCYKiUfhfTEVyLu6EYb1ezhbnTc88-B4N7iJa2t0SPodbQICUqU0')] bg-cover bg-center opacity-80 grayscale-[0.3] mix-blend-luminosity hover:mix-blend-normal transition-all duration-[2s] hover:scale-105" />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-10">
                                <div className="bg-[#05050A]/80 backdrop-blur-md border outline outline-1 outline-[#3D4049]/50 border-[#E5A93D]/30 p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    <p className="text-[15px] italic text-[#F2F0E6] leading-relaxed mb-6 font-light" style={{ fontFamily: "var(--font-display)" }}>
                                        "On October 2, 2009, UNESCO inscribed Indonesian Batik on the Representative List of the Intangible Cultural Heritage of Humanity."
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-[9px] uppercase tracking-widest text-[#E5A93D] font-bold">UNESCO Declaration</p>
                                        <span className="material-symbols-outlined text-[#8C5535]">public</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="relative py-40 bg-[#0A0A0F] border-y border-[#1D1E22] overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxfpD6_3ODL9JUq8e3IoR_0eD9sQdRTuB78vi9jAHiw0oRfc2Il52zjd-G1exU2pmymXQ1W_IQqXI6i7ipy7si11sjuBi6cQHrKkkSnMqvuR-q-OdH-4euC6WhT6cQe-1ZN6gSwcMydzFIvDQ1ecXqFa_RMN1W-Je8h-m6UfuL79x0R1aSUf5uICCZ7KvTCSK-NshStPkA7dAY8A8tyn-vzgTXwdQNY-RzpiTeCaFt-B498BUAPknXHgN1j9rRLNso1jce3mzn7Vw')] bg-cover bg-center opacity-[0.03] grayscale mix-blend-overlay" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <h2 className="text-4xl md:text-6xl font-light text-[#F2F0E6] mb-12" style={{ fontFamily: "var(--font-display)" }}>
                        The Silent <span className="text-[#E5A93D] italic">Symphony</span>
                    </h2>

                    <div className="space-y-8 text-lg md:text-xl text-[#A5A8B0] font-light leading-relaxed">
                        <p>
                            Batik is not just cloth — it is the soul of Indonesian civilization. Every
                            motif tells a story that stretches back centuries, carrying the philosophical
                            wisdom of Javanese courts, the prayers of mothers for their children, and the
                            aspirations of a people written in hot wax.
                        </p>
                        <p>
                            Yet today, many wear batik without knowing the profound meaning behind the patterns they carry.
                            <strong className="text-[#F2F0E6] font-normal"> The Soul of Batik</strong> was created to change that. By combining advanced neural networks with rigorous cultural archiving, we make it possible for anyone to simply point a lens at a fabric and instantly decode the hidden philosophy within.
                        </p>
                    </div>
                </div>
            </div>

            {/* How AI Works - Premium Cards */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-[#8C5535] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">The Pipeline</span>
                        <h2 className="text-5xl md:text-6xl font-light text-[#F2F0E6]" style={{ fontFamily: "var(--font-display)" }}>
                            Neural <span className="text-[#E5A93D] italic">Mechanics</span>
                        </h2>
                    </div>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#3D4049] to-transparent ml-8 hidden md:block" />
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {[
                        { num: "01", icon: "camera", title: "Optical Capture", desc: "The device initiates a high-resolution visual capture of the geometric fabric structure." },
                        { num: "02", icon: "psychology", title: "CNN Architecture", desc: "A Convolutional Neural Network analyzes the microscopic patterns through multiple hidden layers." },
                        { num: "03", icon: "emergency_share_off", title: "Data Isolation", desc: "100% Edge Computing. The analysis happens entirely within your device. No data leaves your secure perimeter." },
                        { num: "04", icon: "auto_stories", title: "Philosophical Payload", desc: "The geometric signature is matched, unlocking the encrypted royalty, origin, and deep cultural philosophy." }
                    ].map((step, idx) => (
                        <div key={idx} className="group relative bg-[#0A0A0F] border border-[#1D1E22] p-10 overflow-hidden hover:border-[#8C5535]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(140,85,53,0.1)] outline-none min-h-[350px] flex flex-col justify-end">

                            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_top_right,rgba(229,169,61,0.08)_0%,transparent_70%)] group-hover:opacity-100 opacity-0 transition-opacity duration-500" />

                            <div className="text-[8rem] font-light text-[#1D1E22] absolute top-2 right-2 pointer-events-none group-hover:text-[#3D4049] transition-colors duration-500" style={{ fontFamily: "var(--font-display)", lineHeight: 0.8 }}>
                                {step.num}
                            </div>

                            <div className="relative z-10 mt-16">
                                <div className="w-14 h-14 flex items-center justify-center text-[#E5A93D] mb-8 border border-[#3D4049] bg-[#05050A] group-hover:border-[#E5A93D]/50 group-hover:shadow-[0_0_20px_rgba(229,169,61,0.2)] transition-all duration-500 rounded-full">
                                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                                </div>
                                <h4 className="text-2xl font-normal text-[#F2F0E6] mb-4" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h4>
                                <p className="text-[#A5A8B0] text-sm leading-relaxed font-light">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stack Section */}
            <div className="bg-[#0A0A0F] border-t border-[#1D1E22] py-32 relative overflow-hidden shadow-[inset_0_50px_100px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E5A93D]/40 to-transparent" />

                <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in-up md:px-12">
                    <span className="material-symbols-outlined text-5xl text-[#3D4049] mb-8">integration_instructions</span>
                    <h2 className="text-4xl lg:text-5xl font-light text-[#F2F0E6] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                        System Architecture
                    </h2>
                    <p className="text-[#A5A8B0] leading-relaxed mb-16 text-lg md:text-xl font-light">
                        Built with <strong className="text-[#F2F0E6] font-normal">Next.js</strong> and <strong className="text-[#F2F0E6] font-normal">TypeScript</strong>.
                        Pattern recognition architecture powered by <strong className="text-[#F2F0E6] font-normal">TensorFlow.js</strong> running entirely at edge — prioritizing absolute privacy.
                        The neural matrices rely on a specialized MobileNetV2 transfer learning model optimized for high-speed optical feeds.
                    </p>

                    <Link href="/scanner" className="inline-flex items-center gap-4 px-10 py-5 bg-[#05050A] border border-[#3D4049] text-[#C7C4BC] hover:text-[#E5A93D] hover:border-[#E5A93D] uppercase tracking-[0.2em] text-xs font-bold transition-all shadow-xl hover:shadow-[0_0_30px_rgba(229,169,61,0.2)] group">
                        <span className="material-symbols-outlined text-xl group-hover:rotate-90 transition-transform duration-500">center_focus_strong</span>
                        INITIALIZE SCANNER LENS
                    </Link>
                </div>
            </div>
        </div>
    );
}

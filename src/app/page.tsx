import Link from "next/link";
import { BATIK_MOTIFS } from "@/data/batikMotifs";

export default function HomePage() {
  const featuredMotifs = BATIK_MOTIFS.slice(0, 3);

  return (
    <div className="bg-[#05050A] text-[#F2F0E6] overflow-x-hidden min-h-screen selection:bg-[#E5A93D]/30 selection:text-white" style={{ fontFamily: "var(--font-body)" }}>
      {/* 
        HERO SECTION - Digital Kraton 
        Focus: Cinematic depth, floating elements, rich shadows.
      */}
      <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Canvas: Floating particles and deep radial darkness */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(229,169,61,0.08)_0%,rgba(5,5,10,1)_70%)] opacity-80 animate-pulse mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxfpD6_3ODL9JUq8e3IoR_0eD9sQdRTuB78vi9jAHiw0oRfc2Il52zjd-G1exU2pmymXQ1W_IQqXI6i7ipy7si11sjuBi6cQHrKkkSnMqvuR-q-OdH-4euC6WhT6cQe-1ZN6gSwcMydzFIvDQ1ecXqFa_RMN1W-Je8h-m6UfuL79x0R1aSUf5uICCZ7KvTCSK-NshStPkA7dAY8A8tyn-vzgTXwdQNY-RzpiTeCaFt-B498BUAPknXHgN1j9rRLNso1jce3mzn7Vw')] bg-cover bg-center opacity-[0.05] grayscale mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto px-6 h-full flex flex-col justify-center items-center text-center">

          <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#E5A93D]/20 bg-[#0F0F14]/40 backdrop-blur-md shadow-[0_0_20px_rgba(229,169,61,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#E5A93D] animate-ping" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#F6D365] font-semibold">UNESCO Intangible Cultural Heritage</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter mb-8" style={{ fontFamily: "var(--font-display)" }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F2F0E6] to-[#C7C4BC] drop-shadow-2xl">THE SOUL OF</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F6D365] via-[#E5A93D] to-[#9B6615] drop-shadow-[0_0_40px_rgba(229,169,61,0.5)] italic pr-4">BATIK</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#C7C4BC] font-light leading-relaxed mb-14 drop-shadow-md">
            Journey into the heart of Javanese philosophy. An immersive, AI-driven exploration of Indonesia's most sacred patterns, written in wax and molten gold.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
            <Link href="/scanner" className="group relative w-full sm:w-auto overflow-hidden rounded-sm bg-[#E5A93D] px-10 py-5 transition-all duration-500 hover:bg-[#F6D365] hover:shadow-[0_0_50px_rgba(229,169,61,0.4)]">
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-[#05050A]">
                <span className="material-symbols-outlined text-[1.2rem]">barcode_scanner</span>
                Initialize Heritage Scanner
              </span>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]" />
            </Link>

            <Link href="/gallery" className="group relative w-full sm:w-auto px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] text-[#E5A93D] transition-all hover:text-[#F6D365]">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-[1.2rem]">menu_book</span>
                Explore The Archive
              </span>
              <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#E5A93D] to-transparent scale-x-50 opacity-50 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#C7C4BC] font-light">Descend</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#E5A93D]/80 to-transparent" />
        </div>
      </section>

      {/* 
        MOTIF GALLERY SHOWCASE - Asymmetric layered cards 
      */}
      <section className="relative py-32 z-10 bg-gradient-to-b from-[#0A0A0F] to-[#05050A]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl border-l-[3px] border-[#8C5535] pl-8">
              <h2 className="text-4xl md:text-6xl font-normal leading-tight tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
                Sacred <br /><span className="text-[#E5A93D] italic">Masterpieces</span>
              </h2>
              <p className="text-[#A5A8B0] text-lg font-light">
                Discover the patterns born from profound meditation and royal decrees. Each motif is an ancient prayer rendered in visual form.
              </p>
            </div>
            <Link href="/gallery" className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-[#F2F0E6] hover:text-[#E5A93D] transition-colors pb-2 border-b border-[#E5A93D]/30 hover:border-[#E5A93D]">
              Enter Full Gallery <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {featuredMotifs.map((motif, index) => (
              <Link href="/gallery" key={motif.id} className="group relative block outline-none">
                <div className={`relative w-full aspect-[3/4] overflow-hidden bg-[#0A0A0F] border border-[#1D1E22] transition-all duration-700 ease-in-out group-hover:border-[#8C5535]/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(140,85,53,0.15)] group-focus:ring-2 group-focus:ring-[#E5A93D] ${index === 1 ? 'lg:translate-y-12' : ''} ${index === 2 ? 'lg:translate-y-24' : ''}`}>

                  {/* Image with subtle zoom and darken on hover */}
                  <div className="absolute inset-0 bg-center bg-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-60 grayscale-[0.3] group-hover:grayscale-0" style={{ backgroundImage: `url('${motif.imageUrl || "https://images.unsplash.com/photo-1620619896350-4a8eefdd4ab5?auto=format&fit=crop&q=80"}')` }} />

                  {/* Rich gradient fade from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-[#05050A]/60 to-transparent" />

                  {/* Border glow effects */}
                  <div className="absolute inset-0 border border-[#E5A93D]/0 transition-colors duration-700 group-hover:border-[#E5A93D]/20 z-10 pointer-events-none" />

                  {/* Content positioning */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <span className="inline-block px-3 py-1 bg-[#1D1E22]/80 backdrop-blur-sm border border-[#3D4049] text-[10px] uppercase tracking-widest text-[#E5A93D]">
                        Region: {motif.origin}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#E5A93D] text-[#05050A] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(229,169,61,0.5)] transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                        <span className="material-symbols-outlined text-[1.2rem]">north_east</span>
                      </div>
                    </div>

                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      <p className="text-sm text-[#8C5535] font-semibold tracking-widest uppercase mb-3 opacity-80">{motif.symbolism[0] || "Philosophical Core"}</p>
                      <h3 className="text-3xl lg:text-4xl text-[#F2F0E6] mb-4 drop-shadow-lg" style={{ fontFamily: "var(--font-display)" }}>
                        {motif.name}
                      </h3>
                      <p className="text-[#A5A8B0] text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150 line-clamp-3">
                        "{motif.philosophy}"
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 
        WHY PRESERVE BATIK? - High Editorial Design
      */}
      <section className="relative py-32 bg-[#05050A] border-t border-[#1D1E22]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8C5535]/10 to-[#E5A93D]/5 blur-3xl rounded-full" />
              <div className="relative aspect-[4/5] w-full border border-[#1D1E22] bg-[#0A0A0F] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105 opacity-70 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs2WBj9CW3y-lbj8qmqhHnILjdr3PUaW-LopDxFwC8PUmjfYTySZTAW1TVcOYHJlGjhoM0XR8xAn3QuzyHXbhd5ibRd7btOD0QSkdTPi7NzXJ6pixqKW39Uth9i-LxFaplW9CpBjxHNLxacBImcP83I052F5p3X-7Dpfw32YJB9Vqm7i3XYbOjp2txSDmTsgH0y-T2vaIEIeA8omPPH3Jx6ZCGCYKiUfhfTEVyLu6EYb1ezhbnTc88-B4N7iJa2t0SPodbQICUqU0')" }} />

                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#05050A] via-[#05050A]/80 to-transparent">
                  <div className="border-l-2 border-[#E5A93D] pl-6 py-2">
                    <p className="text-xl md:text-2xl text-[#F2F0E6] italic font-light leading-relaxed mb-4" style={{ fontFamily: "var(--font-display)" }}>
                      "The beauty lies not just in the fabric, but in the patience and meditation required for every single stroke of hot wax."
                    </p>
                    <p className="text-xs uppercase tracking-widest text-[#8C5535] font-semibold">— Javanese Artisan Wisdom</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="block text-sm font-semibold tracking-[0.2em] uppercase text-[#8C5535] mb-6">Our Deep Mission</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6D365] to-[#C28723] italic">Canvas.</span>
              </h2>
              <p className="text-lg text-[#C7C4BC] font-light leading-relaxed mb-12">
                We are building the bridge between ancient spiritual practices and cutting-edge artificial intelligence. The Soul of Batik exists to ensure that the silent prayers embedded in these patterns are never lost to time.
              </p>

              <div className="space-y-8 relative">
                <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#3D4049] via-[#8C5535]/50 to-transparent" />

                <div className="relative pl-16 group">
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full border border-[#3D4049] bg-[#0A0A0F] flex items-center justify-center text-[#A5A8B0] group-hover:border-[#E5A93D] group-hover:text-[#E5A93D] group-hover:shadow-[0_0_15px_rgba(229,169,61,0.2)] transition-all duration-300">
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <h3 className="text-xl text-[#F2F0E6] font-medium mb-3">Intangible Heritage</h3>
                  <p className="text-[#7F848F] font-light leading-relaxed">Honoring the UNESCO declaration, we preserve the complex cultural identity of Indonesia through meticulous high-resolution archiving.</p>
                </div>

                <div className="relative pl-16 group">
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full border border-[#3D4049] bg-[#0A0A0F] flex items-center justify-center text-[#A5A8B0] group-hover:border-[#E5A93D] group-hover:text-[#E5A93D] group-hover:shadow-[0_0_15px_rgba(229,169,61,0.2)] transition-all duration-300">
                    <span className="material-symbols-outlined">memory</span>
                  </div>
                  <h3 className="text-xl text-[#F2F0E6] font-medium mb-3">Neural Decoding</h3>
                  <p className="text-[#7F848F] font-light leading-relaxed">Deploying specialized Convolutional Neural Networks on the edge to analyze the microscopic geometric structures and recognize origins instantly.</p>
                </div>

                <div className="relative pl-16 group">
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full border border-[#3D4049] bg-[#0A0A0F] flex items-center justify-center text-[#A5A8B0] group-hover:border-[#E5A93D] group-hover:text-[#E5A93D] group-hover:shadow-[0_0_15px_rgba(229,169,61,0.2)] transition-all duration-300">
                    <span className="material-symbols-outlined">menu_book</span>
                  </div>
                  <h3 className="text-xl text-[#F2F0E6] font-medium mb-3">Philosophical Retrieval</h3>
                  <p className="text-[#7F848F] font-light leading-relaxed">Translating deep visual mathematics into the spoken lore, origin stories, and spiritual philosophy that birthed each design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

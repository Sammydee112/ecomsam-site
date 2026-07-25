function Footer() {
    const socials = [
      { label: "Instagram", url: "https://instagram.com/ecomsamhq" },
      { label: "Threads", url: "https://threads.net/@ecomsamhq" },
      { label: "TikTok", url: "https://tiktok.com/@ecomsamhq" },
      { label: "Twitter / X", url: "https://x.com/ecomsamhq" },
    ]
  
    const platforms = [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/samuel-temidayo-7782532b4/" },
        { label: "Contra", url: "https://contra.com/samuel_temidayo_el44tkg0" },
        { label: "Upwork", url: "https://www.upwork.com/freelancers/~010e61262c33c52f15" },
        { label: "Gumroad", url: "https://ecomsam5.gumroad.com/l/alltop" },
      ]
  
    return (
      <footer className="relative py-16 px-6 border-t border-white/5 bg-white/[0.015] overflow-hidden">
        {/* Oversized faint logo mark, background watermark */}
        <svg
          className="absolute -bottom-16 -right-16 w-[420px] h-[420px] opacity-[0.04] pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
        >
          <polygon points="60,40 100,40 70,80 30,80" fill="#F0A500" />
          <polygon points="45,80 85,80 55,120 15,120" fill="#F0A500" />
          <polygon points="30,120 70,120 40,160 0,160" fill="#F0A500" />
        </svg>
  
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="font-heading font-extrabold text-2xl text-soft-white mb-3">
              Ecom<span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent underline decoration-gold">Sam</span>
            </div>
            <p className="font-body text-soft-white/50 text-sm max-w-xs">Full-stack ecommerce & AI automation specialist.</p>
          </div>
  
          <div className="flex gap-16">
            <div>
              <h4 className="font-heading font-semibold text-soft-white mb-3 text-sm uppercase tracking-wide">Social</h4>
              <ul className="space-y-2">
                {socials.map((s, i) => (
                  <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer" className="font-body text-soft-white/60 hover:text-gold transition-colors duration-300 text-sm">{s.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-soft-white mb-3 text-sm uppercase tracking-wide">Platforms</h4>
              <ul className="space-y-2">
                {platforms.map((p, i) => (
                  <li key={i}><a href={p.url} target="_blank" rel="noopener noreferrer" className="font-body text-soft-white/60 hover:text-gold transition-colors duration-300 text-sm">{p.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  
        <div className="relative max-w-5xl mx-auto mt-10 pt-6 border-t border-white/5 text-center">
          <p className="font-body text-soft-white/45 text-xs">© 2026 EcomSam. All rights reserved.</p>
        </div>
      </footer>
    )
  }
  
  export default Footer
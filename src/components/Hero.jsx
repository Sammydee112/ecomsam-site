import { useState, useEffect } from 'react'

function Hero() {
  const words = ["Sales", "Customers", "Revenue", "Buyers"]
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  const services = [
    "Shopify Store Design", "Klaviyo Email Marketing", "AI Automation", "Voice AI Agents",
    "Lead Scoring", "n8n · Zapier · Make", "Vibe Coding Builds", "AI Web & App Building",
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Slow rotating aurora ring - the "video" feel */}
      <div className="absolute inset-0 -z-20 flex items-center justify-center">
        <div className="w-[900px] h-[900px] rounded-full opacity-[0.08] animate-spinSlow"
          style={{
            background: 'conic-gradient(from 0deg, #F0A500, transparent 20%, transparent 60%, #F0A500, transparent 90%)',
            filter: 'blur(80px)',
          }}
        ></div>
      </div>

      {/* Drifting blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.04] rounded-full blur-[120px] animate-drift1 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/[0.04] rounded-full blur-[120px] animate-drift2 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-white/[0.02] rounded-full blur-[100px] animate-drift1 -z-10"></div>

      {/* Grain texture overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      }}></div>

      <p className="font-body text-gold tracking-widest uppercase text-sm mb-4 opacity-0 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
        Ecommerce & AI Automation Specialist
      </p>

      <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-soft-white max-w-4xl leading-tight opacity-0 animate-fadeUp" style={{ animationDelay: '0.3s' }}>
        AI-Powered Shopify Stores That Convert Browsers Into{' '}
        <span key={wordIndex} className="inline-block bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent animate-wordSwap">
          {words[wordIndex]}
        </span>{' '}
        — On Autopilot
      </h1>

      <p className="font-body text-lg text-soft-white/70 max-w-2xl mt-6 opacity-0 animate-fadeUp" style={{ animationDelay: '0.5s' }}>
        I build high-converting Shopify stores and AI automation systems that handle sales, support, and follow-up — so you can scale without hiring.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10 opacity-0 animate-fadeUp" style={{ animationDelay: '0.7s' }}>
        <a href="#contact" className="btn-primary px-8 py-4">
          Get in Touch
        </a>
        <a href="#demo" className="btn-secondary px-8 py-4">
          See My Work
        </a>
      </div>

      <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-0 animate-fadeUp" style={{ animationDelay: '0.9s' }}>
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="font-body text-soft-white/45 text-sm">{s} ✦</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
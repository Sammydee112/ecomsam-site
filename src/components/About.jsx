function About() {
    return (
      <section id="about" className="relative overflow-hidden py-24 px-6 bg-grid">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gold/[0.07] rounded-full blur-[130px] animate-drift1 -z-10"></div>
  
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-gold tracking-widest uppercase text-sm mb-3">About Me</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-body-dark">The Person Behind EcomSam</h2>
          <p className="font-body text-body-dark/70 mt-6 leading-relaxed">
            I'm Samuel — a full-stack ecommerce and AI automation specialist based in Nigeria, working with brands worldwide. I build Shopify stores that actually convert, and the AI systems that run quietly behind them: automated follow-ups, voice AI, and workflows that save you hours every week.
          </p>
          <p className="font-body text-body-dark/70 mt-4 leading-relaxed">
            I'm certified in AI & Automation through TS Academy, and I approach every project the same way: understand what's actually broken before proposing a fix — not a generic template pitch.
          </p>
  
          <div className="flex justify-center gap-10 mt-10">
            <div>
              <p className="font-heading font-extrabold text-3xl bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">5★</p>
              <p className="font-body text-body-dark/50 text-xs mt-1">Client Rating</p>
            </div>
            <div>
              <p className="font-heading font-extrabold text-3xl bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">24h</p>
              <p className="font-body text-body-dark/50 text-xs mt-1">Response Time</p>
            </div>
            <div>
              <p className="font-heading font-extrabold text-3xl bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent">85%</p>
              <p className="font-body text-body-dark/50 text-xs mt-1">TS Academy Score</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
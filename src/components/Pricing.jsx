function Pricing() {
    return (
      <section id="pricing" className="relative overflow-hidden py-24 px-6">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/[0.06] rounded-full blur-[130px] animate-drift2 -z-10"></div>
  
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="font-body text-gold tracking-widest uppercase text-sm mb-3">Investment</p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-body-dark">Clear, Honest Pricing</h2>
          <p className="font-body text-body-dark/60 mt-4">No hidden fees. Every project gets a custom quote — here's what to expect to start.</p>
        </div>
  
        <div className="max-w-md mx-auto bg-white border border-black/10 rounded-2xl p-8 text-center shadow-2xl shadow-black/10">
          <p className="font-heading font-semibold text-body-dark/80">Shopify Store Build</p>
          <p className="font-heading font-extrabold text-5xl bg-gradient-to-r from-gold to-amber-500 bg-clip-text text-transparent mt-3">$300</p>
          <p className="font-body text-body-dark/50 text-sm mt-1">starting from</p>
  
          <div className="mt-6 bg-gold/10 border border-gold/20 rounded-lg px-4 py-3">
            <p className="font-body text-body-dark/80 text-sm">50% upfront to begin — the remaining 50% only once your store is fully built and you're happy with it.</p>
          </div>
  
          <ul className="mt-6 space-y-2 text-left">
            {["Custom Shopify build, no theme limits", "Mobile-optimized design", "Product setup & payment integration", "2 rounds of revisions"].map((item, i) => (
              <li key={i} className="font-body text-body-dark/70 text-sm flex items-start gap-2">
                <span className="text-gold">✓</span> {item}
              </li>
            ))}
          </ul>
  
          <a href="#contact" className="btn-primary mt-8 block w-full px-8 py-4">Get Started</a>
        </div>
  
        <p className="text-center font-body text-body-dark/50 text-sm mt-6">Need automation, voice AI, or a full package? <a href="#contact" className="text-gold hover:underline">Let's talk</a> — every project gets a custom quote.</p>
      </section>
    )
  }
  
  export default Pricing
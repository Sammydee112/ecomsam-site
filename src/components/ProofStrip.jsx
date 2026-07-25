function ProofStrip() {
    const proofs = [
      { label: "5-Star Client Review", detail: "Fleeceera — DTC Loungewear Store" },
      { label: "AI & Automation Certified", detail: "TS Academy — Score 85/100" },
      { label: "Voice AI Built & Deployed", detail: "Mama Tee's Kitchen — Restaurant Concierge" },
    ]
  
    return (
      <section className="relative overflow-hidden py-20 px-6 border-y border-black/5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/[0.08] rounded-full blur-[120px] animate-drift1 -z-10"></div>
  
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {proofs.map((item, i) => (
            <div key={i} className="flex flex-col items-center card-interactive py-6 px-4">
              <span className="font-heading font-bold text-gold text-lg mb-1">{item.label}</span>
              <span className="font-body text-body-dark/60 text-sm">{item.detail}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default ProofStrip
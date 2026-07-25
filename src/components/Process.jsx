import AnimatedBg from './AnimatedBg'

function Process() {
  const steps = [
    { num: "01", title: "Discovery Call", desc: "We talk through your goals, your current setup, and what's actually holding you back — no generic sales pitch." },
    { num: "02", title: "Custom Plan", desc: "You get a clear proposal: what I'll build, the timeline, and the exact deliverables — no vague scope." },
    { num: "03", title: "Build & Update", desc: "I build in focused sprints, sharing progress along the way so you're never left wondering what's happening." },
    { num: "04", title: "Launch & Support", desc: "Your store or system goes live, fully tested — plus support after launch so nothing breaks silently." },
  ]

  return (
    <section id="process" className="relative overflow-hidden bg-grid pt-0 pb-24 px-6">
      <AnimatedBg variant={1} />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <p className="font-body text-gold tracking-widest uppercase text-sm mb-3">How It Works</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-soft-white">A Simple, Transparent Process</h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="card-interactive p-6">
            <span className="font-heading font-extrabold text-5xl bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent">{step.num}</span>
            <h3 className="font-heading font-bold text-xl text-soft-white mt-3">{step.title}</h3>
            <p className="font-body text-soft-white/60 text-sm mt-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
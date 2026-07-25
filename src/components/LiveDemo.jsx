import demoImg from '../assets/fashbeaute-demo.png'
import PhoneDemo from './PhoneDemo'

function LiveDemo() {
  return (
    <section id="demo" className="relative overflow-hidden py-24 px-6">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/[0.06] rounded-full blur-[140px] animate-drift2 -z-10"></div>

      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="font-body text-gold tracking-widest uppercase text-sm mb-3">Live Client Work</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-body-dark">See Real Work, Built From Scratch</h2>
        <p className="font-body text-body-dark/60 mt-4 max-w-xl mx-auto">A luxury beauty store and a luxury real estate landing page — both built entirely custom, no theme editor limits.</p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        <div className="w-full max-w-xl relative">
          <div className="absolute inset-0 bg-gold/10 blur-3xl scale-90 -z-10"></div>
          <div className="bg-[#111] rounded-t-2xl border-4 border-b-0 border-[#2a2a2a] p-3 shadow-2xl shadow-black/30">
            <div className="flex justify-center mb-2">
              <div className="w-2 h-2 rounded-full bg-[#2a2a2a]"></div>
            </div>
            <div className="rounded-lg overflow-hidden h-[380px] bg-near-black">
              <img src={demoImg} alt="Fash Beauté store demo" className="w-full object-cover object-top" />
            </div>
          </div>
          <div className="relative">
            <div className="h-4 bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] rounded-b-md mx-2"></div>
            <div className="h-3 bg-gradient-to-b from-[#2a2a2a] to-[#151515] mx-auto rounded-b-2xl" style={{ width: '108%', marginLeft: '-4%' }}></div>
          </div>
          <p className="font-body text-body-dark/50 text-xs mt-4 text-center">Fash Beauté — Shopify luxury beauty store</p>
        </div>

        <PhoneDemo />
      </div>

      <div className="text-center mt-16">
        <a href="#contact" className="btn-primary px-8 py-4 inline-block">Let's Build Yours</a>
      </div>
    </section>
  )
}

export default LiveDemo
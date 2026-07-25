import { useState, useEffect } from 'react'
import flyerImg from '../assets/mamatees-flyer.png'
import workflowImg from '../assets/mamatees-workflow.png'
import AnimatedBg from './AnimatedBg'

function AutomationCase() {
  const images = [flyerImg, workflowImg]
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden pt-24 pb-12 px-6 bg-white/[0.02] border-y border-white/5">
      <AnimatedBg variant={2} />

      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="font-body text-gold tracking-widest uppercase text-sm">AI Automation in Action</p>
      </div>

      <div className="max-w-4xl mx-auto relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 aspect-[3/2] transition-all duration-300 ease-out hover:border-white/20">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="AI voice concierge workflow for Mama Tee's Kitchen"
            className={`absolute inset-0 w-full h-full object-contain bg-near-black transition-opacity duration-1000 ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ease-out hover:scale-125 ${
                i === activeIndex ? 'bg-gold' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <a href="#contact" className="btn-primary px-8 py-4">
          Build Something Like This
        </a>
      </div>
    </section>
  )
}

export default AutomationCase
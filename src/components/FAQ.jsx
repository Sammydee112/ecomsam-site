import { useState } from 'react'
import AnimatedBg from './AnimatedBg'

function FAQ() {
  const faqs = [
    { q: "How long does a typical project take?", a: "Most Shopify store builds take 1-3 weeks depending on complexity. Automation systems (AI agents, voice AI, workflows) usually take 1-2 weeks. I'll give you an exact timeline after our discovery call." },
    { q: "Do you only build Shopify stores, or automation too?", a: "Both — and that's the point. I build the store itself (custom Liquid, no theme limits) and the AI/automation systems that run behind it: email flows, lead scoring, voice AI, and workflow automation." },
    { q: "I'm not technical — will I understand what you're building?", a: "Yes. I explain everything in plain language, share progress as I build, and make sure you understand exactly what you're getting and how to use it — no jargon dumps." },
    { q: "What if I already have a store and just need automation added?", a: "That's a common request — I can plug AI automation, lead scoring, or email flows into an existing Shopify store without rebuilding it from scratch." },
    { q: "How do we handle payment?", a: "I work with international clients regularly and support multiple secure payment methods depending on your location — we'll agree on this clearly before any work begins." },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative overflow-hidden py-24 px-6">
      <AnimatedBg variant={2} />

      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <p className="font-body text-gold tracking-widest uppercase text-sm mb-3">Questions</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-soft-white">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="card-interactive overflow-hidden rounded-lg">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 ease-out"
            >
              <span className="font-heading font-semibold text-soft-white">{item.q}</span>
              <span className="text-gold text-xl transition-transform duration-300 ease-out">{openIndex === i ? "−" : "+"}</span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 py-5 font-body text-soft-white/70 text-sm bg-white/[0.01]">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ

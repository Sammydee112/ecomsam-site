import AnimatedBg from './AnimatedBg'

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 px-6 text-center">
      <AnimatedBg variant={3} />

      <div className="max-w-2xl mx-auto">
        <p className="font-body text-gold tracking-widest uppercase text-sm mb-3">Let's Work Together</p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-soft-white">Ready to Build Something That Actually Converts?</h2>
        <p className="font-body text-soft-white/70 mt-4">Tell me about your store or idea — I'll get back to you within 24 hours.</p>

        <form className="mt-10 flex flex-col gap-4 text-left">
          <input type="text" placeholder="Your name" className="input-field" />
          <input type="email" placeholder="Your email" className="input-field" />
          <textarea placeholder="Tell me about your project" rows="4" className="input-field"></textarea>
          <button type="submit" className="btn-primary px-8 py-4">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
function Header() {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-near-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-heading font-extrabold text-2xl text-soft-white">
            Ecom<span className="bg-gradient-to-r from-gold to-amber-300 bg-clip-text text-transparent underline decoration-gold">Sam</span>
          </div>
          <nav className="hidden md:flex gap-8 font-body text-soft-white">
            <a href="#services" className="nav-link">Services</a>
            <a href="#demo" className="nav-link">Work</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a href="#contact" className="btn-primary px-5 py-2.5">
            Get in Touch
          </a>
        </div>
      </header>
    )
  }
  
  export default Header
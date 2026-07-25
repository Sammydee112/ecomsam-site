function PhoneDemo() {
    return (
      <div className="mx-auto w-[280px] relative">
        <div className="absolute inset-0 bg-gold/10 blur-3xl scale-90 -z-10"></div>
  
        <div className="relative bg-[#111] rounded-[2.5rem] border-[6px] border-[#2a2a2a] shadow-2xl shadow-black/70 p-2">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#111] rounded-full z-10"></div>
  
          <div className="rounded-[1.8rem] overflow-hidden h-[560px] bg-near-black">
            <iframe
              src="https://miami-luxe-forge.lovable.app/"
              title="James Mitchell luxury real estate landing page"
              className="w-full h-full block"
              style={{ border: 'none', margin: 0, padding: 0, display: 'block' }}
              scrolling="no"
              loading="lazy"
            />
          </div>
        </div>
        <p className="font-body text-body-dark/50 text-xs mt-4 text-center">James Mitchell — Luxury Real Estate Landing Page</p>
      </div>
    )
  }
  
  export default PhoneDemo
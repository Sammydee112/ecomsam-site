function StackSection({ children, index, light = false }) {
    return (
      <div
        className={`sticky top-0 min-h-screen rounded-t-[2.5rem] overflow-hidden shadow-[0_-25px_80px_rgba(0,0,0,0.45)] ${
          light ? 'bg-off-white' : 'bg-near-black'
        }`}
        style={{ zIndex: index }}
      >
        <div className={`absolute top-0 left-0 w-full h-px ${light ? 'bg-gradient-to-r from-transparent via-black/10 to-transparent' : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'}`}></div>
        <div className={`absolute top-0 left-0 w-full h-32 pointer-events-none ${light ? 'bg-gradient-to-b from-black/5 to-transparent' : 'bg-gradient-to-b from-black/40 to-transparent'}`}></div>
  
        {children}
      </div>
    )
  }
  
  export default StackSection
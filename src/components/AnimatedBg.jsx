function AnimatedBg({ variant = 1 }) {
    const variants = {
      1: "top-1/4 left-1/4 bg-white/[0.03] animate-drift1",
      2: "top-0 right-0 bg-indigo-400/[0.02] animate-drift2",
      3: "top-1/3 right-1/3 bg-white/[0.025] animate-drift1",
    }
    const blobClass = variants[variant] || variants[1]
  
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute w-96 h-96 rounded-full blur-[120px] ${blobClass}`}></div>
      </div>
    )
  }
  
  export default AnimatedBg
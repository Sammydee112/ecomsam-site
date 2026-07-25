import { useEffect, useState } from 'react'

function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      style={{
        background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.025), transparent 45%)`,
      }}
    />
  )
}

export default CursorGlow

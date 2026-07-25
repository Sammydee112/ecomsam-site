function LightBg({ variant = 1 }) {
  const blobSets = {
    1: [
      { className: 'top-1/4 -left-16 bg-gold/[0.08] animate-drift1', size: 'w-[420px] h-[420px]' },
      { className: 'bottom-1/3 -right-12 bg-amber-100/60 animate-drift2', size: 'w-80 h-80' },
    ],
    2: [
      { className: 'top-0 right-1/4 bg-gold/[0.06] animate-drift2', size: 'w-96 h-96' },
      { className: 'bottom-1/4 left-1/4 bg-body-dark/[0.04] animate-drift1', size: 'w-72 h-72' },
    ],
  }

  const blobs = blobSets[variant] || blobSets[1]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.035] via-transparent to-body-dark/[0.025]" />

      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -14deg,
            transparent,
            transparent 72px,
            rgba(26, 26, 46, 0.025) 72px,
            rgba(26, 26, 46, 0.025) 73px
          )`,
        }}
      />

      <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-body-dark/[0.04] opacity-60" />
      <div className="absolute -bottom-32 -left-32 w-[560px] h-[560px] rounded-full border border-gold/[0.08] opacity-40" />

      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[100px] ${blob.size} ${blob.className}`}
        />
      ))}
    </div>
  )
}

export default LightBg

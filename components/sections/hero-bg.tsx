export function HeroBG() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent)",
        }}
      />
      <div className="aurora-blob animate-aurora" style={{ top: "-10%", left: "8%", background: "#7C5CFF" }} />
      <div
        className="aurora-blob animate-aurora"
        style={{ top: "-5%", right: "5%", background: "#22D3EE", animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{ top: "20%", left: "40%", background: "#3B82F6", animationDelay: "-12s" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/70 animate-particle"
          style={{
            width: 2,
            height: 2,
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${6 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}

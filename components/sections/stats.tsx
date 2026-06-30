import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";

const ITEMS = [
  { to: 48000, suffix: "+", label: "Applications générées" },
  { to: 99, suffix: "%", label: "Disponibilité de la plateforme" },
  { to: 60, suffix: "s", label: "Temps moyen de génération" },
  { to: 12000, suffix: "+", label: "Développeurs actifs" },
];

export function Stats() {
  return (
    <section className="py-24 px-4 border-y border-white/[0.06] bg-gradient-to-b from-transparent via-panel/40 to-transparent">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {ITEMS.map((it, i) => (
          <Reveal key={it.label} delay={i * 90} className="text-center">
            <div className="font-display font-[750] text-white text-[34px] md:text-[46px] tracking-tight">
              <Counter to={it.to} suffix={it.suffix} />
            </div>
            <p className="text-ink-dim text-[13px] mt-2">{it.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

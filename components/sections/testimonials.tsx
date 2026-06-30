import { Reveal } from "@/components/ui/reveal";

const TESTIMONIALS = [
  { name: "Léa Fontaine", role: "CTO, Nimbus Health", quote: "Ce qu'on aurait livré en trois semaines a pris une matinée. L'architecture générée était directement défendable en revue de code." },
  { name: "Marcus Owusu", role: "Fondateur, Ledgerly", quote: "RotBuild a conçu notre authentification et nos webhooks de paiement sans qu'on touche une ligne de configuration." },
  { name: "Sofia Marchetti", role: "Lead Engineer, Atlas Studio", quote: "On utilise RotBuild pour chaque prototype client désormais. La qualité du code généré ne ressemble à rien de ce qu'on avait vu avant." },
];

export function Testimonials() {
  return (
    <section className="py-28 px-4 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-center text-[12.5px] uppercase tracking-[0.18em] text-violet mb-3 font-medium">Témoignages</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="text-center font-display font-[700] text-white tracking-[-0.025em] text-[32px] md:text-[44px]">
          Ils construisent plus vite avec RotBuild
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5 mt-16">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <div
              className="rounded-2xl p-6 h-full ring-1 ring-white/[0.08] bg-white/[0.02] backdrop-blur-sm animate-float"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <p className="text-ink/90 text-[14.5px] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold text-white bg-gradient-to-br from-violet to-cyan">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-white text-[13.5px] font-medium">{t.name}</p>
                  <p className="text-ink-faint text-[12px]">{t.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { HeroBG } from "./hero-bg";
import { PromptBar } from "./prompt-bar";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
      <HeroBG />
      <div className="relative z-10 w-full flex flex-col items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ring-1 ring-white/10 bg-white/[0.04] text-[12.5px] text-ink-dim mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            L&apos;ingénieur logiciel IA, du prompt au déploiement
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-center font-display font-[750] text-white tracking-[-0.035em] leading-[0.98] text-[44px] sm:text-[64px] md:text-[80px] max-w-4xl">
            Décrivez l&apos;app.
            <br />
            <span className="text-gradient">RotBuild la construit.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-center text-ink-dim text-[16.5px] md:text-[18px] max-w-xl mt-6 leading-relaxed">
            Architecture, frontend, backend, base de données, authentification, API et déploiement — générés
            automatiquement par un ingénieur IA, pas un simple générateur de code.
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 w-full px-2">
          <PromptBar />
        </Reveal>
      </div>
      <ChevronDown size={20} className="absolute bottom-8 text-ink-faint animate-bounce" aria-hidden="true" />
    </section>
  );
}

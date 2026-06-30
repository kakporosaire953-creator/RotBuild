import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CTA() {
  return (
    <section className="py-28 px-4">
      <Reveal>
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden ring-1 ring-white/10"
          style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.12), rgba(34,211,238,0.06))" }}
        >
          <h2 className="font-display font-[750] text-white tracking-[-0.03em] text-[30px] md:text-[42px] leading-tight">
            Votre prochaine application
            <br />
            commence par un prompt.
          </h2>
          <p className="text-ink-dim text-[15px] mt-4 max-w-md mx-auto">
            Rejoignez les équipes qui construisent plus vite avec un ingénieur logiciel IA.
          </p>
          <div className="flex justify-center mt-8">
            <MagneticButton>
              Commencer gratuitement <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

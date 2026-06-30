import { ArrowRight, Sparkles } from "lucide-react";

const COLS = [
  { h: "Produit", items: ["Fonctionnalités", "Modèles", "Tarifs", "Documentation"] },
  { h: "Entreprise", items: ["À propos", "Carrières", "Blog", "Contact"] },
  { h: "Ressources", items: ["Communauté", "Statut", "Support", "API"] },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-4 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-violet to-cyan">
                <Sparkles size={15} className="text-white" />
              </span>
              <span className="font-display font-[650] text-[15px] text-white">RotBuild</span>
            </div>
            <p className="text-ink-faint text-[13.5px] max-w-xs leading-relaxed">
              L&apos;ingénieur logiciel IA qui conçoit, code et déploie vos applications, du premier prompt au
              dernier déploiement.
            </p>
            <form className="mt-6 flex gap-2 max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                Adresse e-mail
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="vous@exemple.com"
                className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg bg-white/[0.04] ring-1 ring-white/10 text-[13px] text-white placeholder:text-ink-faint outline-none focus:ring-white/25"
              />
              <button type="submit" aria-label="S'abonner" className="px-3.5 rounded-lg ring-1 ring-white/10 text-white hover:bg-white/5 shrink-0">
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
          {COLS.map((c) => (
            <div key={c.h}>
              <p className="text-white text-[13px] font-medium mb-4">{c.h}</p>
              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-ink-faint text-[13px] hover:text-ink/90 transition-colors">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-ink-faint text-[12.5px]">© 2026 RotBuild. Tous droits réservés.</p>
          <div className="flex gap-5 text-ink-faint text-[12.5px]">
            <a href="#" className="hover:text-ink/90">Confidentialité</a>
            <a href="#" className="hover:text-ink/90">Conditions</a>
          </div>
        </div>
      </div>
      <div
        className="absolute -bottom-[6%] left-1/2 -translate-x-1/2 font-display font-[800] text-[20vw] leading-none text-white/[0.025] pointer-events-none select-none whitespace-nowrap"
        aria-hidden="true"
      >
        RotBuild
      </div>
    </footer>
  );
}

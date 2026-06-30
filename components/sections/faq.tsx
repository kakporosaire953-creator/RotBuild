"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const FAQS = [
  { q: "RotBuild génère-t-il vraiment une application complète ?", a: "Oui. RotBuild conçoit l'architecture, génère le frontend et le backend, crée la base de données, configure l'authentification et déploie l'application — pas seulement des extraits de code." },
  { q: "Puis-je modifier le code généré ?", a: "Le code est exporté vers un dépôt Git standard que vous possédez entièrement. Vous pouvez le modifier librement avec vos outils habituels." },
  { q: "Quelles bases de données sont supportées ?", a: "PostgreSQL, MySQL et SQLite sont pris en charge nativement, avec migrations générées automatiquement à partir de votre modèle de données." },
  { q: "RotBuild convient-il aux applications en production ?", a: "Oui. Le code généré suit les standards de production : typage strict, tests, gestion d'erreurs et optimisation des performances." },
  { q: "Comment fonctionne la tarification ?", a: "Un plan gratuit permet de générer et d'explorer des projets. Les plans payants ajoutent le déploiement, la collaboration et le support prioritaire." },
];

function FAQItem({ item, i }: { item: (typeof FAQS)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i * 60}>
      <div className="border-b border-white/[0.08]">
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="w-full flex items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-white text-[15px] font-medium font-display">{item.q}</span>
          <ChevronDown
            size={18}
            className={`text-ink-faint shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        <div
          className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]"
          style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
        >
          <p className="text-ink-dim text-[14px] leading-relaxed pb-5 pr-8">{item.a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section className="py-28 px-4 max-w-2xl mx-auto">
      <Reveal>
        <h2 className="text-center font-display font-[700] text-white tracking-[-0.025em] text-[32px] md:text-[40px]">
          Questions fréquentes
        </h2>
      </Reveal>
      <div className="mt-12">
        {FAQS.map((f, i) => (
          <FAQItem key={f.q} item={f} i={i} />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Wand2 } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { BuildConsole } from "./build-console";

const PLACEHOLDERS = [
  "Créer un CRM",
  "Créer un SaaS IA",
  "Créer une plateforme e-commerce",
  "Créer une application bancaire",
  "Créer un ERP",
  "Créer un tableau de bord",
  "Créer une marketplace",
];

export function PromptBar() {
  const [phIdx, setPhIdx] = useState(0);
  const [building, setBuilding] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (building || value) return;
    const t = setInterval(() => setPhIdx((i) => (i + 1) % PLACEHOLDERS.length), 2600);
    return () => clearInterval(t);
  }, [building, value]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className="relative rounded-2xl p-[1px]"
        style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.5), rgba(34,211,238,0.3))" }}
      >
        <div className="rounded-2xl bg-panel/95 backdrop-blur-xl flex items-center gap-3 pl-5 pr-2 py-2.5">
          <Wand2 size={17} className="text-violet shrink-0" aria-hidden="true" />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={PLACEHOLDERS[phIdx]}
            aria-label="Décrivez l'application à générer"
            className="flex-1 bg-transparent outline-none text-[14.5px] text-white placeholder:text-ink-faint py-2"
          />
          <MagneticButton onClick={() => setBuilding(true)} className="!py-2.5 !px-4 shrink-0">
            Générer <ArrowRight size={15} />
          </MagneticButton>
        </div>
      </div>
      <p className="text-center text-[12.5px] text-ink-faint mt-3">
        Aucune carte bancaire requise · génération en moins de 60 secondes
      </p>
      <div className="mt-8">
        <BuildConsole active={building} />
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Check, FileCode, Monitor, Terminal as TerminalIcon } from "lucide-react";

export const STEPS = [
  "Analyse de la demande",
  "Conception de l'architecture",
  "Création de l'interface",
  "Développement du backend",
  "Création de la base de données",
  "Configuration de l'authentification",
  "Installation des dépendances",
  "Optimisation",
  "Déploiement",
];

const CODE_LINES = [
  "import { auth } from '@/lib/auth'",
  "import { db } from '@/lib/db'",
  "",
  "export async function POST(req) {",
  "  const session = await auth()",
  "  const data = await req.json()",
  "  const record = await db.project.create({",
  "    data: { ...data, ownerId: session.user.id }",
  "  })",
  "  return Response.json(record)",
  "}",
];

const TERMINAL_LINES = [
  "$ rotbuild generate --target=web",
  "✓ architecture résolue (next15 / postgres)",
  "✓ schéma de base de données créé",
  "✓ 14 composants générés",
  "✓ routes API connectées",
  "✓ authentification configurée",
  "✓ build de production réussi",
  "→ déploiement en cours sur edge…",
];

export function BuildConsole({ active }: { active: boolean }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [codeIdx, setCodeIdx] = useState(0);
  const [termIdx, setTermIdx] = useState(0);

  useEffect(() => {
    if (!active) {
      setStepIdx(0);
      setCodeIdx(0);
      setTermIdx(0);
      return;
    }
    const stepTimer = setInterval(() => {
      setStepIdx((i) => (i >= STEPS.length - 1 ? (clearInterval(stepTimer), i) : i + 1));
    }, 650);
    const codeTimer = setInterval(() => setCodeIdx((i) => (i < CODE_LINES.length ? i + 1 : i)), 320);
    const termTimer = setInterval(() => setTermIdx((i) => (i < TERMINAL_LINES.length ? i + 1 : i)), 560);
    return () => {
      clearInterval(stepTimer);
      clearInterval(codeTimer);
      clearInterval(termTimer);
    };
  }, [active]);

  return (
    <div className="relative rounded-2xl ring-1 ring-white/10 bg-panel/90 backdrop-blur-xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[12px] text-ink-dim font-mono">rotbuild — build console</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              active && stepIdx < STEPS.length - 1 ? "bg-cyan animate-pulse" : "bg-[#28C840]"
            }`}
          />
          <span className="text-[11px] text-ink-faint font-mono">
            {active ? (stepIdx >= STEPS.length - 1 ? "terminé" : "génération…") : "en attente"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border-r border-white/[0.06] flex">
          <div className="w-10 sm:w-12 border-r border-white/[0.06] py-3 flex flex-col items-center gap-3 text-ink-faint">
            <FileCode size={15} />
            <TerminalIcon size={15} />
            <Monitor size={15} />
          </div>
          <div className="flex-1 p-4 min-h-[180px]">
            <p className="text-[11px] text-ink-faint mb-2 font-mono">app/api/projects/route.ts</p>
            <pre className="text-[12px] leading-[1.7] overflow-hidden font-mono">
              {CODE_LINES.slice(0, codeIdx).map((line, i) => (
                <div key={i}>
                  <span className="text-ink-faint select-none mr-3">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-ink/90">{line}</span>
                </div>
              ))}
              {active && codeIdx < CODE_LINES.length && (
                <span className="inline-block w-1.5 h-3.5 bg-cyan align-middle animate-pulse ml-7" />
              )}
            </pre>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="p-4 border-b border-white/[0.06] min-h-[110px]">
            <p className="text-[11px] text-ink-faint mb-2 font-mono">terminal</p>
            <div className="text-[12px] leading-[1.8] font-mono">
              {TERMINAL_LINES.slice(0, termIdx).map((l, i) => (
                <div key={i} className={l.startsWith("✓") ? "text-emerald-400" : l.startsWith("→") ? "text-cyan" : "text-ink-dim"}>
                  {l}
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 flex-1 flex flex-col gap-2">
            <p className="text-[11px] text-ink-faint font-mono">aperçu</p>
            <div className="flex-1 rounded-lg ring-1 ring-white/[0.08] bg-gradient-to-br from-[#11131F] to-panel p-3 flex flex-col gap-1.5 min-h-[80px]">
              {STEPS.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <span
                    className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      i <= stepIdx ? "bg-cyan/20" : "bg-white/5"
                    }`}
                  >
                    {i < stepIdx || (i === stepIdx && stepIdx === STEPS.length - 1) ? (
                      <Check size={9} className="text-cyan" />
                    ) : i === stepIdx && active ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                    ) : null}
                  </span>
                  <span className={`text-[11.5px] transition-colors duration-300 ${i <= stepIdx ? "text-ink/90" : "text-ink-faint/60"}`}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

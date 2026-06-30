"use client";

import { useState } from "react";
import { Monitor, Smartphone, Sparkles, Tablet } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Device = "desktop" | "tablet" | "mobile";

const WIDTHS: Record<Device, string> = { desktop: "100%", tablet: "560px", mobile: "320px" };
const DEVICES: { k: Device; icon: typeof Monitor; label: string }[] = [
  { k: "desktop", icon: Monitor, label: "Ordinateur" },
  { k: "tablet", icon: Tablet, label: "Tablette" },
  { k: "mobile", icon: Smartphone, label: "Mobile" },
];

export function Demo() {
  const [device, setDevice] = useState<Device>("desktop");

  return (
    <section className="py-28 px-4 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-center text-[12.5px] uppercase tracking-[0.18em] text-violet mb-3 font-medium">Démonstration</p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="text-center font-display font-[700] text-white tracking-[-0.025em] text-[32px] md:text-[44px]">
          Parfait sur tous les écrans
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Sélection de l'appareil">
          {DEVICES.map(({ k, icon: Icon, label }) => (
            <button
              key={k}
              role="tab"
              aria-selected={device === k}
              onClick={() => setDevice(k)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-[13px] transition-colors ring-1",
                device === k ? "bg-white text-void ring-white" : "text-ink-dim ring-white/10 hover:bg-white/5"
              )}
            >
              <Icon size={14} aria-hidden="true" /> {label}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-12 flex justify-center">
          <div
            className="transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] w-full"
            style={{ maxWidth: WIDTHS[device] }}
          >
            <div className="rounded-2xl ring-1 ring-white/10 bg-panel overflow-hidden shadow-[0_40px_100px_-30px_rgba(124,92,255,0.25)]">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-[11px] text-ink-faint font-mono">app.rotbuild.dev</span>
              </div>
              <div className="aspect-video bg-gradient-to-br from-[#11131F] via-[#0E1018] to-panel flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-12 h-12 mx-auto rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br from-violet to-cyan">
                    <Sparkles size={20} className="text-white" />
                  </div>
                  <p className="text-ink/90 text-[14px]">Aperçu de votre application générée</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

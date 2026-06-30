"use client";

import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const LINKS = ["Fonctionnalités", "Modèles", "Entreprise", "Documentation", "Tarifs", "Communauté"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "flex items-center justify-between gap-6 w-full max-w-6xl rounded-2xl px-5 backdrop-blur-xl transition-all duration-500",
          scrolled
            ? "py-2.5 bg-panel/80 ring-1 ring-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
            : "py-3.5 bg-white/[0.03] ring-1 ring-white/[0.06]"
        )}
      >
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-violet to-cyan">
            <Sparkles size={15} className="text-white" />
          </span>
          <span className="font-display font-[650] text-[15px] tracking-tight text-white">RotBuild</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="px-3.5 py-2 text-[13.5px] text-ink-dim hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a href="#" className="text-[13.5px] text-ink-dim hover:text-white transition-colors px-2">
            Connexion
          </a>
          <MagneticButton className="!px-4 !py-2 !text-[13px]">Commencer gratuitement</MagneticButton>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="lg:hidden text-white"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute top-[72px] w-[calc(100%-2rem)] max-w-6xl rounded-2xl bg-panel/95 ring-1 ring-white/10 backdrop-blur-xl p-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a key={l} href="#" className="px-3 py-2.5 text-[14px] text-ink/90 rounded-lg hover:bg-white/5">
              {l}
            </a>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <a href="#" className="px-3 py-2.5 text-[14px] text-ink/90">
            Connexion
          </a>
          <MagneticButton className="mt-1 justify-center">Commencer gratuitement</MagneticButton>
        </div>
      )}
    </div>
  );
}

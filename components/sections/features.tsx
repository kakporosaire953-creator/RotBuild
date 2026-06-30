"use client";

import { motion } from "framer-motion";
import {
  Bug, CreditCard, Database, Eye, Github, LucideIcon,
  Lock, Plug, Rocket, Sparkles, Users,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Feature = { icon: LucideIcon; title: string; desc: string };

const FEATURES: Feature[] = [
  { icon: Sparkles, title: "Ingénieur IA", desc: "Comprend votre demande et conçoit l'architecture complète avant d'écrire la moindre ligne." },
  { icon: Eye, title: "Aperçu instantané", desc: "Visualisez chaque modification en temps réel, sans rechargement, sans attente." },
  { icon: Rocket, title: "Déploiement", desc: "Mise en production automatique sur infrastructure edge dès la génération terminée." },
  { icon: Lock, title: "Authentification", desc: "Connexion, sessions et rôles utilisateurs configurés automatiquement et en sécurité." },
  { icon: CreditCard, title: "Paiements", desc: "Intégration native des abonnements et paiements ponctuels, prête à l'emploi." },
  { icon: Database, title: "Base de données", desc: "Schéma relationnel généré et migré automatiquement selon votre modèle de données." },
  { icon: Github, title: "GitHub", desc: "Chaque génération est poussée vers un dépôt versionné, prêt à être cloné." },
  { icon: Bug, title: "Débogage IA", desc: "Détecte et corrige les erreurs de build et d'exécution sans intervention manuelle." },
  { icon: Users, title: "Collaboration", desc: "Travaillez à plusieurs sur le même projet, en temps réel, avec historique complet." },
  { icon: Plug, title: "API", desc: "Connectez vos services existants ou exposez votre propre API en un clic." },
];

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  const Icon = f.icon;
  return (
    <Reveal delay={i * 60}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="relative rounded-2xl p-6 h-full ring-1 ring-white/[0.07] bg-white/[0.015] hover:bg-white/[0.035] transition-colors duration-300 overflow-hidden group"
      >
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ background: "radial-gradient(180px circle at 30% 20%, rgba(124,92,255,0.12), transparent 70%)" }}
        />
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 ring-1 ring-white/10 bg-gradient-to-br from-violet/[0.18] to-cyan/[0.1]">
          <Icon size={18} className="text-[#A78BFA]" aria-hidden="true" />
        </div>
        <h3 className="text-white font-display font-[650] text-[16px] mb-1.5">{f.title}</h3>
        <p className="text-ink-dim text-[13.5px] leading-relaxed">{f.desc}</p>
      </motion.div>
    </Reveal>
  );
}

export function Features() {
  return (
    <section className="py-28 px-4 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-center text-[12.5px] uppercase tracking-[0.18em] text-violet mb-3 font-medium">
          Fonctionnalités
        </p>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="text-center font-display font-[700] text-white tracking-[-0.025em] text-[32px] md:text-[44px] max-w-2xl mx-auto leading-tight">
          Tout ce qu&apos;il faut pour passer de l&apos;idée au produit
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} f={f} i={i} />
        ))}
      </div>
    </section>
  );
}

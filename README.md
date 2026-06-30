# RotBuild — Landing page

Landing page officielle de RotBuild, l'ingénieur logiciel IA. Construite avec Next.js 15, React 19, TypeScript, Tailwind CSS et Framer Motion.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        polices (Inter Tight, Inter, JetBrains Mono) + métadonnées
  page.tsx           assemble toutes les sections
  globals.css        tokens globaux, focus visible, prefers-reduced-motion
components/
  layout/            nav, footer, smooth-scroll-provider (Lenis)
  sections/          hero, build-console (élément signature), prompt-bar,
                      logos-marquee, features, demo, stats, testimonials, faq, cta
  ui/                reveal, magnetic-button, counter
hooks/
  use-lenis.ts        scroll fluide, désactivé si prefers-reduced-motion
  use-magnetic.ts      effet bouton magnétique
lib/
  utils.ts            cn() — fusion de classes Tailwind
```

## Élément signature

La **Build Console** (`components/sections/build-console.tsx`) simule en direct la génération
d'une application : éditeur de code qui tape, terminal qui log, et checklist de progression
synchronisée — déclenchée par la barre de prompt du Hero.

## Accessibilité & performance

- Focus clavier visible partout (`:focus-visible`)
- `prefers-reduced-motion` respecté (Lenis désactivé, animations raccourcies)
- HTML sémantique, `aria-*` sur les contrôles interactifs
- Polices chargées via `next/font` (auto-hébergées, pas de requête externe)
- Images/animations optimisées pour viser un score Lighthouse > 95

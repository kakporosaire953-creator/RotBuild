const LOGOS = [
  "Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL", "Prisma",
  "Vercel", "Stripe", "Supabase", "GraphQL", "Docker", "tRPC",
];

export function LogosMarquee() {
  return (
    <section className="py-16 border-y border-white/[0.06] overflow-hidden">
      <p className="text-center text-[12.5px] uppercase tracking-[0.18em] text-ink-faint mb-8">
        Compatible avec votre stack préférée
      </p>
      <div className="relative">
        <div className="flex gap-16 animate-marquee w-max">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <span
              key={i}
              className="text-[19px] font-display font-[600] text-ink-faint hover:text-ink/90 transition-colors shrink-0"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-void to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-void to-transparent" />
      </div>
    </section>
  );
}

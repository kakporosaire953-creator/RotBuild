import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import { Hero } from "@/components/sections/hero";
import { LogosMarquee } from "@/components/sections/logos-marquee";
import { Features } from "@/components/sections/features";
import { Demo } from "@/components/sections/demo";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <LogosMarquee />
        <Features />
        <Demo />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}

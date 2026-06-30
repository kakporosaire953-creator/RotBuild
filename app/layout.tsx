import type { Metadata } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RotBuild — L'ingénieur logiciel IA",
  description:
    "RotBuild conçoit l'architecture, génère le frontend et le backend, crée la base de données, configure l'authentification et déploie votre application — à partir d'un simple prompt.",
  metadataBase: new URL("https://rotbuild.dev"),
  openGraph: {
    title: "RotBuild — L'ingénieur logiciel IA",
    description: "Décrivez l'app. RotBuild la construit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${interTight.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans bg-void text-ink">{children}</body>
    </html>
  );
}

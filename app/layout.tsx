import type { Metadata } from "next";
import { Anton, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import RevealInit from "@/components/reveal-init";

const anton = Anton({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apex Racing Academy — Creștem următoarea generație de piloți",
  description:
    "Club de motorsport cu academie de juniori: Viteză în Coastă, Super Slalom, Karting. Șase titluri naționale — și o generație nouă pe grilă.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${anton.variable} ${jost.variable}`}>
      <body>
        <a className="skip" href="#continut">
          Sari la conținut
        </a>
        <div className="shell">
          <Nav />
          <main id="continut" className="pg" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
        <RevealInit />
      </body>
    </html>
  );
}

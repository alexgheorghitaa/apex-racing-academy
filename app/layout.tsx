import type { Metadata } from "next";
import { Anton, Jost, Allura } from "next/font/google";
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

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const TITLE = "Apex Racing Academy — Creștem următoarea generație de piloți";
const DESC =
  "Club de motorsport cu academie de juniori: Viteză în Coastă, Super Slalom, Karting. Șase titluri naționale — și o generație nouă pe grilă.";

export const metadata: Metadata = {
  metadataBase: new URL("https://apex-racing-academy.vercel.app"),
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    locale: "ro_RO",
    siteName: "Apex Racing Academy",
    images: [{ url: "/hero/hero-04.jpg", width: 1024, height: 576, alt: "Apex Racing Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/hero/hero-04.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${anton.variable} ${jost.variable} ${allura.variable}`}>
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

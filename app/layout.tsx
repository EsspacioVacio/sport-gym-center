import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"], weight: ["600", "700", "800", "900"], style: ["normal", "italic"], variable: "--font-display",
});
const body = Barlow({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Sport Gym Center | Entrena sin límites",
  description: "Supera tus límites. Cuida tu cuerpo. Alcanza tu mejor versión. Tarifas desde $50 MXN.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript><style>{`[data-reveal]{opacity:1!important}`}</style></noscript>
        {children}
      </body>
    </html>
  );
}

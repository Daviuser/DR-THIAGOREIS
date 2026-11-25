import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
// Manrope variável (200–800), única família do site.
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const metadata: Metadata = {
  title: "Dr. Thiago Reis | Odontologia e Endodontia",
  description: "Conheça o trabalho do Dr. Thiago Reis e agende sua consulta pelo WhatsApp.",
};
export const viewport: Viewport = { themeColor: "#101923" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={sans.variable}><body>{children}</body></html>;
}

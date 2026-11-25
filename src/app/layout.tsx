import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { units, whatsappForUnit } from "@/lib/site";
import "./globals.css";
// Manrope variável (200–800), única família do site.
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const siteUrl = "https://drthiagoreis.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dr. Thiago Reis | Dentista em Santaluz e Valente - BA",
  description: "Atendimento odontológico com Dr. Thiago Reis em Santaluz e Valente, Bahia. Consulte os serviços e fale com a unidade pelo WhatsApp.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Dr. Thiago Reis",
    title: "Dr. Thiago Reis | Dentista em Santaluz e Valente - BA",
    description: "Atendimento odontológico em Santaluz e Valente, Bahia. Consulte os serviços e entre em contato pelo WhatsApp.",
    images: [{ url: "/images/thiago-reis.webp", alt: "Dr. Thiago Reis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Thiago Reis | Dentista em Santaluz e Valente - BA",
    description: "Atendimento odontológico em Santaluz e Valente, Bahia.",
    images: ["/images/thiago-reis.webp"],
  },
};
export const viewport: Viewport = { themeColor: "#101923" };
const localBusinesses = units.map((unit) => ({
  "@type": "Dentist",
  "@id": `${siteUrl}/#${unit.id}`,
  name: "Dr. Thiago Reis",
  url: siteUrl,
  telephone: `+${unit.phone}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: unit.name,
    addressRegion: "BA",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: `${unit.name}, Bahia` },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${unit.phone}`,
    contactType: "Agendamento",
    url: whatsappForUnit(unit),
    availableLanguage: "Portuguese",
  },
}));
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${siteUrl}/#profissional`, name: "Dr. Thiago Reis", jobTitle: "Dentista", url: siteUrl },
    ...localBusinesses,
  ],
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={sans.variable}><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    {children}
  </body></html>;
}

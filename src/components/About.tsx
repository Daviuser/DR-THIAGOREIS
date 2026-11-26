import Image from "next/image";
import { Reveal, Words } from "./Reveal";
export default function About() {
  return (
    <section id="apresentacao" className="py-24 md:py-40">
      <div className="wrap grid items-center gap-14 md:grid-cols-[.9fr_1.1fr] md:gap-20">
        <div className="relative">
          <div data-mask className="relative aspect-[2/3] overflow-hidden rounded-sm">
            <Image data-parallax="-6" src="/images/thiago-reis-about.png" alt="Dr. Thiago Reis, cirurgião-dentista" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-contain" />
          </div>
          <div aria-hidden data-parallax="8" className="absolute -bottom-6 -right-4 -z-10 h-2/3 w-2/3 border border-accent/50" />
        </div>
        <div>
          <p className="mb-5 text-2xl font-semibold tracking-wide text-accent md:text-3xl">Sobre mim</p>
          <Words text="Muito além de cuidar de sorrisos, transformar experiências." className="text-4xl font-extrabold tracking-tight leading-[1.1] text-soft md:text-5xl" />
          <div className="mt-8 max-w-prose space-y-5 text-lg leading-[1.75] text-mist/70">
            <Reveal delay={0.1}><p>Sou o Dr. Thiago Reis, dentista com atendimento em Santaluz-BA e Valente-BA.</p></Reveal>
            <Reveal delay={0.15}><p>Acredito que um sorriso bonito começa com cuidado, atenção e confiança. Por isso, meu atendimento é baseado em uma abordagem humanizada, buscando compreender as necessidades de cada pessoa e oferecer um tratamento individualizado.</p></Reveal>
            <Reveal delay={0.2}><p>Meu objetivo é proporcionar uma experiência odontológica acolhedora, segura e de qualidade, valorizando cada detalhe para que você se sinta confortável e confiante em todas as etapas do tratamento.</p></Reveal>
          </div>
          <Reveal delay={0.1} className="mt-10 border-l-2 border-accent pl-6">
            <blockquote className="text-xl font-semibold tracking-tight font-extrabold tracking-tight leading-snug text-soft md:text-3xl">“Seu sorriso merece atenção, cuidado e excelência.”</blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

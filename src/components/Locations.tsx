import { MapPin, MessageCircle } from "lucide-react";
import { units, whatsappForUnit } from "@/lib/site";
import { Item, Stagger, Words } from "./Reveal";

export default function Locations() {
  return (
    <section id="unidades" aria-labelledby="locations-title" className="bg-[#101923] py-24 text-mist md:py-32">
      <div className="wrap">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Words id="locations-title" as="h2" text="Atendimento odontológico em Santaluz e Valente" className="text-4xl font-extrabold tracking-tight leading-tight md:text-5xl" />
          <p className="mt-5 text-mist/70">Dr. Thiago Reis atende nas unidades de Santaluz-BA e Valente-BA. Escolha a cidade para consultar informações e falar pelo WhatsApp.</p>
        </div>
        <Stagger className="grid gap-4 md:grid-cols-2">
          {units.map((unit) => (
            <Item key={unit.id}>
              <article aria-labelledby={`unit-${unit.id}`} className="h-full rounded-2xl border border-white/[0.08] bg-[#182633] p-7 sm:p-9">
                <div className="flex items-center gap-3 text-accent"><MapPin size={20} aria-hidden="true" /><p className="text-sm font-semibold uppercase tracking-[.16em]">Unidade · {unit.name}-BA</p></div>
                <h3 id={`unit-${unit.id}`} className="mt-5 text-2xl font-bold tracking-tight text-soft">Dentista em {unit.name}, Bahia</h3>
                <p className="mt-3 leading-relaxed text-mist/70">Atendimento odontológico com Dr. Thiago Reis. Para informações e agendamento nesta unidade, entre em contato pelo WhatsApp.</p>
                <a href={whatsappForUnit(unit)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-3 text-sm font-semibold text-soft transition hover:border-accent hover:bg-accent/10 focus-visible:outline-accent" aria-label={`Falar com a unidade de ${unit.name} pelo WhatsApp, ${unit.displayPhone}`}>
                  <MessageCircle size={17} aria-hidden="true" /> {unit.displayPhone}
                </a>
              </article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

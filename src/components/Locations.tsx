import { MapPin, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { units, whatsappForUnit } from "@/lib/site";
import { Item, Stagger, Words } from "./Reveal";

export default function Locations() {
  return (
    <section id="unidades" aria-labelledby="locations-title" className="bg-[#101923] py-24 text-mist md:py-32">
      <div className="wrap">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Words id="locations-title" as="h2" text="Onde encontrar" className="text-4xl font-extrabold tracking-tight leading-tight md:text-5xl" />
          <p className="mt-5 text-mist/70">Dr. Thiago Reis atende em Santaluz e Valente. Consulte os endereços e fale com a unidade para agendar.</p>
        </div>
        <Stagger className="grid gap-4 md:grid-cols-2">
          {units.map((unit) => (
            <Item key={unit.id}>
              <article aria-labelledby={`unit-${unit.id}`} className="h-full rounded-2xl border border-white/[0.08] bg-[#182633] p-7 sm:p-9">
                <div className="flex items-center gap-3 text-accent"><MapPin size={20} aria-hidden="true" /><p className="text-sm font-semibold uppercase tracking-[.16em]">{unit.clinic} · {unit.name}</p></div>
                <h3 id={`unit-${unit.id}`} className="mt-5 text-2xl font-bold tracking-tight text-soft">{unit.name}, Bahia</h3>
                <p className="mt-3 leading-relaxed text-mist/70">{unit.address}</p>
                <a href={unit.maps} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent underline-offset-4 transition hover:text-soft hover:underline" aria-label={`Abrir endereço da unidade ${unit.clinic} em ${unit.name} no Google Maps`}><MapPin size={16} aria-hidden="true" /> Abrir no Google Maps <ExternalLink size={14} aria-hidden="true" /></a>
                <div className="mt-6 rounded-xl border border-white/[0.07] bg-deep/50 p-4">
                  <div className="flex items-center gap-2 text-accent"><Clock size={17} aria-hidden="true" /><span className="text-sm font-semibold">Horários de atendimento</span></div>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm"><p className="text-mist/65">Manhã <span className="mt-1 block font-semibold text-soft">08:00 às 12:00</span></p><p className="text-mist/65">Tarde <span className="mt-1 block font-semibold text-soft">14:00 às 18:00</span></p></div>
                </div>
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

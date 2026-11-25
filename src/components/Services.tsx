import * as Icons from "lucide-react";
import { services } from "@/lib/site";
import { Item, Stagger, Words, Reveal } from "./Reveal";
export default function Services() {
  return (
    <section id="servicos" className="relative -mt-10 rounded-t-[2.5rem] bg-[#101923] py-24 text-mist md:-mt-16 md:rounded-t-[4rem] md:py-32">
      <div className="wrap">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <Words text="Serviços odontológicos" className="text-4xl font-extrabold tracking-tight leading-tight md:text-5xl" />
          <Reveal className="mt-5 text-mist/70"><p>Conheça os cuidados odontológicos disponíveis e converse com o Dr. Thiago Reis para entender qual é indicado para você.</p></Reveal>
        </div>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Circle;
            return (
              <Item key={i}>
                <article className="group h-full rounded-2xl border border-white/[0.07] bg-[#182633] p-6 shadow-[0_10px_30px_-24px_rgba(0,0,0,.8)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#4A9BB8]/50 hover:bg-[#1c2d3b] hover:shadow-[0_18px_40px_-24px_rgba(74,155,184,.45)] sm:p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-accent group-hover:text-[#101923]">
                    <Icon size={24} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#D5E0E7]/70">{s.text}</p>
                </article>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

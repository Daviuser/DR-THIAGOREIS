import { differentials } from "@/lib/site";
import { Item, Stagger, Words } from "./Reveal";
export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-40">
      <div className="wrap">
        <Words text="O que você encontra no atendimento" className="max-w-2xl text-4xl font-extrabold tracking-tight leading-tight text-soft md:text-5xl" />
        <Stagger className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d) => (
            <Item key={d.title} className="border-t border-accent pt-6">
              <h3 className="text-xl font-semibold tracking-tight text-soft">{d.title}</h3>
              <p className="mt-3 leading-relaxed text-mist/65">{d.text}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

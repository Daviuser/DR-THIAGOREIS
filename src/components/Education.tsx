import { BookOpen, GraduationCap } from "lucide-react";
import { Item, Stagger, Words } from "./Reveal";

const education = [
  { icon: GraduationCap, title: "Graduação", institution: "Centro Universitário Adventista de Ensino do Nordeste" },
  { icon: BookOpen, title: "Aperfeiçoamento em Cirurgia Oral Avançada", institution: "IOA" },
  { icon: BookOpen, title: "Atualização em Endodontia", institution: "Avance" },
];

export default function Education() {
  return (
    <section id="formacao" aria-labelledby="education-title" className="bg-[#182633] py-24 text-mist md:py-32">
      <div className="wrap">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Words id="education-title" as="h2" text="Formação e qualificação" className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl" />
        </div>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {education.map(({ icon: Icon, title, institution }) => (
            <Item key={title}>
              <article className="h-full rounded-2xl border border-white/[0.08] bg-[#101923] p-7 sm:p-8">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent"><Icon size={21} aria-hidden="true" /></div>
                <h3 className="text-lg font-bold leading-snug text-soft">{title}</h3>
                <p className="mt-3 leading-relaxed text-mist/70">{institution}</p>
              </article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

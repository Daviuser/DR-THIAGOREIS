import { MessageCircle } from "lucide-react";
import { useContact } from "@/components/ContactSystem";
export default function FinalCta() {
  const openContact = useContact();
  return (
    <section id="contato" className="relative -mt-10 rounded-t-[2.5rem] overflow-hidden bg-gradient-to-br from-mid to-graphite py-28 md:-mt-16 md:rounded-t-[4rem] md:py-44">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(74,155,184,.35),transparent)]" />
      <div className="wrap relative text-center">
        <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5.4vw,4.2rem)] font-extrabold tracking-tight leading-[1.05] text-soft">Vamos conversar sobre o seu sorriso?</h2>
        <p className="mx-auto mt-6 max-w-md text-lg text-mist/65">Envie uma mensagem e receba informações para agendar sua consulta.</p>
        <button type="button" onClick={openContact} className="btn mt-10 hover:scale-[1.03]"><MessageCircle size={18} /> Agendar pelo WhatsApp</button>
      </div>
    </section>
  );
}

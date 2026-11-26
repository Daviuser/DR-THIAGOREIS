"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MapPin, X } from "lucide-react";
import { units, whatsappForUnit } from "@/lib/site";

const ContactContext = createContext<(() => void) | null>(null);
export function useContact() {
  const open = useContext(ContactContext);
  if (!open) throw new Error("useContact precisa ser usado dentro de ContactSystem.");
  return open;
}

export default function ContactSystem({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const open = useCallback(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    requestAnimationFrame(() => previousFocus.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const priorOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>("[data-contact-dialog] a, [data-contact-dialog] button");
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = priorOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return <ContactContext.Provider value={open}>
    {children}
    <AnimatePresence>
      {isOpen && <motion.div className="fixed inset-0 z-[200] grid place-items-center overflow-y-auto bg-[#080e14]/75 p-4 backdrop-blur-md sm:p-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
        <motion.section data-contact-dialog role="dialog" aria-modal="true" aria-labelledby="contact-title" aria-describedby="contact-description"
          className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#101923] p-6 shadow-[0_30px_100px_rgba(0,0,0,.6)] sm:p-8"
          initial={{ opacity: 0, y: 20, scale: .97, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, y: 10, scale: .98 }} transition={{ duration: .28 }}>
          <button ref={closeButton} type="button" onClick={close} aria-label="Fechar seleção de cidade" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-mist/65 transition hover:bg-white/10 hover:text-soft focus-visible:outline-accent"><X size={20} /></button>
          <div className="mb-7 pr-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-accent">Agendamento</p>
            <h2 id="contact-title" className="text-2xl font-bold tracking-tight text-soft sm:text-3xl">Onde deseja ser atendido?</h2>
            <p id="contact-description" className="mt-3 text-sm leading-relaxed text-mist/65">Selecione a cidade para continuar seu agendamento.</p>
          </div>
          <div className="grid gap-3">
            {units.map((unit) => <a key={unit.id} href={whatsappForUnit(unit)} target="_blank" rel="noopener noreferrer" onClick={close}
              className="group flex items-center gap-4 rounded-2xl border border-white/[.08] bg-[#182633] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#4A9BB8]/60 hover:bg-[#263B4B] hover:shadow-[0_12px_32px_-20px_rgba(74,155,184,.65)] focus-visible:outline-accent">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-[#101923]"><MapPin size={23} strokeWidth={1.7} /></span>
              <span className="min-w-0"><span className="block font-bold tracking-wide text-soft">{unit.clinic} — {unit.name}</span><span className="mt-1 block text-sm text-mist/60">Atendimento em {unit.name} - BA.</span><span className="mt-2 block text-sm font-medium tabular-nums text-accent">{unit.displayPhone}</span></span>
              <span aria-hidden className="ml-auto text-xl text-accent transition-transform group-hover:translate-x-1">→</span>
            </a>)}
          </div>
        </motion.section>
      </motion.div>}
    </AnimatePresence>
  </ContactContext.Provider>;
}

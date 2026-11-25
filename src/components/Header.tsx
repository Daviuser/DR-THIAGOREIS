"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { useContact } from "@/components/ContactSystem";
export default function Header() {
  const openContact = useContact();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid || open ? "bg-deep/80 py-3 shadow-[0_1px_0_rgba(232,238,242,.08)] backdrop-blur-md" : "py-6"}`}>
      <div className="wrap flex items-center justify-between">
        <a href="#top" className="text-2xl font-extrabold tracking-tight text-soft">{site.title}</a>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          {nav.map((n) => <a key={n.href} href={n.href} className="text-sm text-mist/70 transition-colors hover:text-soft">{n.label}</a>)}
          <button type="button" onClick={openContact} className="btn !px-5 !py-3 text-sm">Agendar consulta</button>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden md:hidden" aria-label="Mobile">
            <div className="wrap flex flex-col gap-5 py-8">
              {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-3xl font-bold tracking-tight text-soft">{n.label}</a>)}
              <button type="button" onClick={openContact} className="btn mt-2 justify-center">Agendar pelo WhatsApp</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

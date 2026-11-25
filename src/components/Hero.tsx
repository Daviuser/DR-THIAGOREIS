"use client";
import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { useContact } from "@/components/ContactSystem";
const ease = [0.22, 1, 0.36, 1] as const;
const lines = ["Dr. Thiago Reis", "Dentista em Santaluz", "e Valente - BA"];
const seq = (d: number) => ({ initial: { opacity: 0, y: 18, filter: "blur(6px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" }, transition: { delay: d, duration: 0.9, ease } });
export default function Hero() {
  const openContact = useContact();
  return (
    <MotionConfig reducedMotion="user">
      <section id="top" className="relative overflow-hidden bg-[linear-gradient(160deg,#101923,#182633_60%,#101923)] pt-24 md:pt-0">
        <div className="wrap grid min-h-[100svh] items-center gap-4 pb-14 md:grid-cols-[1fr_1fr] md:gap-10 md:pb-0">
          <div className="order-2 md:order-1">
            <motion.p {...seq(0.3)} className="mb-6 text-sm tracking-wide text-accent">{site.role}</motion.p>
            <h1 className="text-[clamp(2.2rem,4.8vw,4.4rem)] font-extrabold tracking-tight leading-[1.02] text-soft">
              {lines.map((l, i) => (
                <span key={l} className="block overflow-hidden pb-1">
                  <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.5 + i * 0.15, duration: 1.1, ease }}>{l}</motion.span>
                </span>
              ))}
            </h1>
            <motion.p {...seq(1.1)} className="mt-8 max-w-md text-lg leading-relaxed text-mist/70">
              Cuidado preciso, feito com calma. Atendimento odontológico em Santaluz-BA e Valente-BA, com atenção ao paciente, clareza em cada etapa e respeito ao seu tempo.
            </motion.p>
            <motion.div {...seq(1.3)} className="mt-10">
              <motion.button type="button" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} onClick={openContact} className="btn">
                <MessageCircle size={18} /> Agendar pelo WhatsApp
              </motion.button>
            </motion.div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-[380px] md:order-2 md:max-w-[560px]">
            <motion.div aria-hidden animate={{ scale: [1, 1.1, 1], opacity: [0.85, 1, 0.85] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-[18%] rounded-full bg-[radial-gradient(closest-side,rgba(74,155,184,.38),transparent)]" />
            <motion.div aria-hidden initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1.4, ease }}
              className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-t-[999px] bg-gradient-to-b from-mid/70 to-transparent ring-1 ring-accent/20" />
            <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute -left-4 top-[28%] h-40 w-40 rounded-full border border-accent/60 md:h-56 md:w-56" />
            <motion.span aria-hidden animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[2%] top-[22%] h-3 w-3 rounded-full bg-accent" />
            <motion.span aria-hidden animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[4%] bottom-[18%] h-2 w-2 rounded-full bg-mist/60" />
            <div data-parallax="-5" className="relative">
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)", opacity: 0, y: 40, scale: 1.06, filter: "blur(14px)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.35, duration: 1.7, ease }}>
                <Image src="/images/thiago-reis.webp" alt="Dr. Thiago Reis, dentista" width={1024} height={1536} priority sizes="(min-width:768px) 42vw, 80vw"
                  className="h-auto w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

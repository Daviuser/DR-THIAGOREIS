"use client";
import { motion, MotionConfig, type Variants } from "motion/react";
const ease = [0.22, 1, 0.36, 1] as const;
const vp = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Parágrafos: fade-up + blur-to-focus ao entrar na tela. */
export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div className={className} initial={{ opacity: 0, y: 28, filter: "blur(8px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={vp} transition={{ duration: 1, delay, ease }}>{children}</motion.div>
    </MotionConfig>
  );
}

/** Títulos: revelação palavra por palavra. */
export function Words({ text, className, as: Tag = "h2" }: { text: string; className?: string; as?: "h1" | "h2" }) {
  const M = motion[Tag];
  return (
    <MotionConfig reducedMotion="user">
      <M className={className} initial="hidden" whileInView="show" viewport={vp} transition={{ staggerChildren: 0.07 }} aria-label={text}>
        {text.split(" ").map((w, i) => (
          <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span className="inline-block" variants={{ hidden: { y: "110%", filter: "blur(6px)" }, show: { y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.9, ease }}>{w}&nbsp;</motion.span>
          </span>
        ))}
      </M>
    </MotionConfig>
  );
}

/** Grupo com stagger para cards. */
const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 36, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } } };
export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return <MotionConfig reducedMotion="user"><motion.div className={className} variants={group} initial="hidden" whileInView="show" viewport={vp}>{children}</motion.div></MotionConfig>;
}
export function Item({ children, className }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={item}>{children}</motion.div>;
}

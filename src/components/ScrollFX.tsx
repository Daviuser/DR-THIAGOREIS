"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Divisão de papéis: Motion = entradas e microinterações. GSAP+Lenis = rolagem suave, parallax e máscaras de imagem.
export default function ScrollFX() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0);
    const mm = gsap.matchMedia();
    mm.add({ wide: "(min-width: 768px)" }, (c) => {
      const k = c.conditions?.wide ? 1 : 0.5; // parallax mais discreto no celular
      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) =>
        gsap.fromTo(el, { clipPath: "inset(14% 14% 14% 14%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "power3.out", duration: 1.4,
          scrollTrigger: { trigger: el, start: "top 85%" } }));
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) =>
        gsap.to(el, { yPercent: Number(el.dataset.parallax) * k, ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } }));
    });
    return () => { mm.revert(); gsap.ticker.remove(tick); lenis.destroy(); };
  }, []);
  return null;
}

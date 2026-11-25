# Thiago Reis — Landing page

Next.js 14 · React · TypeScript · Tailwind · Motion · GSAP ScrollTrigger · Lenis · Lucide.

## Rodar
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```
Requer Node 18.18+.

## Editar
- Textos, serviços, WhatsApp, endereço e Instagram: `src/lib/site.ts`
- Imagens em `public/images/`: `thiago-reis.webp` é a foto real (PNG com fundo transparente, convertido); `placeholder-clinica.svg` e `placeholder-sorriso.svg` são ilustrativas. Troque por fotos reais (com licença) em `About.tsx` e `Services.tsx`.
- Cores: `tailwind.config.ts`.

## Animações
Motion: Hero, menu e microinterações. GSAP + Lenis (`ScrollFX.tsx`): rolagem suave, parallax e revelações. `prefers-reduced-motion` é respeitado.

# CV Digital Circus — Tomás Ignacio Moreno Molina

Portafolio / currículum web de una sola página con estética **The Amazing Digital Circus**.  
SPA-like con scroll suave, navbar sticky con estado activo y efecto de confetti en Canvas.

> Stack: **Astro 7.2.9 · JavaScript vanilla · CSS puro · pnpm 11.20.0 · Node 24.19.0**  
> Sin React/Vue, sin GSAP/Three.js — Canvas 2D + CSS para partículas.

## Estructura

Ver árbol completo en el plan de desarrollo. Resumen:

```
src/
  layouts/BaseLayout.astro   # <head> SEO/OG/JSON-LD + tokens
  components/layout/         # Header, Footer, ParticleCanvas
  components/sections/       # Hero, SobreMi, Recorrido, Habilidades, Proyectos, Hablemos
  components/ui/             # SectionTitle, Card, Badge, Button, TimelineItem
  styles/                    # tokens.css, global.css, checker.css, utilities.css
  pages/index.astro          # Orquesta las 6 secciones en orden
public/
  favicon.svg
  og-image.svg (1200x630)
```

## Secciones en orden

1. **Inicio** (hero) — nombre, título, frase, contactos rápidos, visual con placeholder `TM`.
2. **Sobre mí** — perfil completo + stats + enfoque.
3. **Recorrido** — timeline: Duoc 2021-2024 → Bricsa (2 prácticas) → Sotero/MINSAL → Mtek → Duoc Soporte → LarrainVial → **Kastor (Actual, 6 meses, PHP 5.3.29 / CakePHP 1.2 / jQuery 1.2.3 / MySQL)** → Certificaciones.
4. **Habilidades** — Técnicas (incl. Harness, SDD, MCP, Opencode), Blandas, Idiomas (EN B1).
5. **Proyectos** — 4 tarjetas: ETL BC3, Tesis GPT+Laravel/Node, Análisis LarrainVial, Despliegue HP+MINSAL.
6. **Hablemos** — LinkedIn, GitHub, `tomasmoreno47@gmail.com`, `+56966685554` como botones grandes + copy-to-clipboard.
7. **Footer** — © 2026 + Volver arriba.

## Diseño

- Paleta: `#0A0A0A`/`#1A1A1A` base vacío digital + acentos `#E63946` (rojo), `#4361EE`/`#1D4E89` (azul), `#FFD23F` (amarillo), `#FFFFFF`.
- Patrón ajedrez CSS puro (`checker.css`) en hero/separadores.
- Tipografía: `Bungee` (display 3D con stroke) + `Fredoka` (cuerpo) + `Baloo 2` fallback. Cargada con `display=swap`.
- Polka dots en `Card::after`, glitch sutil en hover (CSS `steps(2)`), respeta `prefers-reduced-motion`.
- Confetti rojo/azul/amarillo/blanco en `<canvas>` fijo con `requestAnimationFrame`, densidad 18/26/34 según ancho, pausable y desactivado en `prefers-reduced-motion`.

## Desarrollo

```bash
# Requisitos: Node 24.19.0, pnpm 11.20.0
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # → dist/
pnpm preview  # prueba el build estático
```

Config: `astro.config.mjs` con `compressHTML: true`, `site: https://tomasmoreno.dev`, `vite.css.transformer: lightningcss`.

## QA checklist

- [ ] `pnpm build` OK, `dist/` = 1 página + 1 CSS (~47KB) + 2 SVG.
- [ ] 6 enlaces de navbar con `IntersectionObserver` (`rootMargin: -45%`) + mobile toggle + `Escape`.
- [ ] `html { scroll-behavior: smooth; scroll-padding-top: var(--header-h) }`.
- [ ] Responsive mobile-first probado en 360/768/1024/1440.
- [ ] A11y: semántico (`header/nav/main/section/footer`), `h1` único, `h2` por sección, `aria-label`, `focus-visible`, `skip-link`, `prefers-reduced-motion`, contraste AA.
- [ ] SEO: title/description/canonical/OG/Twitter/JSON-LD Person.
- [ ] Performance: sin imágenes pesadas, fonts con `preconnect`, canvas sin bloquear, Lighthouse ≥90 esperado.

## Deploy

Sitio estático (`output: static`). Compatible con Vercel / Netlify / Cloudflare Pages — solo hacer `pnpm build` y servir `dist/`.

---

© 2026 Tomás Moreno. Todos los derechos reservados.

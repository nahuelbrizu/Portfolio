# Portfolio — Nahuel Brizuela

Portfolio personal: proyectos, stack técnico y CV bilingüe (ES/EN).

Reconstruido desde cero sobre un lenguaje visual inspirado en el sistema de
diseño de [Linear](https://linear.app) — canvas casi negro, acento lavanda
único, escritura tipográfica densa — usando como referencia el `DESIGN.md`
del catálogo [awesome-design-md](https://github.com/voltagent/awesome-design-md).

## Stack

- **[Vite](https://vitejs.dev/) + React 18** — build y dev server.
- **[Tailwind CSS](https://tailwindcss.com/)** — tokens (color, tipografía, radios, spacing) mapeados 1:1 desde el DESIGN.md de Linear.
- **[react-router-dom](https://reactrouter.com/)** (`HashRouter`, compatible con GitHub Pages) — rutas: `/`, `/about`, `/project`, `/resume`.
- **[react-i18next](https://react.i18next.com/)** — ES (default) / EN.
- **[react-github-calendar](https://www.npmjs.com/package/react-github-calendar)** — gráfico de contribuciones, re-teñido en tonos lavanda.
- **[react-icons](https://react-icons.github.io/react-icons/)** — stack técnico y herramientas.

Se removieron intencionalmente Bootstrap, `react-tsparticles`,
`react-parallax-tilt`, `typewriter-effect` y `react-pdf`: el CV se
previsualiza con un `<iframe>` nativo (con descarga y apertura en pestaña
nueva como respaldo), y el hero usa un rotador de texto propio de ~40 líneas
en vez de una librería completa.

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción a dist/
npm run deploy    # publica dist/ en GitHub Pages (gh-pages)
```

---
© 2026 Nahuel Brizuela

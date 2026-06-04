# CLAUDE.md — career-description (경력 기술서)

You are implementing a backend engineer's single-page **career description** in this codebase.

## Start here
1. Read `README.md` in this folder — it is the full, self-sufficient spec (design tokens, layout, components, theme system, responsive, print).
2. The `prototype/` folder is a **working HTML/React-via-Babel reference**, not production code. Recreate it using this project's framework/patterns. If the repo is empty, scaffold **Vite + React + TypeScript**.

## Two load-bearing rules (do not break)
1. **Content/presentation split.** All résumé text lives in one data module (`prototype/data.js` → `window.RESUME`). Port it to a typed module; components only render from it.
2. **Theme tokens live on `<body>` / `:root`.** Three themes (`dark` | `light` | `minimal`) are a class on `<body>`; every color is a CSS custom property redefined per theme. Never put the tokens on an inner wrapper (the page `background: var(--c-bg)` reads them off `<body>`). Initial theme = saved `localStorage["cv-dir"]`, else OS `prefers-color-scheme`.

## Gotchas already solved (keep solved)
- **No visibility-gating animations.** Content must render at `opacity:1` by default. Any reveal-on-scroll must be JS-class driven and respect `prefers-reduced-motion`; never depend on a CSS animation completing.
- **No `transition` on the `<body>` `background` shorthand** when it uses `var()` — it can freeze the old value. Transition specific properties or omit.
- Keep the **print/PDF path** (`@media print`) working in every theme: force a light, ink-friendly palette, collapse the section grid to block flow, hide nav/switcher/print button.

## Definition of done
All 7 sections + hero render from data; 3 themes switch and persist; scroll-spy highlights the top nav; layout is responsive (breakpoints 860px / 680px); printing produces a clean A4 PDF in any theme.

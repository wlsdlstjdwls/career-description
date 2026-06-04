# Handoff: 경력 기술서 (Backend Engineer Résumé / Career Description)

## Overview
A single-page, scroll-based **career description (경력 기술서)** for a server/backend engineer (김성진 · KIM SEONGJIN). It presents a hero, 7 content sections (소개 / 핵심 기술 / 경력 / 대표 프로젝트 / 사이드 프로젝트 / 교육·자격 / 그 외), and ships with a **3-theme system (dark / light / minimal)** plus a **print/PDF-optimized** layout.

The defining visual moves:
- A near full-screen **hero** with an oversized name (up to 150px), a faint dot-grid + electric-blue glow background, and a bottom **stats band** (6년+, 8개+, 70만+, 3개).
- An **editorial section grid**: each section has a left rail with a **giant outlined index numeral** (01–07) that sticks while content scrolls, plus a small English label; the right column holds the Korean section title and content.
- A **glowing "Featured" card** highlighting the AI-agent project.

## About the Design Files
The files in `prototype/` are **design references implemented in HTML/CSS + React-via-Babel** — a working prototype that demonstrates the intended look, layout, theming, and interactions. They are **not meant to be shipped as-is**. The task is to **recreate this design in the target codebase's environment** using its established patterns. If there is no existing codebase, a clean **Vite + React** (or Next.js) project is the recommended target — the prototype is already structured as React components, so the port is direct.

How the prototype is wired (for reference):
- `경력기술서.html` — shell. Loads Pretendard + JetBrains Mono + Nanum Myeongjo fonts, `styles.css`, then React 18 UMD + Babel standalone, then `data.js`, `views.jsx`, `app.jsx`.
- `data.js` — **all résumé content** as a single `window.RESUME` object (profile, nav, stats, intro, skills, career, projects, side, education, etc). This is the single source of truth — content and presentation are fully separated.
- `views.jsx` — presentational React components (`Masthead`, `TopNav`, `Section`, `CareerEntry`, `ProjectEntry`, `FeaturedProject`, `Stat`, `Blocks`, `Tech`, `Resume`).
- `app.jsx` — root `App`: theme state (`dir`), theme switcher, scroll-spy for the top nav, print trigger.
- `styles.css` — design tokens + all three theme skins + responsive + print rules.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, radii, shadows, and interactions are all specified below and present in `styles.css`. Recreate pixel-faithfully, then swap in the target codebase's own component primitives where they exist.

---

## Theme System (important)
Three themes, selectable at runtime and persisted. The active theme is a **class on `<body>`** (`dark` | `light` | `minimal`); all colors are driven by CSS custom properties redefined per theme. **Custom properties must live on `<body>` (or `:root`), not on an inner wrapper** — they need to cascade to `<body>`'s own `background`. (A bug was hit during design when tokens were set on an inner div: `body`'s `background: var(--c-bg)` resolved to the `:root` fallback. Keep theme tokens at `body`/`:root` level.)

- **Initial theme:** if a saved choice exists in `localStorage["cv-dir"]`, use it; otherwise follow `matchMedia("(prefers-color-scheme: dark)")` → `dark`, else `light`.
- **Persistence:** write the choice to `localStorage["cv-dir"]`.
- **Switcher UI:** a fixed glass pill, bottom-right, label "테마", three buttons (다크 / 라이트 / 미니멀). Active button = solid accent fill.
- Avoid a CSS `transition` on the `<body> background` shorthand — combined with `var()` swaps it can freeze the old value. Transition individual properties if you want animation, or omit.

Themed tokens (redefined per `body.<theme>`):
| Token | dark | light | minimal |
|---|---|---|---|
| `--c-bg` (page bg) | `#070d1a` + radial glows | `#eceef3` + top radial | `#f4f4f2` |
| `--c-fg` (body text) | `#d4deee` | `#3a4761` | `#2a2a2a` |
| `--c-dim` (secondary text) | `#8da3c4` | `#5c6b86` | `#5a5a58` |
| `--c-faint` (tertiary) | `#607299` | `#9aa6bd` | `#a0a09c` |
| `--c-title` (headings) | `#ffffff` | `#0b1322` | `#111111` |
| `--c-surface` (cards) | `rgba(255,255,255,.045)` | `#ffffff` | `transparent` |
| `--c-surface-2` | `rgba(255,255,255,.075)` | `#ffffff` | `transparent` |
| `--c-border` | `rgba(126,165,225,.16)` | `#e2e6ef` | `#d8d8d4` |
| `--c-border-strong` (hover) | `rgba(120,190,255,.5)` | `#b9d0f5` | `#111111` |
| `--c-index` (dot grid) | `rgba(120,170,255,.20)` | `rgba(77,141,255,.16)` | `rgba(17,17,17,.14)` |

Theme-specific treatments:
- **dark**: name + intro lead + stat numbers use a blue→cyan gradient text fill; cards are translucent glass with `backdrop-filter: blur(4px)`; hero glow via two radial gradients; featured card has a radial accent wash + large blue drop-glow.
- **light**: name/title are solid navy `--c-title`; cards are white with soft shadow `0 26px 50px -36px rgba(12,33,56,.45)`; stat numbers still use the gradient fill.
- **minimal**: serif (`Nanum Myeongjo`) for name, section titles, and intro lead; **no cards** — entries are separated by `1px` top borders only; outlined index numerals stroked in ink `#111`; contact items are borderless.

---

## Global Design Tokens

**Brand / accent**
- Accent (primary): `#4d8dff`
- Accent-2: `#6aa6ff`
- Cyan (highlight / link hover): `#57d2ff`
- Green (live/재직중 status): `#34e29b`
- Accent gradient: `linear-gradient(116deg, #4d8dff 0%, #57d2ff 100%)`
- Ink (print/base dark): `#0b1322`; deepest navy `#060c18`

**Typography**
- Sans (body + most UI): **Pretendard** — `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`
- Mono (labels, periods, numerals, tech tags): **JetBrains Mono** (Google Fonts, weights 400–700)
- Serif (minimal theme display): **Nanum Myeongjo** (Google Fonts, 700/800)
- Scale (clamp = mobile → desktop):
  - Hero name: `clamp(64px, 12vw, 150px)`, weight 800, line-height .9, letter-spacing −.045em
  - Hero EN subtitle: `clamp(13px, 1.5vw, 17px)` mono, letter-spacing .35em
  - Hero role: `clamp(16px, 2vw, 20px)`
  - Stat value: `clamp(44px, 6vw, 64px)` weight 800, letter-spacing −.04em; suffix 22px accent
  - Section title: `clamp(30px, 4vw, 46px)` weight 800, letter-spacing −.03em
  - Section index numeral: 88px mono weight 800, `-webkit-text-stroke: 1.5px var(--accent)`, fill transparent
  - Intro lead: `clamp(24px, 3.4vw, 34px)` weight 800
  - Entry title: 23px (featured 26px) weight 800
  - Body/list text: 14.5–17px, line-height ~1.58
  - Eyebrow / block-title / mono labels: 10.5–12.5px, uppercase, letter-spacing .1–.26em

**Spacing & layout**
- Page max-width: `1080px`; horizontal padding 32px (20px on mobile), bottom padding 100px
- Hero: `min-height: 92vh`, padding `120px 0 48px`
- Section: CSS grid `200px 1fr`, column-gap `48px`, `padding-top: 96px`
- Section rail: `position: sticky; top: 92px`
- Card padding: `30px 32px` (featured `34px 36px`); margin-bottom 18px
- Stats band: 4-col grid, `margin-top: 64px`, divided by `1px` vertical borders, cell padding `28px 24px 4px 0`

**Radius**
- Cards 18px (featured glow ring 19px); pills/contact/status/nav `999px`; tech tags & period pills 7px; small chips 6–8px

**Shadows / glow**
- Top nav: `0 10px 36px -14px rgba(0,0,0,.5)` + `backdrop-filter: blur(18px) saturate(1.5)`
- Light card: `0 1px 2px rgba(12,33,56,.04), 0 26px 50px -36px rgba(12,33,56,.45)`
- Dark featured: `0 0 0 1px rgba(87,210,255,.1), 0 40px 80px -40px rgba(77,141,255,.6)`
- Print button: `0 14px 34px -10px rgba(77,141,255,.7)`

**Easing**
- `--ease: cubic-bezier(.22,.7,.2,1)`; hover transitions 180–280ms

---

## Layout / Components

### Top Nav (`.topnav`)
Fixed, horizontally centered glass pill at `top: 16px`. Anchor links to each section (`#intro` … `#etc`). Active link = solid accent fill, driven by scroll-spy. Horizontally scrollable on small screens (scrollbar hidden).

### Hero / Masthead (`.masthead`)
- `min-height: 92vh`, vertically centered column.
- Faint **dot grid** via `::before` (`radial-gradient(currentColor 1px, transparent 1px)` at `26px` tile, color `--c-index`, masked to fade out toward bottom-right).
- Eyebrow: mono, accent, prefixed by a 34px gradient rule (`role · domain`).
- Name `<h1>`: huge; dark theme uses gradient text fill, minimal uses serif. EN name below in spaced mono.
- Role sentence (max-width 600px).
- Contact: row of pill **chips** (`.cc-item`) — mono uppercase key + value/link; hover lifts 2px and strengthens border. Email + Blog + 2 GitLab links.
- Stats band: 4 equal cells separated by vertical borders; big gradient numerals + mono labels.

### Section (`.section` = `.sec-rail` + `.sec-content`)
- **Rail** (sticky): giant outlined numeral `.sec-index`, English label `.sec-en`, and a 30px gradient underline (`::after`).
- **Content**: `.section-title` (Korean) then the section body.

### Cards (`.card`) — used by career, projects, side projects
- Rounded surface with 1px border; **left accent edge** (`::before`, 3px gradient bar) fades in on hover; whole card lifts 3px and border brightens on hover.
- `.entry-top`: period pill (mono, accent tint bg), duration (mono faint), optional company, optional **status** pill pushed to the right (`live` variant = green for 재직 중 / 진행중).
- `.entry-title`: project/role name.
- `.entry-sub`: optional link line (prefixed `↗`).
- `.block` repeated: mono uppercase `.block-title` + bulleted `.block-list` (custom gradient-dot bullets).
- `.tech`: top-bordered row of mono `.tech-tag` pills; hover fills accent.

### Featured card (`.card.featured`)
Same as card plus: brighter border, gradient **ring** via `::after` (mask trick), theme-specific glow/wash, `FEATURED` gradient badge in `.entry-top`, and a **2-column block grid** (`.blocks-2col`). Used only for the AI-agent project (`data.projects[].featured === true`).

### Skills (`.skill-group`)
Rows of `140px 1fr`: mono accent group title (Backend / Frontend / AI · Data / Data · Infra) + wrapped chip list; chips lift + fill accent on hover.

### Education (`.edu-grid`)
2-column grid of bordered list items with gradient dot; hover lift.

### Etc (`.etc-item`)
Top-bordered blocks: title + mono meta (link if present) + body paragraph. Items: 기술 블로그, 워킹 홀리데이 · 일본.

### Footer (`.resume-footer`)
Top-bordered mono row, space-between: `© 2026 김성진 · 서버 백엔드 엔지니어` / `KIM SEONGJIN · BACKEND ENGINEER`.

### Theme switcher (`.switcher`) & Print button (`.print-btn`)
Fixed bottom-right / bottom-left respectively. Print button calls `window.print()`. Both hidden in print and on mobile (print button hidden < 680px; switcher becomes a centered bar).

---

## Interactions & Behavior
- **Scroll-spy**: `IntersectionObserver` on the 7 sections (`rootMargin: "-25% 0px -68% 0px"`) sets the active top-nav link. (Note: in the design preview sandbox IO didn't fire; it works in real browsers. Implement with IO or a scroll handler.)
- **Theme switch**: clicking a switcher button sets `body.className`, persists to localStorage, scrolls to top.
- **Hover states**: cards lift + accent left-edge; chips/tech tags lift + accent fill; contact pills lift; edu items lift; nav/links recolor to cyan/title.
- **Anchor nav**: smooth scroll (`html { scroll-behavior: smooth }`).
- **No entrance animations**: deliberately removed — earlier CSS `@keyframes` with `animation-fill-mode: both` left content stuck at `opacity:0` when the animation timeline was frozen. **Keep content visible by default**; if you add reveal-on-scroll, drive it with JS adding a class (never gate visibility on an animation that may not run), and respect `prefers-reduced-motion`.

## State Management
- `dir`: `"dark" | "light" | "minimal"` — current theme. Source of truth for the `<body>` class; persisted in `localStorage["cv-dir"]`; initialized from storage → OS preference.
- `active`: current section id for nav highlighting (derived from scroll position).
- Content is static — no fetching. Keep it in a typed data module (`RESUME`) mirroring `data.js`.

## Responsive Behavior
- **≤ 860px**: section grid collapses to one column; rail becomes an inline row (index 54px + label); sticky disabled.
- **≤ 680px**: page padding 20px; hero `min-height: auto`; stats band → 2 columns; `.blocks-2col` / `.edu-grid` / `.skill-group` → 1 column; status pill no longer right-aligned; switcher becomes a centered bottom bar; print button hidden.

## Print / PDF
`@media print` (A4, 13mm margins): forces a light, ink-friendly palette regardless of theme (resets the `--c-*` tokens), hides nav/switcher/print-button, removes the dot grid, flattens gradient text to solid navy, collapses the section grid to block flow (index shrinks to 40px inline), removes shadows/glow rings, and applies `break-inside: avoid` to sections/cards/skill groups/edu items.

## Assets
- **No images.** All visuals are CSS (gradients, dot grid, outlined numerals). No profile photo by request.
- Fonts via CDN (Pretendard via jsDelivr; JetBrains Mono + Nanum Myeongjo via Google Fonts). In a real codebase, prefer self-hosting / `@fontsource` equivalents.
- Print button icon is an inline SVG (printer) in `app.jsx`.

## Files (in this bundle, under `prototype/`)
- `경력기술서.html` — entry/shell (font + script load order)
- `data.js` — `window.RESUME` content object (port to a typed module)
- `views.jsx` — presentational components
- `app.jsx` — root, theme state, scroll-spy, print
- `styles.css` — tokens, 3 theme skins, responsive, print

## Suggested target structure (Vite + React)
```
src/
  data/resume.ts            // from data.js (add types)
  components/
    TopNav.tsx  Masthead.tsx  Section.tsx
    CareerEntry.tsx  ProjectEntry.tsx  FeaturedProject.tsx
    Stat.tsx  Blocks.tsx  Tech.tsx
  hooks/
    useTheme.ts             // dir state + localStorage + matchMedia
    useScrollSpy.ts         // IntersectionObserver
  styles/tokens.css  themes.css  app.css   // or CSS Modules / Tailwind tokens
  App.tsx  main.tsx
index.html                  // fonts
```
Keep the **content/presentation split** and the **body-level theme tokens** — they are the two load-bearing decisions in this design.

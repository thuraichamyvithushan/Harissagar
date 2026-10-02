# Haris Sagar — Cinematic Portfolio

A complete React + Vite portfolio with Tailwind CSS, Framer Motion and Lucide React. The visual direction combines deep navy, ivory, restrained cyan and warm gold, local portrait photography and atmospheric scene fallbacks. Sora and Manrope variable fonts are self-hosted.

## Run and build

Requires Node.js 22+ and npm.

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

On Windows PowerShell, use `npm.cmd` if script execution is disabled. If Vite's config bundler cannot access parent directories in a restricted environment, use `npm.cmd run dev -- --configLoader runner`. Production files are generated in `dist/` for static hosting. This work does not publish the website.

## Editable content

All profile information, verified employment and education details, languages, capabilities, philosophy, portrait filenames, image crop settings and scene configuration live in `src/data/portfolioData.js`.

Existing reference captures in `tmp/pdf-reader/` verify the employment dates, education, volunteering and English/Sinhala proficiency. Tamil and Telugu deliberately have no proficiency labels. The five-plus-years snapshot is retained from the original user brief. Legal education is in progress; the site makes no claim of legal admission. No additional employers, achievements, revenue figures, awards or private contact information have been introduced. All contact links use the supplied LinkedIn profile.

## Replace the portrait and scene images

The hero uses Haris's original photograph supplied by the user:

- `src/assets/cinematic/hero-haris.jpg` — original 715 × 715 portrait, used on desktop and mobile

The portrait is about 175 KB and is preloaded on all viewports. CSS controls its responsive crop. The older WebP placeholder files are unused; an optional mobile asset can be selected through `profile.photoMobile`.

Optional environmental photographs can be added as:

- `hero-environment.webp`
- `about-landscape.webp`
- `experience-optics.webp`
- `strategy-city.webp`
- `education-library.webp`
- `cta-mountain.webp`

Place them in `src/assets/cinematic/`. Use wide 16:9 or 21:9 scenes and optionally provide matching `-mobile.webp` files for vertical crops. `src/cinematicAssets.js` discovers existing assets through Vite. Until final scenes are available, lightweight CSS architecture, optics and mountain scenes provide the atmosphere without broken image requests. Scene photographs after the hero are lazy loaded. Rebuild after adding or replacing assets. See `src/assets/cinematic/README.md` for the image conventions.

## Scenes and interactions

`src/App.jsx` composes the page in cinematic sequence:

1. `CinematicHero`: right-side portrait, large masked name, slow 2.5-second camera entrance, subtle light sweep, bounded mouse parallax, experience and LinkedIn links.
2. `About` and `QuoteInterlude`: split editorial biography, architectural scene, serif intertitle and expanding line.
3. `Expertise`: full-width capability rows, keyboard-accessible disclosure, cyan streak and desktop scene previews.
4. `ExperienceTimeline`: sticky desktop heading, scroll-linked timeline, active role emphasis and shifting scene. Mobile stacks the roles and keeps all text fully visible.
5. `IndustryInterlude`: two slow typographic strips over mountain atmosphere, with a pause/resume control.
6. `Approach`: dark navy curtain and three vertical chapters with sequential number, title, line and description reveals.
7. `Education`, `Languages` and `CareerSnapshot`: library atmosphere, business/marketing/law nodes, verified language labels and accessible counters.
8. `CinematicCTA` and `Footer`: mountain closing scene, circular LinkedIn action, bounded pointer light and film-credit footer.

`ParallaxImage`, `SceneAtmosphere`, `RevealText`, `MaskedHeading`, `SectionLabel` and `FilmGrain` provide the shared visual system. Styles are in `src/index.css`; easing and capability-aware motion hooks are in `src/motion/`.

## Accessibility and motion

The site includes semantic landmarks, a skip link, visible focus states, meaningful portrait alt text and safe external links. The native cursor remains available; the dot and ring are an enhancement for fine desktop pointers.

The mobile menu uses a native modal dialog, traps focus, makes the background inert, locks body scrolling, closes on Escape and returns focus to the menu toggle. Choosing a section focuses that section. Capability rows also work with keyboard Enter.

Reduced motion removes parallax, cursor tracking, camera zoom, background particles, orbital motion, moving tickers and smooth scrolling. All timeline entries remain fully visible and counters show their final values. Pointer effects are disabled on mobile and coarse-pointer devices.

## Production metadata

Copy `.env.example` to `.env.local` and set `VITE_SITE_URL` before publishing. Canonical, Open Graph, Twitter and JSON-LD Person metadata are generated from profile data in `vite.config.js`. The existing canonical placeholder is `https://example.com/` until a production domain is provided.

## Browser verification

`tmp/browser-check/verify-cinematic.mjs` checks eight widths from 320 to 1920 px, heading clipping, horizontal overflow, local portrait loading, internal anchors, keyboard menu/accordion behavior, active timeline entries, hover previews, ticker controls, reduced motion, safe outbound links and runtime errors. Axe checks desktop and mobile WCAG A/AA rules. Screenshots and results are saved under `tmp/browser-check/`.

## Cinematic refinement

The hero now uses a 1.15-second aperture opening within its own section, without blocking input or locking scrolling. Separate scroll-camera layers add at most 32 px of background travel, 24 px of portrait travel and 5.5% scale. This depth is disabled on mobile, touch devices and reduced-motion settings. The guiding-principle quote uses a staged word reveal, with a single stable screen-reader equivalent. All these effects stop or show their final state when reduced motion is enabled while the page is open.

The Instagram reference reel could not be retrieved in this environment. These refinements are an independent interpretation of the requested cinematic feel, not a reproduction of the unseen reel.

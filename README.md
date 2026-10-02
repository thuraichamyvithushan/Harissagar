# Haris Sagar — Cinematic Portfolio

A complete React + Vite portfolio with Tailwind CSS, Framer Motion and Lucide React. The current cinematic redesign uses charcoal and olive, warm ivory and bronze, oversized film-poster typography, editorial serif accents and the original portrait. Manrope and Sora variable fonts are self-hosted. The verified portfolio data is unchanged by the redesign.

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

## Deploy to Vercel

1. Import this GitHub repository into Vercel and use the repository root as the Root Directory.
2. The root `vercel.json` selects Vite, installs dependencies with `npm ci`, runs `npm run build`, and serves `dist/`. It also sends page requests to `index.html` so direct links work.
3. Set the `VITE_SITE_URL` environment variable in Vercel to the final production URL (for example, `https://your-project.vercel.app/`) so canonical and social metadata use the correct domain. Redeploy after changing it.
4. Deploy. When the repository is connected to Vercel, subsequent pushes to the production branch trigger a new production deployment.

## Editable content

All profile information, verified employment and education details, languages, capabilities, philosophy, portrait filenames, image crop settings and scene configuration live in `src/data/portfolioData.js`.

Social destinations are editable through `profile.linkedin`, `profile.facebook` and `profile.instagram`. Facebook and Instagram use the profile URLs supplied by the user; an empty value hides that platform. Shared social links appear in the desktop header, mobile menu, contact section and footer.

Existing LinkedIn captures in `tmp/pdf-reader/` verify the displayed roles, dates, ongoing education, Lions membership and the About statement of over five years in sales and marketing. The user-supplied `harry06-experience.png` verifies eight roles from the second profile; combined with the primary capture, the timeline contains ten distinct roles. Huntsman is merged using the more complete secondary entry, with a March 2024 start and hybrid arrangement. Both UxMagician.com positions remain separate. Experience is ordered by start date, while the current title and company are explicit fields used by the hero and metadata. The profile location is Callaghan; the work locations are recorded separately. Legal education remains in progress.

The user-supplied `harry06-education.png` verifies seven education entries. The Newcastle qualifications are separate: Graduate Diploma in Legal Practice (January 2025–December 2026) and Juris Doctor (January 2024–December 2026), both explicitly Reading / in progress. The other five records retain their visible dates and qualifications without inferring completion status. The leadership master class remains an education entry; the certificate thumbnail does not establish separate credential details. Clipped descriptions and hidden additional skills are omitted.

The user-supplied `harry06-volunteering.png` verifies four volunteer roles and confirms the Leo role dates and causes and Citizens’ Climate Lobby membership. Both completed Leo roles list one year and one month; changing ongoing duration labels are omitted. Its general Lions membership entry differs from the chapter-specific primary record. One merged entry retains the more complete Jesmond record, and `profile.sourceReview.volunteerComparison` preserves both versions without assuming a chapter transfer or adding a duplicate.

The public second-profile page at `https://au.linkedin.com/in/harry06` exposes volunteer roles and organisations, while its indexed result also includes a practical legal training description. A public result for the primary profile verifies all four language proficiency levels, including Tamil and Telugu. Skills and capabilities come from visible skill labels and documented responsibilities; hidden skills are omitted. Empty collections indicate unverified content, not confirmed absence. `profile.sourceReview` records the evidence, conflicts and unresolved gaps. Lions membership is merged using the chapter-specific primary entry. The Leo presidency uses the specific volunteering dates instead of the inconsistent organisation listing. Both supplied LinkedIn URLs remain centralized; contact links use `harry06` as requested. The requested display name remains Haris Sagar, with the second profile's full name stored separately.

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

`src/App.jsx` renders the existing accessible `Navbar`, the redesigned `CinematicPortfolio` and `FilmGrain`. The new composition and styling live in `src/components/CinematicPortfolio.jsx` and `src/cinema.css`. Earlier component files and `src/index.css` remain available but are not the active page design.

1. A film-poster opening pairs the original portrait with masked, oversized name typography and the current title and company.
2. An ivory editorial biography preserves the original About copy and verified career facts, followed by a full-width photographic quote interlude.
3. Keyboard-accessible capability disclosures sit beside a decorative optics photograph.
4. All ten employment entries form a numbered timeline, with a sticky desktop heading and expandable verified Huntsman responsibilities.
5. A static field list and atmospheric three-part Work / Study / Community section retain the existing content.
6. Seven education entries have a dedicated ivory chapter, with explicit Reading / in progress labels for both Newcastle qualifications.
7. Four volunteer entries and the professional association have their own community chapter.
8. Every verified skill and all four language proficiency levels appear in the skills and communication chapter.
9. A mountain scene closes with the existing contact positioning and LinkedIn destination, followed by concise footer credits.

Motion includes staggered masked heading lines, a word-by-word quote entrance, chapter rules that draw into view, a portrait curtain and light sweep, bounded desktop image zoom and pointer depth, a scroll-filled timeline, smooth capability-panel expansion and magnetic links. Social icons and cards have restrained hover responses. Decorative photographs are illustrative scenes rather than claims about actual workplaces.

## Accessibility and motion

The site includes semantic landmarks, a skip link, visible focus states, meaningful portrait alt text and safe external links. The native cursor remains available; the dot and ring are an enhancement for fine desktop pointers.

The mobile menu uses a native modal dialog, traps focus, makes the background inert, locks body scrolling, closes on Escape and returns focus to the menu toggle. Choosing a section focuses that section. Capability rows also work with keyboard Enter.

Reduced motion removes image depth, magnetic link movement, heading and quote entrances, portrait effects, reveal movement, panel-transition duration and smooth scrolling. Headings, quotes and timeline entries remain fully visible. Desktop camera and pointer effects are disabled on mobile and coarse-pointer devices; mobile retains short content reveals. The redesign uses the native cursor and normal scrolling without pinned full-page transitions.

## Production metadata

Copy `.env.example` to `.env.local` and set `VITE_SITE_URL` before publishing. Canonical, Open Graph, Twitter and JSON-LD Person metadata are generated from profile data in `vite.config.js`. The existing canonical placeholder is `https://example.com/` until a production domain is provided.

## Browser verification

The current redesign is checked in the in-app browser at 320, 390, 768, 1024, 1440 and 1920 px. Checks cover heading and text fit, local portrait loading, internal anchors, native disclosure controls, mobile menu behavior and the preserved content counts. New screenshots and a review report are saved under `tmp/browser-check/`. The older `verify-cinematic.mjs` targets the previous component selectors and is not the current redesign verification script.

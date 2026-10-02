# Cinematic scenes

`hero-haris.jpg` is Haris's original portrait supplied by the user. It is used on desktop and mobile, with the crop controlled by the hero CSS. The older WebP placeholder files are unused.

Generated section scenes, created with the built-in image_gen tool:

- `hero-environment.webp`
- `about-landscape.webp`
- `experience-optics.webp`
- `strategy-city.webp`
- `education-library.webp`
- `cta-mountain.webp`

The six scenes are illustrative editorial images, not photographs of actual employers, products, campuses or exact locations. They share a slate-blue, teal and restrained amber palette. Haris's original portrait remains the hero portrait. The generated hero environment and capability previews are no longer displayed; their files are retained for reuse.

Each scene has an optimized WebP file and a matching `-mobile.webp` version with a focused 4:5 crop. Desktop scenes are 1672 × 941, except the About image, which is a 1122 × 1402 portrait. Mobile crops are 753 × 941, except About at 960 × 1200. The site uses responsive picture sources and lazy loads section backgrounds. Only the hero portrait is preloaded.

The complete final generation prompts are in `generation-prompts.json`. The set covers a coastal waterfront (hero), coastal headland (About), unbranded binoculars (experience), glass architecture (expertise), a scholarly library (education) and misty alpine peaks (industry/contact).

Local CSS scenes remain available if an image fails to load. Missing files do not create network requests.

Use 16:9 or 21:9 images at about 1920 px wide. An optional matching `-mobile.webp` file provides a 4:5 or 9:16 crop. Scene filenames, crop positions, portrait filename and alt text are editable in `src/data/portfolioData.js`. Vite discovers available files automatically; rebuild after replacing assets.

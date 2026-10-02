# Cinematic scenes

## Current warm cinematic image set

The active scenes were generated with the built-in `image_gen` tool, using warm charcoal, olive, ivory and bronze tones:

| Section | Desktop asset | Mobile asset |
| --- | --- | --- |
| Quotation interlude | `about-landscape-v2.webp` | `about-landscape-mobile-v2.webp` |
| Capabilities | `experience-optics-v2.webp` | `experience-optics-mobile-v2.webp` |
| Work / study / community | `strategy-city-v2.webp` | `strategy-city-mobile-v2.webp` |
| Contact | `cta-mountain-v2.webp` | `cta-mountain-mobile-v2.webp` |

These are decorative coastal, unbranded optics, architectural and mountain scenes. They do not depict Haris's actual employers, products, campus, travel or achievements. His original portrait and all professional information are unchanged.

Landscape WebPs measure 1672 × 941 on desktop and 900 × 507 on mobile. The optics portrait measures 1000 × 1333 on desktop and 900 × 1200 on mobile. Only resizing and WebP encoding were applied. The eight optimized files total about 1.3 MB. Responsive picture sources, decorative empty alt text, lazy loading and the existing animations are retained.

Final prompts and generation provenance are in `generation-prompts-v2.json`. Full-resolution PNG originals are preserved in `output/imagegen/`. Scene filenames and crop positions are centralized in `src/data/portfolioData.js`, and `FilmScene` honors those positions.

## Earlier image set retained for reuse

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

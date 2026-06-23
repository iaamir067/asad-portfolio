# Image Manifest

Every image slot, its intended dimensions, and what the final asset should depict.
Placeholders live in `/public/placeholders` (labeled SVGs at the correct aspect
ratio). To swap in a real asset: drop the file in `/public`, then change the one
`src` for that slot in **`constants/images.ts`**. Nothing else needs editing.

## How it wires together

- `constants/images.ts` is the single source of truth.
  - `IMAGES.profile` / `IMAGES.og` — standalone slots.
  - `PROJECT_IMAGES[<project.id>]` — one slot per project (keys match `constants/projects.ts` `id`).
- `getProjectImage(id)` returns the slot used by the Selected Work section.
- Regenerate placeholders any time with: `bun scripts/gen-placeholders.mjs`

## Slots

| Slot key | File (placeholder) | Dimensions | Aspect | Used in | Final asset should depict |
| --- | --- | --- | --- | --- | --- |
| `profile` | `profile-800x1000.svg` | 800 × 1000 | 4:5 | About | Portrait of Asad, plain/neutral backdrop, editorial crop |
| `og` | `og-1200x630.svg` | 1200 × 630 | 1.91:1 | Social/OG meta | Social share card — name + role on dark, signal-amber accent |
| `liquid-canvas` | `work-liquid-canvas-1600x1000.svg` | 1600 × 1000 | 16:10 | Selected Work | Smart-TV / mobile digital art gallery UI, real screens |
| `my-uni` | `work-my-uni-1600x1000.svg` | 1600 × 1000 | 16:10 | Selected Work | MY UNI student app — chat + university news feed screens |
| `nurse-hiring` | `work-nurse-hiring-1600x1000.svg` | 1600 × 1000 | 16:10 | Selected Work | Nurse Hiring — booking flow + live Google-Maps tracking screens |
| `fintech-app` | `work-fintech-1600x1000.svg` | 1600 × 1000 | 16:10 | Selected Work | Fintech wallet — balance, top-up, gift card screens |
| `language-learning` | `work-language-learning-1600x1000.svg` | 1600 × 1000 | 16:10 | Selected Work | Language Learning — live tutor video-call + chat UI |

## Notes

- `next.config.js` has `images.unoptimized: true`, so SVG placeholders and final
  JP/PNG/WebP assets both render through `next/image` without extra config.
- Keep the final assets at (or above) the listed dimensions to avoid layout shift;
  width/height are declared per slot, so CLS stays at zero.
- The hero background is a live WebGL scene (`components/three/`), not an image —
  no asset needed there.

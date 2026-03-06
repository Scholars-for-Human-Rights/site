# SFHR Website — Claude Project Notes

## Organization
**Scholars for Human Rights (SHR)**
Political advocacy and social justice group for PhD, Law, and Professional students across Boston universities.
Founded April 2025 by Meghan McCoy (3rd-year PhD candidate, BC History Dept).

**Contact:** scholarsforhumanrights@gmail.com (org email) | mccoymi@bc.edu (Meghan personal)
**Instagram:** established Oct 2025
**Signal:** used for day-of event coordination

### Vision Statement
"Scholars for Human Rights is committed to building a just and equitable world centered in empathy and community. SHR seeks to respect the dignity of all students, workers, and communities who make learning, understanding, and education possible. We operate under the belief that we are all interconnected and emphasize growth through caring for the whole person."

### Mission Statement
"SHR is committed to providing material and organizational support to value-aligned groups endeavoring to uplift and protect their communities. We work to amplify equitable and compassionate policies that are attuned to how systemic injustices continue to shape the present. We seek to create spaces for individuals to share knowledge, build understanding, and educate one another on current issues."

### Leadership Committee Roles
- Events Planner
- Social Media Chair
- Community Liaison
- Policy Tracker
- Internal Administrator

## Tech Stack
- Astro 5.0 + Tailwind CSS (AstroWind template)
- Root: `c:\Users\Pinguin\Documents\sfhr_website\code\site\`
- Dev server: `npm run dev` → localhost:4321
- Build: `npm run build`

## Pages
| Page | File | Status |
|------|------|--------|
| Home | `src/pages/index.astro` | done |
| About | `src/pages/about.astro` | done |
| Upcoming Events | `src/pages/future-events.astro` | done |
| Past Events | `src/pages/past-events.astro` | done |
| Journal | `src/pages/journal.astro` | done |
| Resources | `src/pages/resources.astro` | done |
| Contact | `src/pages/contact.astro` | done |

## Content Notes
- Events are stored as arrays in `future-events.astro` and `past-events.astro` — just add objects to the array to add new events
- Journal entries are stored as an array in `journal.astro` — same pattern
- Founding meeting (April 15, 2025) already added to past-events as placeholder

## Key Files
- `src/config.yaml` — site name, SEO, analytics config
- `src/navigation.ts` — header/footer links
- `src/assets/styles/tailwind.css` — global styles
- `src/components/CustomStyles.astro` — font/color overrides

## Design Decisions
- AstroWind template is the base; all demo/placeholder content being replaced with SFHR content
- Blog/CMS features disabled in favor of static pages for now
- Contact email: mccoymi@bc.edu (may need a dedicated org email later)

## Outstanding Questions
- Logo / brand colors not yet confirmed
- Hosting target (Netlify/Vercel) not yet confirmed
- Dedicated org email not yet confirmed
- Whether to enable blog/news feed later

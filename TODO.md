# PORTFOLIO UPGRADE TODO (v2.0)

## Phase 0 — FOUNDATION (Design system + routing)
- [ ] Create design system primitives:
  - [ ] `src/theme/tokens.js`
  - [ ] `src/components/layout/Container.jsx`
  - [ ] `src/components/layout/Section.jsx`
  - [ ] `src/components/ui/Button.jsx` (update/bridge existing)
  - [ ] `src/components/ui/Card.jsx`
  - [ ] `src/components/ui/Badge.jsx`
  - [ ] `src/components/ui/Typography.jsx` (optional)
  - [ ] spacing + typography scale (token export)
- [ ] Create route architecture:
  - [ ] Install `react-router-dom` (if not present)
  - [ ] Add `src/routes/AppRoutes.jsx`
  - [ ] Add pages:
    - [ ] `/` -> `src/Pages/Home.jsx` (landing)
    - [ ] `/projects` -> `src/Pages/Projects.jsx`
    - [ ] `/writing` -> `src/Pages/Writing.jsx`
    - [ ] `/about` -> `src/Pages/About.jsx`
    - [ ] `/resume` -> `src/Pages/Resume.jsx`
    - [ ] `/contact` -> `src/Pages/Contact.jsx`
- [ ] Ensure layout composition:
  - [ ] Global layout component (Navbar + Footer optional)
  - [ ] ThemeProvider at root

## Phase 1 — HERO + NAVIGATION
- [ ] Update `src/Components/Navbar.jsx`:
  - [ ] Sticky behavior
  - [ ] Active section highlighting (IntersectionObserver)
  - [ ] Mobile menu
  - [ ] Resume CTA always visible
  - [ ] Smooth scrolling for anchor-like links
- [ ] Update `src/Sections/Hero.jsx` + `src/data/hero.js` to match v2.0 identity:
  - [ ] Headline: Oyovwevotu Kelvin + Full-Stack Developer, Entrepreneur & Creative Builder
  - [ ] Subheading per spec
  - [ ] Profile image
  - [ ] Social links (GitHub, LinkedIn, Email)
  - [ ] CTAs: View Projects, Download Resume, Contact Me

## Phase 2 — PROJECT CASE STUDIES
- [ ] Create `src/components/case-study/CaseStudy.jsx` (reusable)
- [ ] Update `src/data/projects.js` schema with required fields
- [ ] Replace `src/Sections/Projects.jsx` with case study section/page

## Phase 3 — HOW I BUILD
- [ ] Create `src/Sections/HowIBuild.jsx`
- [ ] Add `src/data/engineeringDepth.js` (badge groups)

## Phase 4 — WRITING & BLOG PLATFORM
- [ ] Add markdown content loader/parser
- [ ] Create post list + post page components
- [ ] Implement tags/categories, featured, related, pagination
- [ ] Reading progress indicator
- [ ] Share buttons + newsletter section
- [ ] SEO metadata + OpenGraph + structured data

## Phase 5 — ABOUT PAGE REDESIGN
- [ ] Update `src/Sections/About.jsx` and/or `src/Pages/About.jsx`
  - [ ] Journey timeline
  - [ ] Values + vision + future goals

## Phase 6 — SKILLS UPGRADE
- [ ] Refactor `src/data/skills.js` into categories
- [ ] Replace skills section UI accordingly

## Phase 7 — CONTACT SECTION
- [ ] Update `src/Sections/Contact.jsx` and/or create contact page
  - [ ] Contact form
  - [ ] Availability status

## Phase 8 — PERFORMANCE / SEO / ACCESSIBILITY
- [ ] Image optimization + lazy loading
- [ ] Code splitting + route-based lazy loading
- [ ] SEO: titles, meta, OG, structured data
- [ ] Accessibility: focus styles, keyboard nav, semantic HTML

## Recruiter optimization pass
- [ ] Ensure quick scanning hierarchy across pages
- [ ] Add clear “Who I am / What I build / How I think / How to contact”

## Checklist targets
- [ ] Lighthouse: Performance 95+ / Accessibility 95+ / SEO 95+
- [ ] Mobile: no overflow, readable typography, touch targets


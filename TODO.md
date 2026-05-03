# PORTFOLIO UPGRADE TODO

## Phase 1 — Theme Engine (Foundation)
- [ ] Create theme/theme.js (dark + light tokens)
- [ ] Create theme/ThemeProvider.jsx (includes useTheme export)
- [ ] Test theme system locally
- [ ] Update App.jsx with ThemeProvider

## Phase 2 — Hero System (Config-Driven)
- [ ] Create data/hero.js
- [ ] Update Hero.jsx (inject useTheme + receive config)
- [ ] Remove ALL hardcoded colors/stats/text

## Phase 3 — Contact Migration
- [ ] Move contactInfo → data/contact.js
- [ ] Update Contact.jsx to use config

## Phase 4 — Optional Light Refactor
- [ ] (OPTIONAL) About.jsx light refactor
- [ ] (OPTIONAL) BuilderMindset.jsx light refactor

## Phase 5 — Theme Toggle
- [ ] Create Components/ThemeToggle.jsx (floating button)
- [ ] Add to Home.jsx

## Phase 6 — Final Cleanup
- [ ] Standardize theme usage across Hero + Contact
- [ ] Add smooth CSS transitions

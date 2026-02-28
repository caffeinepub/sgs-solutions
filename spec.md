# Specification

## Summary
**Goal:** Build a responsive, multi-page marketing website for SGS Solutions (computer sales & service) with a consistent theme, core company pages, a working contact form, and an authenticated inbox for viewing submissions.

**Planned changes:**
- Create a cohesive site theme (professional computer services feel; avoid blue/purple as primary colors) and apply consistent header navigation + footer across all pages.
- Implement core pages: Home (hero, value props, featured previews, CTA to Contact), Products (at least 3 categories with placeholders), Services (at least 4 services), About (story/mission + “Why choose us”), Contact (info + form).
- Add a Contact form UI with validation (name, email, optional phone, subject, message) plus loading and success/error states.
- Implement backend canister storage for contact submissions with timestamp, stable persistence across upgrades, and methods to create submissions (public) and list submissions (Internet Identity authenticated; newest-first).
- Add an authenticated Inbox page that requires Internet Identity login and displays stored submissions with loading/empty/error states.
- Add basic SEO and accessibility: per-page titles/meta descriptions, semantic heading hierarchy, keyboard navigability/focus states, and accessible form labels/errors.
- Generate and include static brand images/illustrations under `frontend/public/assets/generated` and render them (logo in header, hero visual on Home).

**User-visible outcome:** Visitors can browse SGS Solutions’ marketing pages and submit the contact form; authenticated users can sign in with Internet Identity to view contact submissions in a read-only inbox.

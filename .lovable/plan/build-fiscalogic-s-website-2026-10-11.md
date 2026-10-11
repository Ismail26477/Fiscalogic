# Build Fiscalogic's website

## Goal
Replace the starter screen with a polished, mobile-first website for Fiscalogic, following the supplied brand and content brief.

## Scope
- Establish the light editorial design system, typography, tick-mark identity, accessible focus states, and reduced-motion behavior.
- Build shared navigation, dismissible announcement, footer, contact actions, and a working responsive menu.
- Create the home page with the brief's service, process, trust, pricing, FAQ, and live India-time compliance countdown sections.
- Add dedicated Services, Industries, Why Fiscalogic, About, Resources, Contact, Login, Privacy, and Terms pages, each with unique search/social metadata.
- Keep contact details, sample stats, and clearly labeled placeholder testimonials in one editable site configuration file.
- Add client-side validation and success feedback for contact/newsletter forms. Since no backend is connected, do not claim submissions are saved or delivered.
- Use TanStack Router, already fixed by the project; do not introduce React Router. Use CSS-based motion and respect reduced-motion preferences.

## Technical details
- Keep the implementation in the existing React + TypeScript + Tailwind v4 project.
- Add shared components and route files together so all navigation targets exist.
- Use semantic HTML and the existing shadcn controls where appropriate.
- Add a small test for the compliance deadline calculation and verify the preview and build diagnostics.

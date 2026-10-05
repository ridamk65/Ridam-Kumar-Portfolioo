# White portfolio polish and Resume page

## What will change
- Refine the white navigation with clear active states, balanced mobile spacing, and direct Home, Projects, Resume, and Contact access.
- Polish the Hire Me dialog for the light theme while preserving validation and the email handoff.
- Add subtle route-entry transitions that work alongside the existing scroll reveals and respect reduced-motion settings.
- Add a dedicated `/resume` page containing work experience, education, skills, and Achievements & Leadership from the current portfolio.
- Link Resume from the shared navigation and keep the home and Projects pages intact.

## Technical details
- Move resume records into one shared data module so the home page and Resume page stay consistent.
- Add unique page metadata for the Resume route and use type-safe navigation.
- Keep the current portrait, project data, contact behavior, and visual displays unchanged.

## Verification
- Check Home, Projects, and Resume on desktop and mobile.
- Confirm active navigation, route transitions, scroll reveals, contact validation, and email preparation.
- Confirm the light theme remains readable and reduced-motion mode remains usable.

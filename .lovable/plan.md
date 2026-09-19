# White portfolio theme and dedicated Projects page

## What will change
- Convert the existing portfolio from the dark treatment to a clean white professional theme using the current semantic color system.
- Preserve the current layout, portrait, contact form, project visuals, content, and scroll reveal behavior.
- Add a dedicated `/projects` page containing all three current projects with their dates, descriptions, roles, outcomes, technology tags, and digital project displays.
- Change the header’s Projects item and the hero’s View Work action to open the dedicated Projects page.
- Keep the selected work preview on the home page so the existing layout remains intact, with a clear link to the full Projects page.

## Technical details
- Update the light-mode design tokens and subtle background treatment in the shared stylesheet; remove dark-only assumptions from selection and visual treatments.
- Extract the project records into a shared data module so the home page and Projects page stay consistent.
- Build the new TanStack route with unique Projects metadata and type-safe navigation links.
- Reuse the existing project visuals and reveal wrappers instead of duplicating behavior.

## Verification
- Check home and Projects pages on desktop and mobile.
- Confirm navigation, View Work, Hire Me, portrait, and scroll reveals still work.
- Confirm text contrast, cards, dialogs, project visuals, and subtle background details read clearly on white.

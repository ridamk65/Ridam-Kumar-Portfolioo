# Contact form and scroll motion

## What will change
- Replace the hero’s email link with a button that opens a focused contact form.
- Collect name, email, subject, and message with clear validation, then open a pre-addressed email to `kumarridam172@gmail.com` so the inquiry is ready to send without requiring a new service account.
- Add close, cancel, loading-free submission, keyboard, and accessible dialog behavior.
- Add professional fade-and-rise reveals as sections, project entries, skill groups, education, achievements, contact content, and key hero text enter the viewport.
- Keep movement restrained, stagger repeated content, animate each item once, and respect reduced-motion preferences.

## Technical details
- Install Motion for React (`motion`) and create small reusable reveal wrappers.
- Use Motion’s viewport triggers and reduced-motion support rather than time-based CSS animations.
- Validate the form client-side with Zod and safely encode all fields into the email link.
- Keep all current portfolio content, styling, links, and project visuals intact.

## Verification
- Check the desktop and mobile layouts in the running preview.
- Confirm Hire Me opens the form, invalid fields show useful feedback, and valid details produce the correctly addressed email draft.
- Confirm content reveals while scrolling and remains readable when reduced motion is enabled.

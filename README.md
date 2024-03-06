# Minimal reproduction — bug with CSS modules and dynamic imports

Start a dev server and visit the homepage. You'll see a flash of unstyled content, before the text styles are applied.

Issue is present on:

- Canary (14.2.0-canary.4)
- 14.1
- 13.5.7

Issue does not exist on:

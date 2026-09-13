# peterantich.com

Static site. No build step — the files in this folder are the site.

## Files

- `index.html`, `research.html`, `teaching.html`, `cv.html` — the four pages
- `styles.css` — design-system tokens and base styles (Classical). Loads Cormorant Garamond + Lora from Google Fonts.
- `site.css` — the site layer: layout, masthead, books, dated lists
- `site.js` — the on-scroll reveal (site is fully readable without it)
- `portrait.jpg`, `cover-perception.jpg`, `cover-motivation.jpg`, `antich-cv.pdf`
- `.nojekyll` — tells GitHub Pages to serve the files as-is

## Deploying

Copy everything in this folder to the root of the GitHub Pages repo, commit, push.

## Editing

Text lives in the HTML. Colors, fonts and spacing are variables at the top of `styles.css` — change `--color-accent` there and the whole site follows.

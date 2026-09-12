# peterantich.github.io

A static personal site. Four HTML files and one stylesheet — no build step, no Jekyll,
no dependencies. Edit the HTML in any text editor, push, and the live site updates within
a minute.

## Putting it online (one time, ~20 minutes)

1. Create a free account at github.com if you don't have one.
2. Create a new **public** repository named exactly `USERNAME.github.io`, where USERNAME
   is your GitHub username. The name matters — it's what makes GitHub serve it as a site.
3. On the repo page, choose **Add file → Upload files**, drag in everything from this
   folder (including the repository root), and commit.
4. Go to **Settings → Pages**. Under "Build and deployment," set Source to
   *Deploy from a branch*, branch `main`, folder `/ (root)`. Save.
5. Wait two or three minutes. The site is live at `https://USERNAME.github.io`.

There is no step involving the command line. If you'd rather not use the web uploader,
GitHub Desktop gives you a folder on your Mac that syncs to the repo — probably the
easiest long-term workflow.

## Adding your CV

Drop the PDF into the repository root and name it exactly `antich-cv.pdf`. The CV page
already links to it. If you name it something else, change the link in `cv.html`.

## Adding a publication

Open `research.html`, find the right section, and copy one existing block:

```html
<dt>2027</dt>
<dd>“Title of the Article.” <em>Journal Name</em> 12 (3): 45–67.</dd>
```

`<dt>` is the year in the left column, `<dd>` is the entry. `<em>` italicizes.
Curly quotes and en dashes can be pasted in directly.

## Adding paper PDFs

Put the file in `files/`, then link to it from the entry:

```html
<dd>“Title of the Article.” <em>Journal</em> 12 (3): 45–67.
    <a href="files/title-of-article.pdf">PDF</a></dd>
```

One caution: for most journals, posting the publisher's typeset PDF violates the
copyright agreement, while posting your own accepted manuscript (post-peer-review,
pre-typesetting) is permitted, sometimes after an embargo. Check the journal on
SHERPA/RoMEO before posting anything.

## A custom domain

Buy `peterantich.com` from Namecheap, Cloudflare, or Porkbun (~$12/year). Then in
**Settings → Pages**, enter the domain under "Custom domain" and check "Enforce HTTPS."
GitHub will tell you which DNS records to add at the registrar. Nothing in these files
needs to change.

## Changing the look

Everything visual lives at the top of `style.css` in the `:root` block — five colors
and the reading width. Change a hex value there and it propagates across all four pages.
The typeface is EB Garamond, loaded from Google Fonts; to swap it, change the
`<link>` tag in each HTML file and the `font-family` line in `style.css`.

## What's in here

```
index.html      home — the claim, books, work in progress, contact
research.html   full publication list
teaching.html   teaching approach and courses
cv.html         short CV plus a link to the PDF
style.css       all styling
files/          PDFs (CV, papers)
.nojekyll       tells GitHub to serve these files as-is
```

## Adding your photo

Save a JPG as `portrait.jpg`. That exact filename — `index.html` already
points to it. Until the file exists the page simply omits the photo rather than
showing a broken-image icon, so you can publish before you have one.

What works best: a 4:5 portrait crop (taller than wide), about 800 x 1000 pixels,
saved under ~250 KB. Anything much larger just slows the page down; anything
smaller looks soft on high-resolution screens. The CSS crops to 4:5 and anchors
slightly above center, so a photo with headroom will frame well without editing.

To add a caption (photographer credit, or nothing), put it inside the `figure`:

```html
<figcaption>Photo: Name.</figcaption>
```

## Adding a publication link

Any entry can carry links. Add a `links` span at the end of the `<dd>`:

```html
<dd>“Title of the Article.” <em>Journal</em> 12 (3): 45–67.
    <span class="links"><a href="https://doi.org/10.xxxx/yyyy">doi:10.xxxx/yyyy</a><span class="sep">&middot;</span><a href="files/title.pdf">PDF</a></span></dd>
```

The `sep` span is the middle dot between links; drop it if there's only one link.
Use the DOI form (`https://doi.org/...`) rather than a publisher URL where you
have a choice — DOIs are permanent, publisher URLs get reorganized.

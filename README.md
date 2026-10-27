# Yixuan Wang — personal website

A static portfolio for GitHub Pages, with research, cinematography, biography, and journal pages. No build step or package installation is required.

## Preview locally

Run `python3 -m http.server 4173` from this directory, then visit http://localhost:4173.

## Content

- `index.html`: introduction, Cambridge affiliation and scholarship, research summaries, and all seven original films.
- `about.html`: academic background and personal biography.
- `blogs.html`: the existing journal entries and WeChat link.
- `styles.css` / `site.js`: shared responsive design, film filters, and motion controls.
- `assets/`: optimized copies of the existing photographs, the supplied red-backdrop portrait, and still frames extracted from the original films. Original media remains in `images/` and `videos/`.

The unpublished manuscript is described on the research page but its source is not included. No coauthor list or publication venue is asserted for that project. Add an online link and confirmed authors when available.

The arXiv summary and author list follow https://arxiv.org/abs/2607.17494. Current PhD and scholarship information was supplied by Yixuan Wang. Prior academic background, films, journal entries, and the CC BY 4.0 link are retained from the original site.

## Hosting

Keep the existing `CNAME` (`jolynewang.com`) and serve the repository root with GitHub Pages. The redesign uses the existing page URLs. Merging the review branch may update the live website according to the repository's Pages settings.

The hero film plays muted when reduced motion and data-saving preferences allow it, with an explicit pause control. Gallery videos use poster images and load only when played. Text and navigation remain available without JavaScript. Fonts load from Google Fonts with system fallbacks.

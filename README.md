# AI-FD Group Assignment

A responsive website for a fictional cleaning company, built with semantic HTML and vanilla CSS.

## Current focus: header and footer

Each team member will develop an independent header and footer version. The team will compare the versions and choose the one to use for the website.

- `sean-header-footer`
- `nourhan-header-footer`
- `nkheso-header-footer`

Work on your own branch. Open a pull request when your version is ready for the team to review. Keep `main` for agreed changes and merge the chosen approach after the team decides.

## Assignment boundaries

- Approximately three or four consistent, responsive pages.
- Semantic HTML, external CSS, Flexbox, media queries, responsive images, and Roboto.
- Shared navigation and footer, with an HTML/CSS-only mobile menu.
- No JavaScript, CSS Grid, frameworks, or Sass. Font Awesome may be used only for icons.
- Discuss and attempt problems as a team before asking AI for help; understand and test any suggestions.

## Stylesheet structure

Every page loads styles in the same order:

1. `Css/style.css`: shared fonts, design variables, base styles, page layout, header, footer, and accessibility utilities.
2. `Css/all.min.css`: Font Awesome icons.
3. One stylesheet from `Css/pages/` for that page's content.

| Page | Page stylesheet |
| --- | --- |
| `index.html` | `Css/pages/home.css` |
| `pages/about.html` | `Css/pages/about.css` |
| `pages/services.html` | `Css/pages/services.css` |
| `pages/contact.html` | `Css/pages/contact.css` |

Link these files directly in each HTML document's `<head>`. Do not import page stylesheets into `style.css` or load another page's stylesheet. CSS filenames and folders do not limit which elements their selectors can match: loading both Home and Services styles on one page makes their `.service-card` and `.service-image` rules collide.

Keep page-specific sections, cards, buttons, and media queries in the owning page's stylesheet. Add a rule to `style.css` only when all pages should share it. Use descriptive page or section prefixes for new private classes, such as `.about-hero` or `.contact-field`.

All pages use `body.site-page`, a main element with `id="main-content"` and `tabindex="-1"`, and the shared header/footer classes. The `.site-main` class adds content padding where needed; each page's stylesheet controls its section layout. Header and footer HTML is repeated because this is an HTML/CSS-only site, so apply agreed shared component changes to all four documents and keep links relative to each document's location.

After merging page changes, check all four pages at desktop and mobile widths, including the homepage Services section, navigation menu, skip link, and footer.

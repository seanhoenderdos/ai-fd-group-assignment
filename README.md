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

## Team formatting and linting setup

ESLint checks our HTML and CSS for common mistakes. Prettier formats files using four spaces, a preferred line width of 100 characters, and LF line endings. These are development tools: the website still uses only HTML and CSS and can be opened directly in a browser.

Each team member should do this once after pulling these files:

1. Install a supported Node.js version: 20.19+, 22.13+, or 24+ (use an LTS release).
2. Open the repository folder itself in VS Code so its `.vscode/settings.json` applies.
3. Run `npm ci` in the terminal to install the exact shared tool versions from `package-lock.json`.
4. Install the recommended **Prettier - Code formatter** (`esbenp.prettier-vscode`) and **ESLint** (`dbaeumer.vscode-eslint`) extensions. VS Code lists these under Extensions > Recommended.
5. Save an HTML or CSS file with `Ctrl+S`. Prettier formats the whole file, and ESLint applies available automatic fixes. Problems that need a decision appear in VS Code's Problems panel (`Ctrl+Shift+M`).

If Windows PowerShell says `npm.ps1` cannot run because scripts are disabled, use `npm.cmd` instead: for example, `npm.cmd ci` or `npm.cmd run check`. Changing the computer's execution policy is unnecessary.

| Command                | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `npm run format`       | Format all maintained source files and configuration.       |
| `npm run format:check` | Check formatting without changing files.                    |
| `npm run lint`         | Check HTML and CSS for common mistakes.                     |
| `npm run lint:fix`     | Apply available ESLint fixes; report remaining problems.    |
| `npm run check`        | Check formatting and linting before opening a pull request. |

Commit `package.json`, `package-lock.json`, and the shared configuration files. Each teammate installs their own `node_modules`; Git ignores that folder. Font Awesome, media, evidence, and the existing personal `AI-USAGE.md` log are excluded from formatting. ESLint checks authored HTML and CSS and excludes third-party code and media.

If saving does not format a file, confirm both extensions are enabled for this workspace, dependencies are installed, and **Format Document With... > Prettier - Code formatter** is selected. Reload VS Code after installing extensions if necessary. Other editors can use the same Prettier and EditorConfig files, but must enable their own format-on-save integration.

## Stylesheet structure

Every page loads styles in the same order:

1. `Css/style.css`: shared fonts, design variables, base styles, page layout, header, footer, and accessibility utilities.
2. `Css/all.min.css`: Font Awesome icons.
3. One stylesheet from `Css/pages/` for that page's content.

| Page                  | Page stylesheet          |
| --------------------- | ------------------------ |
| `index.html`          | `Css/pages/home.css`     |
| `pages/about.html`    | `Css/pages/about.css`    |
| `pages/services.html` | `Css/pages/services.css` |
| `pages/contact.html`  | `Css/pages/contact.css`  |

Link these files directly in each HTML document's `<head>`. Do not import page stylesheets into `style.css` or load another page's stylesheet. CSS filenames and folders do not limit which elements their selectors can match: loading both Home and Services styles on one page makes their `.service-card` and `.service-image` rules collide.

Keep page-specific sections, cards, buttons, and media queries in the owning page's stylesheet. Add a rule to `style.css` only when all pages should share it. Use descriptive page or section prefixes for new private classes, such as `.about-hero` or `.contact-field`.

All pages use `body.site-page`, a main element with `id="main-content"` and `tabindex="-1"`, and the shared header/footer classes. The `.site-main` class adds content padding where needed; each page's stylesheet controls its section layout. Header and footer HTML is repeated because this is an HTML/CSS-only site, so apply agreed shared component changes to all four documents and keep links relative to each document's location.

After merging page changes, check all four pages at desktop and mobile widths, including the homepage Services section, navigation menu, skip link, and footer.

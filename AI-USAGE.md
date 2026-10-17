AI USAGE LOG

_______________________________________________________________
_______________________________________________________________
_______________________________________________________________


Sean Hoenderdos:

Date: 13 October 2026
Task: Review a teammates code against our shared setup and assignment brief.

Think and try first:
I had merged the shared file structure, fonts and base styles. I wanted to check whether my teammates changes conflicted with that setup.

Ai tool: chatgpt

Prompt: "Can you please analyse my assignment and check if the team memebers code conflicts with teh code I merged last night?"

Ai suggestions: 
Combine the two index.html versions carefully, correct fotn paths and page links, reuse the shared styles, and remove Normalize.css because the brief only permits Font Awesome.

What I learned:
Files can clash in GIT but there can also be problems wiht links, fonts, and styles when GIt can merge the files.

My testing:
Pending. I still need to check these findings in the files and test the pages in the browser.

Decision:
Pedning verfication. No changes have been merged from this review.

Team decision: During the meeting on 13 October 2026, we agreed to use Sean’s header and footer design.

Evidence:
https://github.com/seanhoenderdos/ai-fd-group-assignment/compare/main...nourhan-header-footer





Date: 15 October 2026
Task: Create the hero image using ai

Ai tool: chatgpt

Prompt: "Can you please generate an image that I can use for the hero section to be positioned to on the right side?

I ahve attached a screenshot of hero section"

What I learned:
Chatgpt can easily get stuck in one direction so its best to be specific about what you want. Chatgpt usually creates pong images and so I have to usea tool like https://squoosh.app/ to convert it to webp.

My testing:
I checked the file extension and it was png which is great for the web.

Decision:
Used squoosh to convert to webp

Evidence:
/images/sean/hero-image-evidence.png

____________________________________________________________________________________________________________________________________________






Date: 13 October 2026
Task: Build a hamburger menu using html and css.

Think and try first:
I have no idea how to do this. So i resorted to youtube to learn.

What I learned:
1. The checkbox stores whether the menu is open
   An input with type="checkbox" is visually hidden. Unchecked means closed; checked means open.

2. The hamburger is a label
   The label’s for="menu-toggle" matches the checkbox’s id="menu-toggle". Clicking the label toggles that checkbox. 
   Font Awesome supplies the hamburger and X icons.

3. CSS targets the checked state
   .menu-toggle:checked ~ .site-nav
This means: when the checkbox is checked, find .site-nav later in the same parent and show it. 
Normally the navigation has display: none; this rule changes it to display: block.

4. The icons swap
   .menu-toggle:checked + .menu-label targets the label immediately after the checkbox. We hide the hamburger inside it and show the X.

The targeting symbols:
- .name targets a class
- #name targets an ID
- A B targets B anywhere inside A
- A + B targets B immediately after A
- A ~ B targets B later under the same parent
- :checked, :hover and :focus-visible target a particular state
- [aria-current="page"] targets the current page’s link

Core CSS used:
- Flexbox to arrange the logo, button and links
- flex-direction: column to stack mobile links
- align-items: center to centre them horizontally in that column
- gap and padding for spacing
- border-radius and an rgba background for the rounded highlight
- A media query at 48rem, normally 768px, to hide the hamburger and show horizontal desktop navigation

The HTML order matters: checkbox → label → navigation, all inside the same parent. That’s what makes the + and ~ selectors work.

Testing:
I tested it by opening dev tools and making sure it works as intended.

Evidence:
https://www.youtube.com/watch?v=OnWTTUfBLMo





Sean Hoenderdos:

Date: 17 October 2026
Task: Audit the header, footer, index.html and file and folder structure

Think and try first:
I tested the header, the footer and index.html by inpsecting it in the browser and making sure it works as intended.

The file and folder structure was tested for scalability as everyone adds code and was imporved where necessary.

Ai tool: chatgpt

Prompt: "CAn you please analyse this project and tell me in terms of the following:
- Header
- Footer
- index.html
- File and folder structure
1. Where are we using semantic html poorly and where could we be using it better? And why
2. Where does the file and folder structure lack in terms of scalability and how could we improve it?"

Ai suggestions: 
Header imporvments:
Problem:
“Prime Shine” uses <h4>, although it is branding rather than a subsection heading. It also appears before the page’s <h1>.

Suggestion:
Use <span> inside the existing home link and control its appearance through CSS. This keeps branding out of the heading hierarchy.

Problem:
A checkbox controls whether navigation is visible. Its native meaning communicates checked/unchecked rather than expanded/collapsed navigation.

Suggestion:
Treat this as a compromise under the assignment constraints. A native <details>/<summary> disclosure is an alternative worth evaluating and testing.


Footer:
Problem:
The concrete problem is in index.html: all three social links use href="/", and this is repeated across all four pages.

Solution:
Use the actual profile URLs when available. Until then, omit the links or display non-interactive platform information. This is a link-purpose problem rather than an incorrect choice of HTML element.

There is no need to replace the copyright paragraph or wrap every footer link group in another <nav>.


index.html:
Problem:
<quote> is not a standard HTML element. It renders, but does not identify the content as a quotation.

Solution:
Use <blockquote> for this standalone testimonial.

Problem:
The author is placed in a <footer>. This is permitted as a section footer, but the relationship between quote and attribution could be clearer.

Solution:
Group the quotation in <figure> and put the attribution in <figcaption>.

Problem(testimonials):
This thematic section has no heading.

Solution(testimonials):
Add an <h2> such as “What our customers say”. The existing .visually-hidden utility can preserve the visual design if needed.


Problem(CTA):
Final call to action — index.html:	Its heading is <h3>, although this section is a sibling of Services rather than a subsection within it.

Solution(cta):
Use <h2> so its level reflects the page structure.

Problem(service cards):
Service cards — index.html The collection uses only <div> wrappers. This is valid, but does not express that these are four related service offerings.

Solution(service cards):
Consider a <ul> containing <li> cards. That communicates a collection and its items.



File and folder structure:

Current situation	Scalability concern	Practical improvement

Header and footer HTML are copied across four documents.	Every shared change requires several edits, increasing the chance of inconsistent links, accessibility attributes, or markup.	Under the current assignment rules, document the shared markup and update/check all four pages together. If future rules permit templates, generate the pages from shared header/footer templates.

style.css (line 1) contains fonts, variables, base rules, layout, header, footer, and utilities.	It is manageable now, but these responsibilities will become harder to locate and edit independently as it grows.	When needed, split it into a few purposeful files: base.css, layout.css, and components.css. Keep page-specific styles separate.

Home and Services both define .service-card, .service-image, and .cta-button.	These names describe different implementations. For example, .service-image styles a wrapper on Home but an actual <img> on Services. Reusing or combining their styles could cause collisions.	Use page-specific names such as .home-service-media and .services-card-image, or create a genuinely shared component when appearance and behaviour match.

Design values are partly centralised and partly hard-coded. For example, [services.css (line 3)](C:/Users/seanh/OneDrive/Desktop/ai-fd-group-assignment/Css/pages/services.css:3) repeats colours and the font family.	A site-wide design change requires searching several files and can leave pages inconsistent.	Use the existing shared CSS variables consistently for common colours, typography, and other agreed values.

Project CSS and Font Awesome CSS share Css/, while Font Awesome fonts sit in root-level webfonts/.	Authored code and third-party dependencies are scattered, making ownership and upgrades less obvious.	Group Font Awesome under assets/vendor/fontawesome/, keeping its css/ and webfonts/ together.

Asset names mix conventions: homeHero.webp, serviceOne.webp, reg.png, and prime_shine_deep_cleaning.webp.	Assets become harder to identify, search, and distinguish as their number grows.	Choose descriptive, consistent names such as home-hero.webp and regular-cleaning.webp. Add image subfolders when the collection becomes large enough to benefit.


The overlapping CSS names are a future maintenance risk, not a current cross-page collision: each document presently loads only its own page stylesheet.
A modest structure to grow towards would be:

project/
├── index.html
├── pages/
│   ├── about.html
│   ├── services.html
│   └── contact.html
├── assets/
│   ├── css/
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── about.css
│   │       ├── services.css
│   │       └── contact.css
│   ├── images/
│   ├── fonts/
│   └── vendor/
│       └── fontawesome/
│           ├── css/
│           └── webfonts/
├── evidence/
├── AI-USAGE.md
└── README.md

Using lowercase css consistently would also simplify naming. The current Css folder works because the references match; any rename must update those references, including CSS font URLs.
Creating a components/ folder containing header.html and footer.html alone would not eliminate duplication: plain HTML does not automatically include those files. Likewise, CSS class naming conventions can improve organisation, but the semantic meaning still comes from the HTML elements.

What I learned:
I learned that a page can look correct while its HTML does not clearly describe the content.

Headings should represent the content hierarchy rather than be chosen for their default size. For example, the company name in the header does not need to be an h4.

I also learned that blockquote identifies a quotation, and figure with figcaption can group a testimonial with its author. Div elements are still appropriate for layout wrappers.

Separate CSS files help organise styles, but they do not scope class names to a particular page. Reusing the same class names for different designs could cause conflicts if the styles are later loaded together.

Plain HTML does not automatically include shared header and footer files, so our current approach requires keeping the repeated markup consistent across all four pages.

My testing:
I inspected the header, footer and homepage
in the browser.

Decision:
Pending verification and team discussion.

My proposed priority is to correct the logo markup, testimonial markup, testimonial heading, CTA heading level and misleading
social links.

I propose keeping the current checkbox menu and shared/page stylesheet structure for this assignment. The menu already fits the HTML/CSS-only requirement, and the stylesheet separation is suitable for our current four-page site.

I will discuss page-specific class names and more consistent use of shared CSS variables with the team. Larger folder moves and additional CSS files can be deferred until there is a clear maintenance benefit.

Evidence:
./evidence/images/sean/Audit-evidence.png

______________________________________________________________________________
______________________________________________________________________________
______________________________________________________________________________

Nourhan Magdy:

______________________________________________________________________________
______________________________________________________________________________
______________________________________________________________________________

S Mathebula:
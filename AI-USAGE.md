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

______________________________________________________________________________
______________________________________________________________________________
______________________________________________________________________________

Nourhan Magdy:

______________________________________________________________________________
______________________________________________________________________________
______________________________________________________________________________

S Mathebula:
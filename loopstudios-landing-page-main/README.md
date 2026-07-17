# Frontend Mentor - Loopstudios landing page solution

This is my solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw).

## Overview

### The challenge

Users should be able to:

- View an optimal layout for mobile, tablet, and desktop screen sizes
- Open and close the mobile navigation menu
- See hover and keyboard-focus states for interactive elements

### Screenshot

Add a screenshot of the finished page here after opening the project in a browser.

### Links

- Solution URL: Add your GitHub repository URL
- Live Site URL: Add your GitHub Pages, Netlify, or Vercel URL

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first responsive design
- Flexbox
- CSS Grid
- Responsive images with the `picture` element
- Accessible JavaScript navigation toggle

### What I learned

I learned how to break a full landing page into smaller sections and choose a layout tool based on each section. I used Flexbox for one-dimensional navigation and footer layouts, and CSS Grid for the creation cards.

I also learned how the `picture` element can load different image files for mobile and desktop layouts:

```html
<picture>
  <source media="(min-width: 48rem)" srcset="./images/desktop/image-deep-earth.jpg">
  <img src="./images/mobile/image-deep-earth.jpg" alt="View of Earth from space">
</picture>
```

For the mobile menu, JavaScript changes a CSS class and updates `aria-expanded` so the menu is understandable to assistive technology.

### Continued development

I want to continue practising responsive spacing, CSS Grid, accessible navigation, and comparing my work with a design reference more accurately.

### AI Collaboration

I used ChatGPT to help me:

- Plan the semantic HTML structure
- Understand when to use Flexbox and CSS Grid
- Build and debug the responsive navigation menu
- Review accessibility and responsive behaviour
- Explain the completed code so I could study it afterward

I reviewed the generated code and used the explanations to understand how each section works.

## Author

- Name: Doan Anh Thy Bui
- Frontend Mentor: [@bui00083](https://www.frontendmentor.io/profile/yourusername)

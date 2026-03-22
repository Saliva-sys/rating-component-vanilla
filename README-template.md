# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
    - [AI Collaboration](#ai-collaboration)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

V tejto verzii som sa zamerala na pochopenie základov JavaScriptu, ako sú Event Listeners a manipulácia s DOM prvkami bez použitia frameworkov.
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Github Repository](https://github.com/Saliva-sys/rating-component-vanilla.git)
- Live Site URL: [Live URL](https://saliva-sys.github.io/rating-component-vanilla/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

In this project, I focused on mastering the "Input - Process - Output" logic using vanilla JavaScript. Here are the key takeaways:

_1. DOM Manipulation & Selectors_
I practiced how to accurately identify and "grab" HTML elements so JavaScript can interact with them. Understanding the difference between selecting a single element (querySelector) and a collection of elements (querySelectorAll) was crucial for this layout.

_2. Handling Collections with .forEach()_
Instead of writing unique code for each rating button (1-5), I implemented the forEach method. This allowed me to apply a single click listener to the entire group of buttons, keeping the code "DRY" (Don't Repeat Yourself).

```js
ratingSelection.forEach((rating) => {
  rating.addEventListener("click", () => {
    // Logic for selection happens here
  });
});
```

_3. State Reset Logic_
One of the biggest challenges was ensuring that only one rating is selected at a time. I learned to implement a "Reset" loop that clears the active styles from all buttons before applying the "Selected" style to the clicked one.

_4. Data Continuity & UI Switching_
I learned how to store a user's choice in a variable (allRating) so it persists even after the initial UI (the rating card) is hidden. Switching between the "Rating" and "Thank You" states was handled by toggling a .hidden CSS class.

```js
if (allRating > 0) {
  userRating.textContent = allRating; // Transferring data to the next screen
  ratingCard.classList.add("hidden"); // UI State Switch
  thanksCard.classList.remove("hidden");
}
```

_5. Clean CSS Reset for Interactive Elements_
I learned the importance of a custom CSS reset for buttons to remove browser-default styles. This provided a "blank canvas" that allowed me to have full control over the hover and active states via JavaScript and CSS variables.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

### AI Collaboration

Describe how you used AI tools (if any) during this project. This helps demonstrate your ability to work effectively with AI assistants.

- What tools did you use (e.g., ChatGPT, Claude, GitHub Copilot)?
- How did you use them (e.g., debugging, generating boilerplate, brainstorming solutions)?
- What worked well? What didn't?

**Note: Delete this note and the content above if you didn't use AI, or replace with your own experience.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

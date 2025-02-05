# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form.
- See a success message with their email after successfully submitting the form.
- See form validation messages if:
  - The field is left empty.
  - The email address is not formatted correctly.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.

### Screenshot

[Functionality example gif](./assets/images/explain_component.gif)

[Functionality example images](./assets/images/newsletter-desktop%20(1).png)
[Functionality example images](./assets/images/newsletter-desktop%20(2).png)[Functionality example images](./assets/images/newsletter-mobile%20(1).png)[Functionality example images](./assets/images/newsletter-mobile%20(2).png)

### Links

- **Solution URL:** [Frontend Mentor solution](https://your-solution-url.com)
- **Live Site URL:** [GitHub Pages](https://carlosdamota.github.io/newsletter-sign-up-js-fm/)

## My process

For this exercise, I focused on several key areas:

- **CSS Variables:** I used CSS custom properties to manage colors (e.g., `--text-color`, `--bg-color`, `--success-color`, `--deny-color`), which are defined in the `:root` of my main style file. I chose to define them in the main CSS file (style.css) rather than in the reset to keep the reset file neutral and focused solely on normalizing styles.
  
- **Accessibility (A11y):**  
  - The HTML structure follows semantic guidelines (using `<main>`, `<section>`, `<form>`, etc.).
  - Labels are correctly associated with inputs using `for` and `id`.
  - I added `role="alert"` and `aria-live="assertive"` to the validation message element so that screen readers notify users when the validation message changes.
  - When showing the dynamic success message, focus management is handled by shifting focus to the dismiss button, ensuring a smooth navigation for keyboard and screen reader users.

- **JavaScript – Secure DOM Manipulation:**  
  - To create the success message dynamically, I opted for using `document.createElement` and `append` instead of using `innerHTML`. Although this method is a bit more complex, it provides a higher security level by avoiding potential XSS vulnerabilities when inserting dynamic content (e.g., the email).
  - I practiced regex-based validation for the email input to ensure that the email format is correct.
  
- **CSS Nesting:**  
  - I made use of native CSS nesting (which is supported by about 90% of modern browsers) to improve code readability and maintainability. This approach organizes related styles in a hierarchical manner and makes the stylesheet easier to navigate.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Native CSS nesting
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript for DOM manipulation and validation
- Regular Expressions (regex) for custom email validation

*(Feel free to replace or add to the list above based on your actual stack.)*

### What I learned

- **CSS Variables & Nesting:**  
  Using CSS variables allows for centralized color management. Native CSS nesting improves readability by grouping related styles, which makes maintenance easier.
  
  ```css
  :root {
    --text-color: hsl(234, 29%, 20%);
    --bg-color: hsl(235, 18%, 26%);
    --success-color: #32CD32;
    --deny-color: tomato;
  }
  ```

- **Accessibility Enhancements:**  
  Adding `role="alert"` and `aria-live="assertive"` to dynamic elements (such as the validation message) ensures that screen readers properly announce changes. Additionally, managing focus after showing a success message improves usability for keyboard and screen reader users.

- **Secure DOM Manipulation in JavaScript:**  
  Instead of using `innerHTML` to insert dynamic content (like the email address), I used `document.createElement` and `append` methods. This approach avoids potential security issues (e.g., XSS) and makes the code safer.
  
  ```js
  const successMessage = document.createElement("div");
  // ... create and append elements safely
  document.body.appendChild(successMessage);
  ```

- **Regex-based Email Validation:**  
  Practicing regex for email validation reinforces how to apply custom validations beyond the browser’s built-in mechanisms.

### Continued development

In future projects, I plan to:

- Refine focus management further for enhanced accessibility.
- Explore additional CSS features such as custom media queries and container queries.
- Improve error handling and possibly integrate a state management approach for more complex interactions.
- Keep monitoring browser support for native CSS nesting to ensure compatibility.

### Useful resources

- [MDN Web Docs - Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [The A11Y Project](https://www.a11yproject.com/)
- [MDN Web Docs - CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Regex Tutorial – Regular Expressions for Beginners](https://www.regular-expressions.info/tutorial.html)

## Author

- **GitHub:** [@carlosdamota](https://github.com/carlosdamota)
- **Frontend Mentor:** [@carlosdamota](https://www.frontendmentor.io/profile/carlosdamota)
- **Linkedin** [@carlos-damota](www.linkedin.com/in/carlos-damota)

## Acknowledgments

I’d like to thank everyone who contributed feedback and inspiration during this project. Special thanks to the Frontend Mentor community for providing such practical challenges that push me to improve my coding and accessibility practices.


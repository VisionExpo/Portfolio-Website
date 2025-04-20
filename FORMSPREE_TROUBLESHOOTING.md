# Formspree Troubleshooting Guide

If you're experiencing issues with your Formspree contact form, follow these steps to diagnose and fix the problem.

## Common Issues and Solutions

### 1. Not Receiving Form Submissions

**Possible causes:**
- You haven't confirmed your email with Formspree
- Submissions are going to your spam folder
- The form endpoint is incorrect

**Solutions:**
- Check your email (including spam folder) for a confirmation email from Formspree
- Add Formspree to your contacts or safe senders list
- Verify your form endpoint in the HTML code matches the one provided by Formspree

### 2. Form Submits But No Redirect

**Possible causes:**
- The redirect URL is incorrect or inaccessible
- There's a JavaScript error preventing the redirect

**Solutions:**
- Make sure the thank-you.html page exists in the specified location
- Use a relative path for local testing (e.g., "thank-you.html")
- Use an absolute URL for production (e.g., "https://visionexpo.github.io/Portfolio-Website/templates/thank-you.html")

### 3. "Server-side form submission is not available" Error

**Possible causes:**
- JavaScript is trying to submit the form via AJAX instead of letting Formspree handle it
- There's a conflict with other JavaScript on the page

**Solutions:**
- Remove any JavaScript that's handling form submission
- Make sure the form has a direct action attribute pointing to Formspree
- Remove any event listeners that call preventDefault() on form submission

## Testing Your Formspree Form

### Step 1: Verify Your Form HTML

Make sure your form HTML looks like this:

```html
<form action="https://formspree.io/f/mblgnnvd" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <input type="text" name="subject" placeholder="Subject">
  <textarea name="message" placeholder="Your Message" required></textarea>
  <!-- Hidden field to prevent spam -->
  <input type="text" name="_gotcha" style="display:none">
  <!-- Redirect after submission -->
  <input type="hidden" name="_next" value="thank-you.html">
  <button type="submit">Send Message</button>
</form>
```

### Step 2: Test with a Simple Form

If you're still having issues, create a simple test form in a new HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Test Form</title>
</head>
<body>
  <h1>Test Form</h1>
  <form action="https://formspree.io/f/mblgnnvd" method="POST">
    <input type="text" name="name" placeholder="Name" required>
    <input type="email" name="email" placeholder="Email" required>
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit">Send Test</button>
  </form>
</body>
</html>
```

Save this as `test-form.html` and open it in your browser to test.

### Step 3: Check Formspree Dashboard

Log in to your Formspree account and check the form's dashboard:
- Are submissions being received?
- Are there any error messages?
- Is the form active and confirmed?

## Contacting Formspree Support

If you've tried all the troubleshooting steps and still have issues:

1. Log in to your Formspree account
2. Go to Help/Support
3. Provide details about the issue you're experiencing

## Alternative Solutions

If Formspree continues to cause issues, consider these alternatives:

1. **Netlify Forms**: If you're hosting on Netlify, their built-in form handling is excellent
2. **EmailJS**: A JavaScript library that sends emails directly from client-side code
3. **Google Forms**: Embed a Google Form on your website
4. **Static Forms**: Another service similar to Formspree (staticforms.xyz)

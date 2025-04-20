# Contact Form Setup for Portfolio Website

This README explains how the contact form on your portfolio website works and how to maintain it.

## How It Works

Your portfolio website uses [Formspree](https://formspree.io/) to handle contact form submissions. When a visitor submits the contact form:

1. The form data is sent to Formspree's servers
2. Formspree forwards the submission to your email (gorulevishal984@gmail.com)
3. The visitor is redirected to a thank-you page

## Current Setup

The contact form is currently set up with:

- **Form Endpoint**: `https://formspree.io/f/mblgnnvd`
- **Redirect URL**: `https://visionexpo.github.io/Portfolio-Website/templates/thank-you.html`

## Important Notes

1. **First Submission**: The first time someone submits your form, you'll receive an email from Formspree asking you to confirm your email address. You must click the confirmation link to start receiving form submissions.

2. **Free Plan Limitations**: The free plan of Formspree allows up to 50 submissions per month. If you expect more, consider upgrading to a paid plan.

3. **Spam Protection**: The form includes a honeypot field (`_gotcha`) to help prevent spam submissions.

## Customizing the Form

### Changing the Recipient Email

If you want to change the email address where you receive form submissions:

1. Create a new form in your Formspree account
2. Update the form action in `templates/contact.html`

### Customizing the Thank You Page

The thank-you page (`templates/thank-you.html`) can be customized to match your branding or provide additional information to visitors after they submit the form.

### Adding Form Fields

If you want to add more fields to the form:

1. Add the HTML for the new field in `templates/contact.html`
2. The field will automatically be included in the email you receive

## Troubleshooting

If you're having issues with the form:

1. **Not receiving submissions**: Check your spam folder and make sure you've confirmed your email with Formspree
2. **Redirect not working**: Make sure the thank-you page URL is correct and accessible
3. **Form errors**: Check the Formspree dashboard for any error messages

## Upgrading to a Paid Plan

If you need more features like:
- More submissions per month
- File uploads
- Custom email templates
- Removal of Formspree branding

Consider upgrading to a paid plan on the [Formspree pricing page](https://formspree.io/plans).

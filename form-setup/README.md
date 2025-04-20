# Contact Form Setup Documentation

This folder contains documentation and guides for the contact form implementation in the portfolio website.

## Files in this Folder

1. **CONTACT_FORM_README.md**
   - Overview of how the contact form works
   - Current configuration details
   - Maintenance instructions

2. **FORMSPREE_SETUP_GUIDE.md**
   - Step-by-step guide for setting up Formspree
   - Instructions for creating and configuring a Formspree account
   - Information about customizing form settings

3. **FORMSPREE_TROUBLESHOOTING.md**
   - Solutions for common issues
   - Testing procedures
   - Alternative options if problems persist

## Quick Reference

- **Current Form Endpoint**: `https://formspree.io/f/mblgnnvd`
- **Redirect URL**: `thank-you.html`
- **Form Location**: `templates/contact.html`

## Important Notes

1. The contact form uses [Formspree](https://formspree.io/) to handle submissions without requiring any server-side code.

2. Form submissions are sent directly to your email (gorulevishal984@gmail.com).

3. After submitting the form, users are redirected to a thank-you page.

4. The free plan of Formspree allows up to 50 submissions per month.

## Making Changes

If you need to modify the contact form:

1. Edit the form HTML in `templates/contact.html`
2. Update the thank-you page in `templates/thank-you.html`
3. If changing the form endpoint, update it in both the HTML and this documentation

# Formspree Setup Guide for Portfolio Contact Form

This guide will help you set up Formspree for your portfolio contact form, which is a much simpler alternative to the server-side email solution.

## What is Formspree?

Formspree is a form backend, API, and email service for HTML forms. It allows you to set up a contact form on your website without any server-side code or email configuration.

## Step 1: Create a Formspree Account

1. Go to [Formspree](https://formspree.io/) and sign up for a free account
2. Verify your email address

## Step 2: Create a New Form

1. Log in to your Formspree account
2. Click "New Form"
3. Give your form a name (e.g., "Portfolio Contact Form")
4. Select your email address where you want to receive form submissions
5. Click "Create Form"

## Step 3: Get Your Form Endpoint

After creating your form, Formspree will provide you with a unique form endpoint URL that looks like:
```
https://formspree.io/f/xpzvdvnj
```

This is the URL you'll use in your contact form's action attribute.

## Step 4: Update Your Contact Form

The contact form in your portfolio website has already been updated to use Formspree. The key changes are:

1. The form action is set to your Formspree endpoint:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xpzvdvnj" method="POST">
   ```

2. A hidden field is added to prevent spam:
   ```html
   <input type="text" name="_gotcha" style="display:none">
   ```

3. A redirect URL is specified for after form submission:
   ```html
   <input type="hidden" name="_next" value="http://localhost:8000/thank-you.html">
   ```

## Step 5: Test Your Form

1. Run your website locally or deploy it
2. Go to the contact page
3. Fill out the form and submit it
4. You should be redirected to the thank-you page
5. Check your email to see if you received the form submission

## Step 6: Customize Form Settings (Optional)

You can customize various settings for your form in the Formspree dashboard:

1. **Email Notifications**: Customize the email template or add additional recipients
2. **Spam Filtering**: Adjust spam filter settings
3. **reCAPTCHA**: Add reCAPTCHA to prevent spam
4. **Webhooks**: Set up webhooks to integrate with other services
5. **File Uploads**: Enable file uploads (requires paid plan)

## Deployment Considerations

When deploying your website, make sure to update the redirect URL in your contact form:

```html
<input type="hidden" name="_next" value="https://your-website-url.com/thank-you.html">
```

## Free Plan Limitations

The free plan of Formspree has some limitations:

- 50 submissions per month
- No custom domains for redirects
- Basic spam filtering
- No file uploads

If you need more features, you can upgrade to a paid plan.

## Troubleshooting

If you're having issues with your form:

1. **Form submissions not working**: Make sure your form endpoint URL is correct
2. **Not receiving emails**: Check your spam folder
3. **Redirect not working**: Make sure your redirect URL is correct and accessible

## Need More Help?

If you need more help with Formspree, check their [documentation](https://help.formspree.io/).

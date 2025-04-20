# Email Setup Guide for Portfolio Contact Form

This guide will help you set up and use the email functionality for your portfolio contact form.

## Overview

The contact form on your portfolio website can send emails directly to your Gmail account when visitors submit the form. This requires:

1. A Gmail account with 2-Step Verification enabled
2. An App Password for your portfolio website
3. Running the Flask server with the correct configuration

## Step 1: Set Up Gmail for App Passwords

### Enable 2-Step Verification

1. Go to your Google Account: https://myaccount.google.com/
2. In the navigation panel, select "Security"
3. Under "Signing in to Google," select "2-Step Verification"
4. Follow the steps to turn on 2-Step Verification

### Create an App Password

1. Go to your Google Account: https://myaccount.google.com/
2. In the navigation panel, select "Security"
3. Under "Signing in to Google," select "App passwords"
4. At the bottom, click "Select app" and choose "Mail"
5. Click "Select device" and choose "Other (Custom name)"
6. Enter "Portfolio Website" and click "Generate"
7. Google will display a 16-character password (it will look like: "abcd efgh ijkl mnop")
8. **Copy this entire password** - this is your App Password

## Step 2: Run the Website with Email Functionality

### Using the Prompt Method (Recommended)

1. Open a command prompt or terminal in your portfolio website folder
2. Run the command: `.\run_with_prompt.bat`
3. When prompted, enter your App Password (without spaces)
4. The server will start, and you can access your website at http://localhost:8000

### Testing the Contact Form

1. Open your browser and go to http://localhost:8000/contact.html
2. Fill out the contact form with test information
3. Submit the form
4. You should see a success message, and an email should be sent to your Gmail account

## Troubleshooting

### Common Issues

1. **"Application-specific password required" Error**
   - Make sure you're using an App Password, not your regular Gmail password
   - Ensure 2-Step Verification is enabled on your Google account
   - Try generating a new App Password

2. **"Username and Password not accepted" Error**
   - Check that you've entered the App Password correctly (no spaces)
   - Make sure the App Password is still valid (not revoked)

3. **Form Submits but No Email Received**
   - Check your spam folder
   - Verify that your Gmail account doesn't have additional security restrictions
   - Check the server logs for any error messages

### Testing Gmail Login

If you're having issues with the Gmail login, you can test it directly:

1. Run the command: `python test_gmail_login.py`
2. Enter your App Password when prompted
3. The script will test the connection to Gmail and provide detailed feedback

## Deployment Considerations

When deploying your portfolio website to a production server:

1. **Environment Variables**: Use environment variables to store sensitive information
2. **HTTPS**: Ensure your website uses HTTPS to protect form submissions
3. **Rate Limiting**: Consider implementing rate limiting to prevent form spam
4. **CAPTCHA**: Add CAPTCHA verification for additional protection

## Security Notes

- Never hardcode your App Password in files that will be committed to version control
- Regularly rotate your App Passwords for better security
- Monitor your Gmail account for any suspicious activity

## Need More Help?

If you continue to have issues:
1. Check Google's official documentation: https://support.google.com/accounts/answer/185833
2. Try using a different email service like Outlook or a dedicated email sending service like SendGrid
3. Consider using a third-party form submission service like Formspree or Netlify Forms

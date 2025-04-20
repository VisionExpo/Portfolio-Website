# Gmail Setup Guide for Portfolio Contact Form

To make your contact form send emails through Gmail, you need to set up your Gmail account properly. This guide will walk you through the process.

## Step 1: Enable 2-Step Verification

Gmail requires 2-Step Verification to be enabled before you can create App Passwords:

1. Go to your Google Account: https://myaccount.google.com/
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "2-Step Verification"
4. Follow the steps to turn on 2-Step Verification

## Step 2: Create an App Password

After enabling 2-Step Verification, you can create an App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "App passwords"
4. At the bottom, select "Select app" and choose "Mail"
5. Select "Other (Custom name)" and enter "Portfolio Website"
6. Click "Generate"
7. Google will display a 16-character password - **copy this password**
8. Click "Done"

## Step 3: Update Your Email Password

Now, update the password in your run_app_with_email.bat file:

1. Open run_app_with_email.bat in a text editor
2. Replace the EMAIL_PASSWORD value with your new App Password
3. Save the file

## Step 4: Run Your App

Now you can run your app with the correct email configuration:

```
.\run_app_with_email.bat
```

## Troubleshooting

If you still have issues:

1. Make sure you're using the App Password, not your regular Gmail password
2. Check that 2-Step Verification is enabled
3. Try generating a new App Password
4. Check if your Gmail account has any security restrictions

## Security Note

Remember to keep your App Password secure. It provides access to your Gmail account for sending emails.

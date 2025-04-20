# Email Setup Guide for Portfolio Contact Form

This guide will help you set up the email functionality for your portfolio contact form.

## Prerequisites

1. A Gmail account (or another email provider, but this guide focuses on Gmail)
2. Python 3.6+ installed on your system
3. Flask and other dependencies installed (see requirements.txt)

## Step 1: Configure Gmail for SMTP Access

If you're using Gmail, you'll need to:

1. Enable 2-Step Verification for your Google account:
   - Go to your Google Account > Security
   - Under "Signing in to Google," select 2-Step Verification and turn it on

2. Create an App Password:
   - Go to your Google Account > Security
   - Under "Signing in to Google," select App passwords
   - Select "Mail" as the app and "Other" as the device (name it "Portfolio Website")
   - Click "Generate"
   - Google will display a 16-character password - **save this password**

## Step 2: Set Environment Variables

For security, you should set your email and password as environment variables rather than hardcoding them.

### On Windows:

```
set EMAIL_ADDRESS=your-email@gmail.com
set EMAIL_PASSWORD=your-app-password
```

### On macOS/Linux:

```
export EMAIL_ADDRESS=your-email@gmail.com
export EMAIL_PASSWORD=your-app-password
```

Alternatively, you can directly edit the `app.py` file and replace:

```python
EMAIL_ADDRESS = os.environ.get('EMAIL_ADDRESS', 'your-email@gmail.com')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD', 'your-app-password')
```

with your actual email and app password:

```python
EMAIL_ADDRESS = 'your-email@gmail.com'  # Replace with your actual email
EMAIL_PASSWORD = 'your-app-password'    # Replace with your actual app password
```

**Note:** If you hardcode your credentials, make sure not to share your code publicly or commit it to a public repository.

## Step 3: Run the Application

1. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the Flask application:
   ```
   python app.py
   ```

3. Open your browser and go to:
   ```
   http://localhost:8000
   ```

## Step 4: Test the Contact Form

1. Navigate to the Contact page
2. Fill out the form with test information
3. Submit the form
4. You should see a success message, and an email should be sent to your configured email address

## Troubleshooting

If you encounter issues:

1. Check the console output for error messages
2. Verify your email and password are correct
3. Make sure your Gmail account has 2-Step Verification enabled and you're using an App Password
4. Check if your email provider has any additional security settings that might block SMTP access

## Deployment Considerations

When deploying to a production server:

1. Always use environment variables for sensitive information
2. Set `debug=False` in the Flask app for production
3. Consider using a production-ready WSGI server like Gunicorn
4. Set up proper error logging

## Security Notes

- Never expose your email password in client-side code
- Consider implementing rate limiting to prevent form spam
- Add CAPTCHA for additional protection against bots

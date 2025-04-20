# Deploying Your Portfolio Website on Render

This guide provides step-by-step instructions for deploying your portfolio website on Render's free static site hosting.

## Prerequisites

1. Your portfolio website code pushed to a GitHub repository
2. A Render account (free tier is sufficient)

## Step 1: Create a Render Account

1. Go to [render.com](https://render.com) and sign up for an account
2. Verify your email address
3. Connect your GitHub account when prompted

## Step 2: Create a New Static Site

1. From the Render dashboard, click the "New +" button in the top right
2. Select "Static Site" from the dropdown menu
3. Connect to your GitHub repository:
   - Select the repository containing your portfolio website
   - If you don't see your repository, you may need to configure repository access in your GitHub settings

4. Configure your static site:
   - **Name**: `portfolio-website` (or your preferred name)
   - **Branch**: `main` (or your default branch)
   - **Build Command**: Leave empty (no build step needed)
   - **Publish Directory**: `./` (root directory)
   - **Advanced Settings**: No changes needed

5. Click "Create Static Site"

## Step 3: Wait for Deployment

1. Render will automatically start deploying your website
2. You can monitor the deployment progress on the dashboard
3. Once complete, you'll see a "Live" status and a URL like:
   - `https://portfolio-website.onrender.com`

## Step 4: Test Your Deployed Website

1. Click on the provided URL to open your website
2. Test all pages and functionality:
   - Navigation between pages
   - Contact form submission
   - Chatbot functionality
   - Responsive design on different devices

## Step 5: Set Up Auto-Deployments (Already Configured)

Render automatically sets up continuous deployment:
- Any changes pushed to your GitHub repository will trigger a new deployment
- No additional configuration is needed

## Step 6: Custom Domain (Optional)

If you have your own domain name:

1. From your site's dashboard, click "Settings"
2. Scroll down to "Custom Domain"
3. Click "Add Custom Domain"
4. Enter your domain name and follow the instructions:
   - You'll need to add DNS records at your domain registrar
   - Render provides specific instructions for your domain

## Troubleshooting

If you encounter issues with your deployment:

1. **404 Errors**: Make sure all file paths are correct and relative
2. **Missing Assets**: Check that all assets (images, CSS, JS) are included in your repository
3. **Contact Form Issues**: Verify your Formspree endpoint is correct
4. **Deployment Failures**: Check the build logs for specific errors

## Updating Your Website

To update your website:

1. Make changes to your local repository
2. Commit and push to GitHub
3. Render will automatically deploy the changes
4. Wait for the deployment to complete (usually 1-2 minutes)

## Resources

- [Render Documentation](https://render.com/docs)
- [Render Static Site Documentation](https://render.com/docs/static-sites)
- [Render Custom Domain Documentation](https://render.com/docs/custom-domains)

from flask import Flask, request, jsonify, render_template, send_from_directory
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging

app = Flask(__name__,
            static_folder='static',
            template_folder='templates')

# Add routes for serving static files
@app.route('/Assets/<path:filename>')
def serve_assets(filename):
    return send_from_directory('Assets', filename)

@app.route('/static/<path:subpath>')
def serve_static(subpath):
    return send_from_directory('static', subpath)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Email configuration - CHANGE THIS PASSWORD AFTER TESTING
EMAIL_ADDRESS = os.environ.get('EMAIL_ADDRESS', 'gorulevishal984@gmail.com')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD')
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index.html')
def index_html():
    return render_template('index.html')

@app.route('/projects.html')
def projects():
    return render_template('projects.html')

@app.route('/skills.html')
def skills():
    return render_template('skills.html')

@app.route('/blogs.html')
def blogs():
    return render_template('blogs.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    try:
        # Get form data
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject', 'Contact Form Submission')
        message = request.form.get('message')

        # Validate form data
        if not name or not email or not message:
            logger.warning("Form submission missing required fields.")
            return jsonify({"success": False, "message": "Please fill in all required fields."}), 400

        # Log the form submission
        logger.info(f"Form submission received from {name} ({email})")

        # Create email content
        email_content = f"""
        <html>
        <body>
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Message:</strong></p>
            <p>{message}</p>
        </body>
        </html>
        """

        # Send email
        try:
            send_email(name, email, subject, email_content)
        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")
            return jsonify({"success": False, "message": "Failed to send email. Please try again later."}), 500

        # Return success response
        return jsonify({"success": True, "message": "Your message has been sent successfully!"})

    except Exception as e:
        logger.error(f"Error processing form submission: {str(e)}")
        return jsonify({"success": False, "message": "An unexpected error occurred. Please try again later."}), 500

def send_email(sender_name, sender_email, subject, html_content):
    """Send email using SMTP"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = f"{sender_name} <{EMAIL_ADDRESS}>"
        msg['To'] = EMAIL_ADDRESS
        msg['Subject'] = f"Portfolio Contact: {subject}"
        
        # Add sender's email to the body
        html_content = f"<p><strong>From:</strong> {sender_name} ({sender_email})</p>" + html_content
        
        # Attach HTML content
        msg.attach(MIMEText(html_content, 'html'))
        
        # Connect to SMTP server
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        
        # Send email
        server.send_message(msg)
        server.quit()
        
        logger.info(f"Email sent successfully to {EMAIL_ADDRESS}")
        return True
    
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        raise

if __name__ == '__main__':
    # Run the Flask app
    app.run(debug=True, host='0.0.0.0', port=8000)

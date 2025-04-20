#!/bin/bash
echo "Starting Portfolio Website with Email Functionality..."

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
else
    echo "Virtual environment not found. Creating one..."
    python -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
fi

# Set environment variables (replace with your actual email and password)
export EMAIL_ADDRESS=your-email@gmail.com
export EMAIL_PASSWORD=your-app-password

# Run the Flask app
python app.py

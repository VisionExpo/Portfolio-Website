#!/bin/bash
echo "Starting Portfolio Website with Email Functionality..."

# Activate virtual environment if it exists
if [ -d "venv" ]; then
    source venv/bin/activate
else
    echo "Virtual environment not found. Creating one..."
    python -m venv venv
    source venv/bin/activate
    pip install flask
fi

# Set environment variables
export EMAIL_PASSWORD=igkj ktew exgc clqt

# Run the Flask app
python app_simple.py

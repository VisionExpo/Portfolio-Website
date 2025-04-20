@echo off
echo Starting Portfolio Website with Email Functionality...

REM Activate virtual environment if it exists
if exist venv\Scripts\activate (
    call venv\Scripts\activate
) else (
    echo Virtual environment not found. Creating one...
    python -m venv venv
    call venv\Scripts\activate
    pip install flask
)

REM Set environment variables
set EMAIL_PASSWORD=10621071

REM Run the Flask app
python app_simple.py

pause

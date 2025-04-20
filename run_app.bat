@echo off
echo Starting Portfolio Website with Email Functionality...

REM Activate virtual environment if it exists
if exist venv\Scripts\activate (
    call venv\Scripts\activate
) else (
    echo Virtual environment not found. Creating one...
    python -m venv venv
    call venv\Scripts\activate
    pip install -r requirements.txt
)

REM Set environment variables (replace with your actual email and password)
set EMAIL_ADDRESS=your-email@gmail.com
set EMAIL_PASSWORD=your-app-password

REM Run the Flask app
python app.py

pause

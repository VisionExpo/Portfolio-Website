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

REM Set environment variables with your email
set EMAIL_ADDRESS=gorulevishal984@gmail.com

REM Prompt for password securely
echo Please enter your app password (it will not be displayed):
set /p EMAIL_PASSWORD=

REM Run the Flask app
python app.py

pause

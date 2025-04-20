@echo off
echo ========================================================
echo Portfolio Website with Email Functionality
echo ========================================================
echo.

REM Activate virtual environment if it exists
if exist venv\Scripts\activate (
    call venv\Scripts\activate
) else (
    echo Creating virtual environment...
    python -m venv venv
    call venv\Scripts\activate
    echo Installing required packages...
    pip install flask
)

REM Set environment variables
set EMAIL_ADDRESS=gorulevishal984@gmail.com
set EMAIL_PASSWORD=igkjktewexgcclqt

echo.
echo Email configuration:
echo - Using email: %EMAIL_ADDRESS%
echo - App Password is set (16 characters)
echo.
echo If you need to change the App Password:
echo 1. Edit this file (run_portfolio_with_email.bat)
echo 2. Update the EMAIL_PASSWORD value
echo 3. Save the file and run it again
echo.
echo Starting the server...
echo.

REM Run the Flask app
python app_simple.py

pause

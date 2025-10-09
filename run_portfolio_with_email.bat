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
REM Set environment variables before running this script or in your system environment
REM Example:
REM   set EMAIL_ADDRESS=your_email@gmail.com
REM   set EMAIL_PASSWORD=your_app_password

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

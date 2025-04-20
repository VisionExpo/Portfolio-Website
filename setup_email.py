import os
import getpass
import json
import base64
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

def generate_key(password, salt):
    """Generate a key from password and salt"""
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
    )
    return base64.urlsafe_b64encode(kdf.derive(password.encode()))

def encrypt_password(password, key):
    """Encrypt password using Fernet"""
    f = Fernet(key)
    return f.encrypt(password.encode()).decode()

def setup_email_config():
    """Set up email configuration"""
    print("Email Configuration Setup")
    print("========================")
    print("This script will help you set up your email configuration securely.")
    print("Your password will be encrypted and stored locally.")
    print()
    
    # Get email address
    email = input("Enter your email address [gorulevishal984@gmail.com]: ") or "gorulevishal984@gmail.com"
    
    # Get password securely (won't be displayed)
    password = getpass.getpass("Enter your email password (App Password for Gmail): ")
    
    # Get a master password to encrypt the email password
    master_password = getpass.getpass("Create a master password to encrypt your email password: ")
    
    # Generate a random salt
    salt = os.urandom(16)
    
    # Generate key from master password and salt
    key = generate_key(master_password, salt)
    
    # Encrypt the email password
    encrypted_password = encrypt_password(password, key)
    
    # Create config dictionary
    config = {
        "email": email,
        "encrypted_password": encrypted_password,
        "salt": base64.b64encode(salt).decode()
    }
    
    # Save config to file
    with open("email_config.json", "w") as f:
        json.dump(config, f)
    
    print("\nEmail configuration saved successfully!")
    print("To use this configuration, run your app with:")
    print("python app.py")
    print("\nIMPORTANT: Keep your master password safe. You'll need it to decrypt your email password.")

if __name__ == "__main__":
    try:
        from cryptography.fernet import Fernet
        from cryptography.hazmat.primitives import hashes
        from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
    except ImportError:
        print("The cryptography package is required for this script.")
        print("Please install it with: pip install cryptography")
        exit(1)
    
    setup_email_config()

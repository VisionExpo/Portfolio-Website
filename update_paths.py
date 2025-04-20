import os
import re

def update_file_paths(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Update CSS file paths
    content = content.replace('href="styles.css"', 'href="../static/css/styles.css"')
    content = content.replace('href="chatbot.css"', 'href="../static/css/chatbot.css"')
    
    # Update JS file paths
    content = content.replace('src="animations.js"', 'src="../static/js/animations.js"')
    content = content.replace('src="chatbot.js"', 'src="../static/js/chatbot.js"')
    
    # Update internal links to HTML files
    content = content.replace('href="index.html"', 'href="index.html"')
    content = content.replace('href="projects.html"', 'href="projects.html"')
    content = content.replace('href="skills.html"', 'href="skills.html"')
    content = content.replace('href="blogs.html"', 'href="blogs.html"')
    content = content.replace('href="contact.html"', 'href="contact.html"')
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"Updated paths in {file_path}")

# Update all HTML files in the templates directory
template_dir = 'templates'
for filename in os.listdir(template_dir):
    if filename.endswith('.html'):
        file_path = os.path.join(template_dir, filename)
        update_file_paths(file_path)

print("All file paths updated successfully!")

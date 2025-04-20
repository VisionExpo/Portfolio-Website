import os

def fix_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Fix CSS and JS paths
    content = content.replace('../static/css/styles.css', '../static/css/styles.css')
    content = content.replace('../static/css/chatbot.css', '../static/css/chatbot.css')
    content = content.replace('../static/js/animations.js', '../static/js/animations.js')
    content = content.replace('../static/js/chatbot.js', '../static/js/chatbot.js')
    
    # Fix image paths
    content = content.replace('src="Assets/', 'src="../Assets/')
    content = content.replace('href="Assets/', 'href="../Assets/')
    
    # Fix internal links
    content = content.replace('href="index.html"', 'href="index.html"')
    content = content.replace('href="projects.html"', 'href="projects.html"')
    content = content.replace('href="skills.html"', 'href="skills.html"')
    content = content.replace('href="blogs.html"', 'href="blogs.html"')
    content = content.replace('href="contact.html"', 'href="contact.html"')
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"Fixed paths in {file_path}")

# Fix all HTML files in the templates directory
template_dir = 'templates'
for filename in os.listdir(template_dir):
    if filename.endswith('.html'):
        file_path = os.path.join(template_dir, filename)
        fix_html_file(file_path)

print("All file paths fixed successfully!")

import http.server
import socketserver
import os
import urllib.parse

PORT = 8000

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        
        # Handle root path
        if path == '/':
            self.path = '/templates/index.html'
        # Handle direct HTML requests
        elif path.endswith('.html') and not path.startswith('/templates/'):
            self.path = f'/templates{path}'
        # Handle other paths
        elif not (path.startswith('/static/') or path.startswith('/templates/') or path.startswith('/Assets/')):
            # Check if it's a file that should be in static
            if path.endswith('.css'):
                self.path = f'/static/css{path}'
            elif path.endswith('.js'):
                self.path = f'/static/js{path}'
        
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

Handler = MyHttpRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()

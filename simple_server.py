import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print(f"Open http://localhost:{PORT}/templates/index.html in your browser")
    httpd.serve_forever()

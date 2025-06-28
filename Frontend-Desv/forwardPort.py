import requests
import http.server
import socketserver

# Get public IPv4
ipv4 = requests.get("https://api.ipify.org").text
print("Public IPv4:", ipv4)

# Get public IPv6
ipv6 = requests.get("https://api64.ipify.org").text
print("Public IPv6:", ipv6)

PORT = "http://["+ ipv6 + "]:5173"
print(PORT)
FORWARD_TO = "http://yayaOneTwo.me"
print(FORWARD_TO)
class Proxy(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        r = requests.get(FORWARD_TO + self.path)
        self.send_response(r.status_code)
        for header in r.headers:
            self.send_header(header, r.headers[header])
        self.end_headers()
        self.wfile.write(r.content)

handler = Proxy
httpd = socketserver.TCPServer(("", PORT), handler)
print(f"Proxy server running on port {PORT} → forwarding to {FORWARD_TO}")
httpd.serve_forever()


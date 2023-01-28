# Browser DNS Lookup

When a user types a URL into their browser and presses enter, the browser needs to determine which server on the Internet to connect to. To do this, it performs a DNS lookup to find the IP address of the server hosting the website associated with the domain name entered by the user.

1. The browser first checks its local system cache to see if the IP address is already stored.
2. If it is not, the browser sends a request to the IP address of the DNS server to perform a mapping of the domain name to an IP address.
3. The DNS server receives the request and checks its own records to find the IP address associated with the domain name.
4. The DNS server then replies to the browser with the IP address.
5. Once the browser receives the IP address, it tries to make an HTTP request connection to the IP.
6. If the connection is successful, the server returns an HTTP response to the browser.

Note: If the user directly types the IP address into the browser, the browser will not need to perform a DNS lookup.

# HTTP Request to Google Search

1. The user types "www.google.com" into their browser's address bar and presses enter.

2. The browser checks its local system cache to see if it has the IP address of the "www.google.com" server stored.

3. If the IP address is not in the cache, the browser sends a request to the IP address of the DNS server to resolve the domain name "www.google.com" to an IP address.

4. The DNS server receives the request and checks its records to find the IP address associated with the domain name "www.google.com".

5. The DNS server then replies to the browser with the IP address of the "www.google.com" server.

6. The browser receives the IP address and uses it to open a connection to the "www.google.com" server.

7. The browser sends an HTTP request to the server, asking for the webpage associated with the URL "www.google.com"

8. The request includes the method ("GET" in this case), the path ("/"), and any additional headers or parameters specified by the user (e.g. search query).

9. The server receives the request and processes it.

10. The server returns an HTTP response to the browser, which includes the status code, headers, and the requested content (the Google search page).

11. The browser receives the response and renders the content (the Google search page) on the user's screen.

12. If the user submits a search query, it will repeat the steps 7-11 with additional parameters like search query and will return the search results page.

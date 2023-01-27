# Browser DNS Lookup

When a user types a URL into their browser and presses enter, the browser needs to determine which server on the Internet to connect to. To do this, it performs a DNS lookup to find the IP address of the server hosting the website associated with the domain name entered by the user.

1. The browser first checks its local system cache to see if the IP address is already stored.
2. If it is not, the browser sends a request to the IP address of the DNS server to perform a mapping of the domain name to an IP address.
3. The DNS server receives the request and checks its own records to find the IP address associated with the domain name.
4. The DNS server then replies to the browser with the IP address.
5. Once the browser receives the IP address, it tries to make an HTTP request connection to the IP.
6. If the connection is successful, the server returns an HTTP response to the browser.

Note: If the user directly types the IP address into the browser, the browser will not need to perform a DNS lookup.

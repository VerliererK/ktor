# ktor
Aria2, AriaNg and Filebrowser, designed to provide a lightweight solution for file downloading and management.

## Usage

### Build
```bash
docker build -t your-image-name .
```

### Run

```bash
docker run -d -p 80:80 your-image-name
```

### Access
Navigate to http://localhost in your browser.


## AriaNg Settings
The default Aria2 RPC port is 443. If you are running it locally, please change this to 80 for proper functionality.


## Nginx Configuration

### Ports
- 80: The port on which Nginx serves.

### Reverse Proxy
- /jsonrpc: Proxies to Aria2's RPC interface (port 6800).
- /files: Proxies to FileBrowser's interface (port 8080).


## References

- [Aria2](https://aria2.github.io/)
- [AriaNg](https://github.com/mayswind/AriaNg)
- [FileBrowser](https://github.com/filebrowser/filebrowser)

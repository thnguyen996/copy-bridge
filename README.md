# CopyBridge

A lightweight text transfer tool that lets you copy text between devices.

## How to Use

1. **Deploy the relay server** (required):
   - Go to [Glitch.com](https://glitch.com) and sign in
   - Create a new project → "Import from GitHub" 
   - Or create a "New Project" → "hello-express"
   - Replace the server code with the contents of `server.js`
   - Create a `package.json` with: `{"dependencies":{"ws":"^8.16.0"}}`
   - Copy your server URL (e.g., `https://your-project.glitch.me`)

2. **Open CopyBridge**:
   - Go to: `https://thnguyen996.github.io/copybridge?server=wss://YOUR-SERVER.glitch.me/`
   - Replace `YOUR-SERVER` with your deployed server URL

3. **Use**:
   - One device: Click "Create Room" → get 4-char code
   - Other device: Enter code → "Join Room"
   - Send text between devices

## Deployment

### Frontend (GitHub Pages)
```bash
# Already deployed at: https://thnguyen996.github.io/copybridge
```

### Server (Glitch - Free)
1. Go to https://glitch.com
2. Create new project → "hello-express"
3. Edit `package.json`:
```json
{
  "name": "copybridge",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "ws": "^8.16.0"
  }
}
```
4. Replace `server.js` with the contents of this repo's `server.js`
5. Copy your Glitch URL

### Using Custom Server
Add `?server=WSS://YOUR-SERVER/` to the URL.

## Tech Stack

- Pure HTML/CSS/JavaScript (no build required)
- WebSocket relay (ws library)
- Works with storage-blocked browsers

## License

MIT

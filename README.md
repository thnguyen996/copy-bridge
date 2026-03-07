# CopyBridge

A lightweight, peer-to-peer text transfer tool that allows you to copy text from a personal device to a company device without any data being stored on servers.

## Why CopyBridge?

Many companies block access to GenAI websites. CopyBridge lets you:
1. Use GenAI on your personal device
2. Copy the response
3. Transfer it to your company device via P2P connection
4. No data is stored - everything transfers directly between browsers

## Features

- **Peer-to-peer** - Data never touches any server
- **No accounts** - No login required
- **Privacy-first** - No data storage, no tracking
- **Simple** - 4-character room code
- **Bidirectional** - Either device can send or receive

## How It Works

1. **Device A** (personal): Click "Create Room" to generate a 4-character code
2. **Device B** (company): Enter the code and click "Join Room"
3. Once connected, paste text and click "Send"
4. Recipient clicks "Copy to Clipboard"

## Tech Stack

- Pure HTML/CSS/JavaScript (no build required)
- [PeerJS](https://peerjs.com/) for WebRTC peer-to-peer connections
- Hosted on GitHub Pages

## Deployment

```bash
# Clone your repo
git clone https://github.com/yourusername/copybridge.git
cd copybridge

# Push to GitHub, then enable GitHub Pages:
# Settings > Pages > Deploy from main branch
```

## Security

- WebRTC data channels are encrypted
- Room codes are session-only (generated fresh each time)
- No data is stored on any server
- The signaling server only brokers the initial connection

## License

MIT

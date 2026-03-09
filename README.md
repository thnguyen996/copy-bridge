# CopyBridge

A lightweight text transfer tool that lets you copy text between devices using MQTT messaging.

## How to Use

1. **Open CopyBridge**: https://thnguyen996.github.io/copybridge

2. **Use**:
   - Device A: Click "Create Room" → get 4-character code
   - Device B: Enter the code → "Join Room"
   - Connected! Send text between devices

## Features

- **No server needed** - Uses public MQTT broker
- **No accounts** - No login required
- **Simple** - 4-character room code
- **Bidirectional** - Either device can send or receive
- **Works with restricted browsers** - No storage required

## Tech Stack

- Pure HTML/CSS/JavaScript (no build required)
- MQTT over WebSocket (EMQX public broker)
- Works with storage-blocked browsers and firewalls

## How It Works

1. Device A creates a room with a unique 4-character code
2. Device B joins using that code
3. Both devices connect to the same MQTT topic
4. Text messages are sent via the MQTT broker
5. Data passes through but is never stored

## Deployment

```bash
# Frontend deployed at: https://thnguyen996.github.io/copybridge
# To deploy your own copy:
git clone https://github.com/thnguyen996/copybridge.git
# Push to your own GitHub repo
# Enable GitHub Pages in Settings > Pages
```

## Security

- Room codes are session-only (generated fresh each time)
- Messages pass through MQTT broker but are not stored
- Each session uses a unique peer ID

## License

MIT

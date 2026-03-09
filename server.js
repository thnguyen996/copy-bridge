const http = require('http');
const WebSocket = require('ws');
const url = require('url');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const rooms = new Map();

wss.on('connection', (ws, req) => {
  const { room } = url.parse(req.url, true).query;
  
  if (!room) {
    ws.close();
    return;
  }

  if (!rooms.has(room)) {
    rooms.set(room, new Set());
  }

  const roomClients = rooms.get(room);
  roomClients.add(ws);

  roomClients.forEach(client => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'peer-join' }));
    }
  });

  ws.on('message', (data) => {
    const msg = JSON.parse(data);
    
    roomClients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(msg));
      }
    });
  });

  ws.on('close', () => {
    roomClients.delete(ws);
    if (roomClients.size === 0) {
      rooms.delete(room);
    } else {
      roomClients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'peer-leave' }));
        }
      });
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

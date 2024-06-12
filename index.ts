const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors')

const app = express();
const PORT = 9000;

app.use(cors());

// Create HTTP server
const server = app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

// Initialize PeerJS server
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/'
});

// Use PeerJS server with Express
app.use('/peerjs', peerServer);
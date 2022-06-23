import { WebSocketServer } from 'ws';
import connectionHandler from './handlers/websocket';

const { WEBSOCKET_PORT = 8080 } = process.env;

const server = new WebSocketServer({ port: Number(WEBSOCKET_PORT) });

server.on('connection', connectionHandler);

server.on('listening', () => {
  console.log(`Start websocket server on the ${WEBSOCKET_PORT} port!`)
});

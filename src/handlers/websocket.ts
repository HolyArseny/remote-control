import { Duplex, DuplexOptions } from 'stream';
import { createWebSocketStream, WebSocket } from 'ws';
import commandsController from '../commands/index';
import { ControllerParams } from '../declarations/commands';

const closeHandler = (stream: Duplex): void => {
  stream.destroy();
  console.log('Connection closed successfully!');
};

const connectionHandler = (ws: WebSocket): void => {
  const options: DuplexOptions = { encoding: 'utf8', decodeStrings: false };
  const duplex = createWebSocketStream(ws, options);

  duplex.on('data', async (data: Buffer) => {
    const stringified: string = data.toString();
    const [command, ...values]: Array<string> = stringified.split(' ');
    const params: ControllerParams = { values, command };
    const controllerResult: string = await commandsController(params);
    const result: string = [command, controllerResult, '\0'].join(' ');
    duplex.write(result);
  });

  ws.on('close', () => closeHandler(duplex));
};

export default connectionHandler;
import { createReadStream } from 'fs';
import { resolve, dirname } from 'path';
import { createServer, IncomingMessage, ServerResponse} from 'http';
import { pipeline } from 'stream/promises';

const { HTTP_PORT = '3000' } = process.env;

const httpServer = createServer(async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  const __dirname = resolve(dirname(''));
  const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
  const readable = createReadStream(file_path);
  const errorHandler = (error: any): void => {
    res.writeHead(404);
    res.end(JSON.stringify(error));
  };
  try {
    await pipeline( readable, res );
  } catch (error) {
    errorHandler(error);
  }
});

httpServer.listen(HTTP_PORT, () => {
  console.log(`Start static http server on the ${HTTP_PORT} port!`);
});

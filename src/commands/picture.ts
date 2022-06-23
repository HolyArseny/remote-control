import Jimp from 'jimp';
import robot from 'robotjs';
import { ControllerParams } from '../declarations/commands';
import { changeToRgba, isAvailableScreenshotCoords } from '../helpers/picture';
import { AvailableCoords } from '../declarations/picture';

const prnt_scrn = async ({ coords: { x, y } }: ControllerParams): Promise<string> => {
  const size: number = 200;
  const half = size / 2;
  const leftEdge: number = x - half;
  const topEdge: number = y - half;
  const { left, top }: AvailableCoords =
    isAvailableScreenshotCoords({ leftEdge, topEdge });
  const { image, width, height } =
    await robot.screen.capture(left, top, size, size);
  const rgbaBitmap: Array<number> = changeToRgba(image);
  const jimp = await new Jimp({ data: new Uint8Array(rgbaBitmap), width, height});
  const buffer: Buffer = await jimp.getBufferAsync(Jimp.MIME_PNG);
  return buffer.toString('base64');
};

export default { prnt_scrn };
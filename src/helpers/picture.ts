import { screenshotParams, AvailableCoords } from '../declarations/picture';

const colorsCount = 4;
export const changeToRgba = (gbraImage: Array<number>): Array<number> => {
  const rgbaBitmap = [];
  for(let i = 0; i < gbraImage.length; i += colorsCount) {
    const rgba = { r: i + 2, g: i + 1, b: i, a: i + 3 };
    const rgbaDirection = [
      gbraImage[rgba.r],
      gbraImage[rgba.g],
      gbraImage[rgba.b],
      gbraImage[rgba.a]
    ];
    rgbaBitmap.push(...rgbaDirection);
  }
  return rgbaBitmap;
};

export const isAvailableScreenshotCoords =
  ({ leftEdge, topEdge }: screenshotParams): AvailableCoords => {
  const startCoord = 0;
  const isAvailableTop = topEdge > startCoord;
  const isAvailableLeft = leftEdge > startCoord;
  return {
    left: isAvailableLeft ? leftEdge : startCoord,
    top: isAvailableTop ? topEdge : startCoord,
  };
};

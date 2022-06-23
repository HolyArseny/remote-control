import robot from 'robotjs';
import { ControllerParams, Coords } from '../declarations/commands';
import { sum, subtract, transformToNumber } from '../helpers/numbers';

const mouse_up = ({ coords: { x, y }, values }: ControllerParams): void => {
  const [coord] = transformToNumber(values);
  const nextYPos = subtract(y, coord);
  robot.moveMouse(x, nextYPos);
};

const mouse_down = ({ coords: { x, y }, values }: ControllerParams): void => {
  const [ coord ] = transformToNumber(values);
  const nextYPos = sum(y, coord);
  robot.moveMouse(x, nextYPos);
};

const mouse_right = ({ coords: { x, y }, values }: ControllerParams): void => {
  const [ coord ] = transformToNumber(values);
  const nextXPos = sum(x, coord);
  robot.moveMouse(nextXPos, y);
};

const mouse_left = ({ coords: { x, y }, values }: ControllerParams): void => {
  const [ coord ] = transformToNumber(values);
  const nextXPos = subtract(x, coord);
  robot.moveMouse(nextXPos, y);
};

const mouse_position = ({ coords }: ControllerParams): string => {
  const { x, y }: Coords = coords;
  return `${x},${y}`;
};

export default { mouse_up, mouse_down, mouse_right, mouse_left, mouse_position };
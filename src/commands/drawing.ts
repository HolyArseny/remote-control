import robot from 'robotjs';
import { ControllerParams } from '../declarations/commands';
import { transformToNumber } from '../helpers/numbers';

const drawLine = (x: number, y: number) => {
  robot.dragMouse(x, y);
  robot.mouseToggle('down', 'left');
};

const draw_rectangle = ({coords, values }: ControllerParams): void => {
  const [ width, height ] = transformToNumber(values);
  const {x, y} = coords;
  const speed = 2;
  for (let i = 0; i < width; i += speed) {
    const nextXPos = x + i;
    const nextYPos = y;
    drawLine(nextXPos, nextYPos);
  }
  for (let i = 0; i < height; i += speed) {
    const nextXPos = x + width;
    const nextYPos = y + i;
    drawLine(nextXPos, nextYPos);
  }
  for (let i = 0; i < width; i += speed) {
    const nextXPos = (x + width) - i;
    const nextYPos = y + height;
    drawLine(nextXPos, nextYPos);
  }
  for (let i = 0; i < height; i += speed) {
    const nextXPos = x;
    const nextYPos = (y + height) - i;
    drawLine(nextXPos, nextYPos);
  }
  robot.mouseToggle('up', 'left');
};

const draw_square = ({ coords, values}: ControllerParams): void => {
  const [ width ] = transformToNumber(values);
  const {x, y} = coords;
  const speed = 2;
  for (let i = 0; i < width; i += speed) {
    const nextXPos = x + i;
    const nextYPos = y;
    drawLine(nextXPos, nextYPos);
  }
  for (let i = 0; i < width; i += speed) {
    const nextXPos = x + width;
    const nextYPos = y + i;
    drawLine(nextXPos, nextYPos);
  }
  for (let i = 0; i < width; i += speed) {
    const nextXPos = (x + width) - i;
    const nextYPos = y + width;
    drawLine(nextXPos, nextYPos);
  }
  for (let i = 0; i < width; i += speed) {
    const nextXPos = x;
    const nextYPos = y + width - i;
    drawLine(nextXPos, nextYPos);
  }
  robot.mouseToggle('up', 'left');
};

const draw_circle = ({coords, values}: ControllerParams): void => {
  const [ radius ] = transformToNumber(values);
  const {x, y} = coords;
  const drawSpeed = 0.03;
  for (let i = 0; i <= Math.PI * 2; i += drawSpeed) {
    const directionX = (x - radius) + (radius * Math.cos(i));
    const directionY = y + (radius * Math.sin(i));
    robot.dragMouse(directionX, directionY);
    robot.mouseToggle('down', 'left');
  }
  robot.mouseToggle('up', 'left');
};

export default { draw_rectangle, draw_square, draw_circle };
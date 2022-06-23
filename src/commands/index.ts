import robot from 'robotjs';
import drawing from './drawing';
import mouseControl from './mouseControl';
import picture from './picture';
import { ControllerParams, commandsMap, Coords } from '../declarations/commands';

const commandsMap: commandsMap = { ...mouseControl, ...drawing, ...picture };

const commandsController = ({ command, values }: ControllerParams) => {
  const coords: Coords = robot.getMousePos();
  return commandsMap[command]({ coords, values });
};

export default commandsController;

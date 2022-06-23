export interface Coords {
  'x': number;
  'y': number;
};

export interface ControllerParams {
  values: Array<string>;
  command: string;
  coords?: any;
};

export interface commandsMap {
  [prop: string]: any;
};

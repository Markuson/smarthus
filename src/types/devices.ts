import { genericObject } from "./general";

export type deviceTypeType =
  | 'TRADFRI control outlet'
  | 'DimableLight'
  | 'RGBLight'
  | 'AutoLight'
  | 'THSensor'
  | 'THPSensor';

export type deviceScheduleType = {
  active: boolean;
  on: string;
  off: string;
  days: 0 | 1 | 2 | 3 | 4 | 5 | 6[];
}
export type deviceProperty =
  | 'state'
  | 'brightness'
  | 'color_temp'
  | 'color'
  | 'color_xy';

export type deviceLogs = {
  id: string;
  tlog: number[];
  hlog: number[];
  plog?: number[];
};

export type deviceDataType = {
  state: 'ON' | 'OFF';
  linkquality: number;
  brightness: number;
  color?: {
    hue: number;
    saturation: number;
    x: 0.4967;
    y: number;
  };
  color_mode?: string;
  color_temp?: number;
  power_on_behavior?: string;
  temperature?: number;
  humidity?: number;
  pressure?: number;
  logs?: deviceLogs;
  battery?: number;
};

export type deviceFeaturesType = {
  access: number;
  description: string;
  name: deviceProperty;
  property: deviceProperty;
  type: 'binary' | 'numeric';
  value_off?: 'OFF';
  value_on?: 'ON';
  value_toggle?: 'TOGGLE';
  value_max?: number;
  value_min?: number;
  presets?: genericObject[];
  features?: genericObject[];
}[];

export type deviceType = {
  name: string;
  label: string;
  ieee_address: string;
  features: deviceFeaturesType;
  data: deviceDataType;
};
export type devicesList = deviceType[];

export type groupType = {
  name: string;
  id: number;
  members: {
    endpoint: number;
    ieee_address: string;
    name: string;
  }[];
  scenes: {
    id: 0;
    name: 'menjadorOn';
  }[];
};

export type groupList = groupType[];

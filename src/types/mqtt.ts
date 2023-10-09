import {deviceScheduleType, devicesList, groupList} from './devices';

export type mqttAction = 'set' | 'rename' | 'retrieve' | 'shcedule';

export type mqttTopic = 'smarthusOut' | 'smarthusIn';

export interface mqttRename {
  label: string;
}

export interface mqttToggle {
  state: 'ON' | 'OFF';
}

export interface mqttLights {
  brightness?: number;
  color_temp?: number;
  color_xy?: {x: number; y: number};
}

export interface mqttSchedule extends deviceScheduleType {}

export type mqttReqData = mqttRename | mqttToggle | mqttSchedule | mqttLights;

export type mqttResData = {
  devices: devicesList;
  groups: groupList;
  timestamp: string;
};

import {deviceScheduleType, devicesList, groupList} from './devices';

export type mqttAction = 'set' | 'rename' | 'retrieve' | 'shcedule';

export type mqttTopic = 'smarthusOut' | 'smarthusIn';

export interface mqttRename {
  label: string;
}

export interface mqttToggle {
  state: 'ON' | 'OFF';
}

export interface mqttSchedule extends deviceScheduleType {}

export type mqttReqData = mqttRename | mqttToggle | mqttSchedule;

export type mqttResData = {
  devices: devicesList;
  groups: groupList;
  timestamp: string;
};

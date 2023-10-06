import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {mqttResData} from '../../types/mqtt';
import {deviceType, groupType} from '../../types/devices';
import {RootState} from '../config/store';

const initialState = {devices: [], groups: [], timestamp: ''};

export const devicesSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDevicesList: (state: RootState, action: PayloadAction<mqttResData>) => {
      action.payload.devices.forEach((device: deviceType) => {
        const deviceIndex = state.devices.findIndex(
          (_device: deviceType) => _device.name === device.name,
        );
        deviceIndex === -1
          ? state.devices.push(device)
          : (state.devices[deviceIndex] = {
              ...state.devices[deviceIndex],
              ...device,
            });
      });
      action.payload.groups.forEach((group: groupType) => {
        const groupIndex = state.groups.findIndex(
          (_group: groupType) => _group.name === group.name,
        );
        groupIndex === -1
          ? state.groups.push(group)
          : (state.groups[groupIndex] = {
              ...state.groups[groupIndex],
              ...group,
            });
      });
    },
  },
});

export const {setDevicesList} = devicesSlice.actions;
export const devicesReducer = devicesSlice.reducer;

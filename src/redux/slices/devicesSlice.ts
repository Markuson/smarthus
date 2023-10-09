import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {mqttResData} from '../../types/mqtt';
import {deviceType, groupType} from '../../types/devices';

const initialState: mqttResData = {devices: [], groups: [], timestamp: ''};

export const devicesSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setDevicesList: (state, action: PayloadAction<mqttResData>) => {
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
      state.timestamp = action.payload.timestamp;
    },
  },
});

export const {setDevicesList} = devicesSlice.actions;
export const devicesReducer = devicesSlice.reducer;

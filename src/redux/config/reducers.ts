import {combineReducers} from '@reduxjs/toolkit';
import {devicesSlice, devicesReducer} from '../slices/devicesSlice';

export const rootReducer = combineReducers({
  [devicesSlice.name]: devicesReducer,
});

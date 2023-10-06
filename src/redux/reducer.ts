export const initialState: any = {
  homeNetwork: 'undefined',
  mqttClient: undefined,
  notAtHome: true,
  ssid: '',
  tradfri: {
    data: [],

  },
  data: {
    tradfri: [],
    sensors: [],
  },
  timestamp: '',
  groups: [],
  greenhouse: {},
};

export const reducers = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_ACTUAL_SSID':
      return {
        ...state,
        ssid: action.payload,
      };
    case 'SET_HOME_NETWORK':
      return {
        ...state,
        homeNetwork: action.payload,
      };
    case 'SET_MQTT_CLIENT':
      return {
        ...state,
        mqttClient: action.payload,
      };
    case 'SET_NOT_AT_HOME':
      return {
        ...state,
        notAtHome: action.payload,
      };
    case 'SET_TRADFRI_DATA':
      return {
        ...state,
        tradfri: action.payload,
      };
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'SET_TIME':
      return {
        ...state,
        timestamp: action.payload,
      };
    default:
      return state;
  }
};

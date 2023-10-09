/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect, useState} from 'react';
import {Alert, AppState, View} from 'react-native';
import {addEventListener as networkListener} from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
// import {RootSiblingParent} from 'react-native-root-siblings';
import {ConnectionState} from '@aws-amplify/pubsub';
import LocationPermission from '../utils/Permisions';
import {mqttResData} from '../types/mqtt';
import {MQTTinit, MQTTsubscribe, MQTTupdate} from './client';
import {usePrevious} from '../hooks/usePrevious';
import {setDevicesList} from '../redux/slices/devicesSlice';

interface Props {
  children: JSX.Element;
}

function MQTTWraper({children}: Props) {
  // const appState = useRef(AppState.currentState);
  const dispatch = useDispatch();
  // const ssid = useSelector((state: RootState) => state.ssid);
  // const homeNetwork = useSelector((state: RootState) => state.homeNetwork);
  const [connectionState, setConnectionState] = useState<ConnectionState>(
    ConnectionState.Disconnected,
  );
  const prevConnectionState = usePrevious(connectionState);

  useEffect(() => {
    (async () => {
      let checkPermission = await LocationPermission.request();
      if (checkPermission === false) {
        Alert.alert(
          'Permission needed',
          'Permission to access is needed for smarthus app to work! Restart app and allow us to access the location.',
        );
      }
      console.log('INIT MQTT');
      await MQTTinit();
      await MQTTsubscribe(mqttMessage, connectionListener);
      await MQTTupdate();
    })();
  }, []);

  useEffect(() => {
    console.log('PREV CONNECTION STATE IS: ', prevConnectionState);
    if (
      connectionState === ConnectionState.Disconnected &&
      prevConnectionState !== undefined &&
      prevConnectionState !== connectionState
    ) {
      console.log('SUBSCRIBE AGAIN');
      MQTTsubscribe(mqttMessage, connectionListener).then(MQTTupdate);
    }
  }, [connectionState]);

  // useEffect(() => {
  //   ssid === homeNetwork && homeNetwork !== undefined
  //     ? dispatch({
  //         type: 'SET_NOT_AT_HOME',
  //         payload: false,
  //       })
  //     : dispatch({
  //         type: 'SET_NOT_AT_HOME',
  //         payload: true,
  //       });
  // }, [ssid, homeNetwork]);

  // const networkListener = networkState => {
  //   if (ssid !== networkState?.details?.ssid) {
  //     dispatch({
  //       type: 'SET_ACTUAL_SSID',
  //       payload: networkState?.details?.ssid,
  //     });
  //   }
  // };

  const mqttMessage = (message: mqttResData) => {
    dispatch(setDevicesList(message));
  };

  const connectionListener = (connection: ConnectionState) => {
    console.log('CONECTION STATE: ', connection);
    setConnectionState(connection);
  };

  // eslint-disable-next-line react-native/no-inline-styles
  return <View style={{flex: 1}}>{children}</View>;
}

export default MQTTWraper;

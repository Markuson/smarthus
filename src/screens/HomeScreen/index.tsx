import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  View,
  Vibration,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/config/store';
import GlobalStyles from '../../styles/GlobalStyles';
import Loading from '../../components/atoms/Loading';
import TempCard from '../../components/molecules/Cards/Temperature';
import WeatherCard from '../../components/molecules/Cards/Weather';
import LightCard from '../../components/molecules/Cards/Light';
import prompt from 'react-native-prompt-android';
import Timestamp from '../../components/atoms/Timestamp';
import {deviceType} from '../../types/devices';
import {MQTTpublish} from '../../mqtt/client';
interface Props {
  onError: (error: string) => void;
}

function HomeScreen({onError}: Props) {
  const devices = useSelector((state: RootState) => state.data.devices);
  const timestamp = useSelector((state: RootState) => state.data.timestamp);
  //   const notAtHome = useSelector((state: RootState) => state.notAtHome);
  //   const timestamp = useSelector((state: RootState) => state.timestamp);

  //   useEffect(() => {
  //     if (refreshing) {
  //       setRefreshing(false);
  //     }
  //   }, [data]);
  const [refreshing, setRefreshing] = useState(false);

  const handleRename = (name: string, label: string) => {
    Vibration.vibrate(50);
    prompt(
      'Rename element',
      'Enter the new name',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'OK',
          onPress: (_label: string) => {
            if (_label && _label !== '') {
              MQTTpublish('rename', name, {label: _label}, onError);
            }
          },
        },
      ],
      {
        cancelable: false,
        defaultValue: '',
        placeholder: label === 'UNNAMED' ? name : label,
      },
    );
  };

  return (
    <View style={GlobalStyles.appContainer}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flex: 1, justifyContent: 'center'}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() =>
              MQTTpublish('retrieve', undefined, undefined, onError)
            }
          />
        }>
        {devices.length ? (
          <View style={GlobalStyles.appContainer}>
            <Timestamp time={timestamp} />
            <View style={GlobalStyles.homeContainer}>
              {devices.map((device: deviceType, index: any) => {
                if (device.name.includes('llum')) {
                  return (
                    <LightCard
                      key={index}
                      disabled={false}
                      name={
                        device.label === 'UNNAMED' ? device.name : device.label
                      }
                      onRename={() => handleRename(device.name, device.label)}
                      onSwitch={() =>
                        MQTTpublish(
                          'set',
                          device.name,
                          {
                            state: device.data.state === 'ON' ? 'OFF' : 'ON',
                          },
                          onError,
                        )
                      }
                      status={device.data.state === 'ON' && true}
                    />
                  );
                }
                if (device.name.includes('temperatura')) {
                  return (
                    <TempCard
                      key={index}
                      name={device.name ? device.name : 'UNNAMED'}
                      humidity={device.data.humidity}
                      hlog={
                        device.data.logs?.hlog ? device.data.logs?.hlog : []
                      }
                      hlogColor={'#3385ff'}
                      tlog={device.data.logs?.tlog ? device.data.logs.tlog : []}
                      tlogColor={'#ff8533'}
                      temperature={device.data.temperature}
                      onRename={() => handleRename(device.name, device.label)}
                    />
                  );
                }
              })}
            </View>
          </View>
        ) : (
          <View style={GlobalStyles.loadingContainer}>
            <Loading size="large" />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

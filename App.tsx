/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import MQTTWraper from './src/mqtt/wrapper';

import MyNavigator from './src/Navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MQTTWraper>
        <GestureHandlerRootView style={{flex: 1}}>
          <MyNavigator />
        </GestureHandlerRootView>
      </MQTTWraper>
    </SafeAreaView>
  );
}

export default App;

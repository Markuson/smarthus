/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Appearance} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import aspect from '../styles/GlobalAspect';
import HomeScreen from '../screens/HomeScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/config/store';
import Timestamp from '../components/atoms/Timestamp';

export type Props = {};

const Stack = createNativeStackNavigator();

function MyNavigator() {
  const timestamp = useSelector((state: RootState) => state.data.timestamp);
  const MyTheme =
    Appearance.getColorScheme() === 'dark'
      ? {
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            ...aspect.color,
          },
        }
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            ...aspect.color,
          },
        };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: aspect.color.background,
            },
            headerTitle: () => <Timestamp time={timestamp} />,
            headerTitleAlign:'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('GO TO SETTINGS')}>
                <Icon
                  name={'cog'}
                  size={aspect.icon.size.normal}
                  color={aspect.color.primary}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyNavigator;

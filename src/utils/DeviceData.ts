import {Platform, Dimensions} from 'react-native';

export default {
  android: Platform.OS === 'android' ? true : false,
  ios: Platform.OS === 'android' ? false : true,
  deviceWidth: Dimensions.get('screen').width,
  deviceHeight: Dimensions.get('screen').height,
};

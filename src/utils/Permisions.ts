import {PermissionsAndroid} from 'react-native';

const LocationPermision = {
  check() {
    return (async () => {
      try {
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      } catch (err) {
        console.warn(err);
      }
    })();
  },
  request() {
    return (async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Smarthus',
            message: 'Smarthus app needs to acces to your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.warn(err);
      }
    })();
  },
};

export default LocationPermision;

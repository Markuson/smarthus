import {Appearance, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

let theme = Appearance.getColorScheme();

export default {
  color:
    theme === 'dark'
      ? {
          button: 'rgb(64,64,64)',
          background: 'rgba(24,24,24, 0.8)',
          border: 'darkslategray',
          card: 'rgb(64,64,64)',
          icon: {
            disabled: 'lightgray',
            enabled: '#ffef96',
          },
          notification: 'red',
          primary: '#20c997',
          shadow: {
            elevation: 4,
            offset: {width: 5, height: 5},
            blur: 15,
            color: 'rgba(255, 255, 255, 0.38)',
            opacity: 0.2,
          },
          textEmphasis: 'rgba(255, 255, 255, 0.87)',
          textNormal: 'rgba(255, 255, 255, 0.8)',
          textDisabled: 'rgba(255, 255, 255, 0.38)',
        }
      : {
          button: 'lightgray',
          background: 'rgba(245,245,245, 1)',
          border: 'lightgray',
          card: 'snow',
          icon: {
            disabled: 'gray',
            enabled: '#ffef96',
          },
          notification: 'tomato',
          primary: '#20c997',
          text: 'rgb(24,25,26)',
          shadow: {
            elevation: 4,
            offset: {width: 5, height: 5},
            blur: 15,
            color: 'rgba(102, 102, 102, 1)',
            opacity: 0.2,
          },
          textEmphasis: 'rgba(0, 0, 0, 0.87)',
          textNormal: 'rgba(0, 0, 0, 0.6)',
          textDisabled: 'rgba(0, 0, 0, 0.38)',
        },

  dimension: {
    fullWidth: wp('100%'),
    fullHeigth: hp('100%'),
    switchButton: {
      height: wp('22%'),
      width: wp('90%'),
      radius: hp('0.5%'),
    },
    tradSettingsButton: {
      height: hp('6%'),
      width: wp('50%'),
      radius: hp('1%'),
    },
    netSettingsButton: {
      height: hp('6%'),
      width: wp('25%'),
      radius: hp('1%'),
    },
    card: {
      height: {
        w1h2: wp('28%'),
        w2h2: wp('28%'),
        w2h1: wp('14%'),
      },
      width: {
        w1h2: wp('44%'),
        w2h2: wp('90%'),
        w2h1: wp('90%'),
      },
      radius: hp('0.4%'),
    },
  },
  font: {
    light: Platform.OS === 'android' ? 'Raleway-Light' : 'Avenir-Light',
    bold: Platform.OS === 'android' ? 'Raleway-Bold' : 'Avenir-Black',
    numericBold: Platform.OS === 'android' ? 'Roboto-Light' : 'Avenir-Light',
    numericLight: Platform.OS === 'android' ? 'Roboto-Bold' : 'Avenir-Black',
    size: {
      normal: hp('2.5%'),
      small: hp('1.8%'),
      xsmall: hp('1.5%'),
      medium: hp('3.5%'),
      big: hp('4%'),
    },
  },
  icon: {
    size: {
      normal: hp('3%'),
      small: hp('2%'),
      big: hp('6%'),
    },
  },
  padding: {
    big: hp('20%'),
    medium: hp('10%'),
    small: hp('15%'),
  },
  shadow: {
    elevation: 4,
    shadowOffset: {width: 5, height: 5},
    shadowBlur: 15,
    shadowColor: '#666',
    shadowOpacity: 0.2,
  },
};

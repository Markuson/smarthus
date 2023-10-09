import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  // droidSafeArea: {
  //   flex: 1,
  //   paddingTop: Platform.OS === 'android' ? 0 : 0,
  // },

  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('100%'),
  },

  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('100%'),
  },

  homeContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    width: wp('100%'),
    paddingTop: wp('1%'),
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('100%'),
    marginTop: hp('2%'),
  },

  alignCenter: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('100%'),
  },

  textLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('90%'),
    height: hp('8%'),
  },
});

export default styles;

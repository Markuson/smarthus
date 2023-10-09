import {StyleSheet} from 'react-native';
import GlobalAspect from '../../../../styles/GlobalAspect';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {color, font} = GlobalAspect;
const styles = StyleSheet.create({
  topSection: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: wp('2%'),
    paddingTop: wp('2%'),
  },
  middleSection: {
    flex: 10,
    width: '100%',
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: color.textNormal,
    fontFamily: font.light,
    fontSize: font.size.small,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    paddingBottom: wp('1%'),
  },
  dataContainer: {
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '65%',
    paddingBottom: wp('2%'),
    paddingRight: wp('2%'),
  },
  slider: {
    width: '100%',
    height: 20,
  },
  sliderContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
  },
  switch: {
    width: GlobalAspect.dimension.switchButton.width,
    height: GlobalAspect.dimension.switchButton.height,
    borderRadius: GlobalAspect.dimension.switchButton.radius,
    backgroundColor: GlobalAspect.color.button,
  },
});

export default styles;

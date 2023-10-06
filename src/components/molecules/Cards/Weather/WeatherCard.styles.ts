import { StyleSheet } from 'react-native';
import GlobalAspect from '../../../../styles/GlobalAspect';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const { color, font } = GlobalAspect;
const styles = StyleSheet.create({
  nameText: {
    color: color.textNormal,
    fontFamily: font.light,
    fontSize: font.size.normal,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: wp('3%'),
    paddingTop: wp('2%'),
    width: '100%',
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dataText: {
    color: color.textNormal,
    fontFamily: font.numericLight,
    fontSize: font.size.medium,
    paddingLeft: wp('3%'),
  },
  unitText: {
    color: color.textNormal,
    fontFamily: font.numericLight,
    fontSize: font.size.normal,
  },
  topSection: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 10,
    elevation: 10,
  },
  middleSection: {
    width: wp('90%'),
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottomSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chart: {
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
  },
  data: {
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import aspect from '../../../styles/GlobalAspect';

const {
  color,
  dimension: { card },
} = aspect;

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: color.card,
    borderRadius: card.radius,
    height: card.height.w1h2,
    width: card.width.w1h2,
    margin: wp('1%'),
    elevation: 4,
    // shadowColor: 'rgba(255, 255, 255, 0.38)',
    // shadowOffset: { width: 5, height: 5 },
    overflow: 'hidden',
  },
});

export default styles;

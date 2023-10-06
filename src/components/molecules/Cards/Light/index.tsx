import React from 'react';
import {Switch, Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import aspect from '../../../../styles/GlobalAspect';
import styles from './LightCard.styles';
import Card from '../../../atoms/Card';

export type Props = {
  disabled: boolean;
  name: string;
  onSwitch: () => void;
  onRename: () => void;
  status: boolean;
};

const {
  color,
  icon,
  dimension: {
    card: {height: h, width: w},
  },
} = aspect;
const LightCard: React.FC<Props> = ({
  disabled,
  name,
  onRename,
  onSwitch,
  status,
}) => {
  return (
    <Card accessibilityLabel={'LightCard'} cardSize={{w: w.w2h1, h: h.w2h1}}>
      <View style={styles.row}>
        <View style={styles.row}>
          <View style={styles.icon}>
            <Icon
              name={'lightbulb'}
              size={icon.size.normal}
              color={status ? color.icon.enabled : color.icon.disabled}
            />
          </View>
          <TouchableWithoutFeedback onLongPress={onRename}>
            <Text numberOfLines={1} style={styles.text}>
              {name}
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Switch
            disabled={disabled}
            onValueChange={onSwitch}
            value={status}
            trackColor={{true: color.primary}}
          />
        </View>
      </View>
    </Card>
  );
};
export default LightCard;

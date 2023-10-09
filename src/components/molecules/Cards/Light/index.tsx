import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import aspect from '../../../../styles/GlobalAspect';
import styles from './LightCard.styles';
import Card from '../../../atoms/Card';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deviceDataType, deviceFeaturesType} from '../../../../types/devices';
import Slider from '@react-native-community/slider';

export type Props = {
  disabled: boolean;
  name: string;
  data: deviceDataType;
  features?: deviceFeaturesType;
  onSwitch: () => void;
  onRename: () => void;
  oncolorTempChange?: (value: number) => void;
  onBrightnessChange?: (value: number) => void;
  onColorChange?: (x: number, y: number) => void;
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
  data,
  features,
  onRename,
  onSwitch,
  oncolorTempChange,
  onBrightnessChange,
  onColorChange,
}) => {
  const [lightState, setLightState] = useState(false);
  useEffect(() => {
    setLightState(data.state === 'ON' ? true : false);
  }, [data?.state]);

  const brightness = features?.find(feature => feature.name === 'brightness');
  const color_temp = features?.find(feature => feature.name === 'color_temp');

  const handleSwitch = () => {
    setLightState(!lightState);
    onSwitch();
  };

  return (
    <Card accessibilityLabel={'LightCard'} cardSize={{w: w.w1h2, h: h.w1h2}}>
      <View style={styles.topSection}>
        <TouchableWithoutFeedback onLongPress={onRename}>
          <Text numberOfLines={1} style={styles.text}>
            {name}
          </Text>
        </TouchableWithoutFeedback>
        {data.battery && (
          <Icon
            name={'battery'}
            size={icon.size.small}
            color={color.icon.disabled}
          />
        )}
      </View>
      <View style={styles.middleSection}>
        <View style={styles.iconContainer}>
          <TouchableWithoutFeedback
            onLongPress={() => console.log('CHANGE THE COLOR')}>
            <Icon
              name={'lightbulb-outline'}
              size={icon.size.big}
              color={
                data.state === 'ON' ? color.icon.enabled : color.icon.disabled
              }
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.dataContainer}>
          <TouchableOpacity
            disabled={disabled}
            onPress={handleSwitch}
            style={styles.switch}>
            <Icon
              name={'power'}
              size={icon.size.normal}
              color={
                data.state === 'ON' ? color.icon.enabled : color.icon.disabled
              }
            />
          </TouchableOpacity>
          {color_temp && (
            <View style={styles.sliderContainer}>
              <Icon
                name={'thermometer'}
                size={icon.size.small}
                color={
                  data.state === 'ON'
                    ? color.icon.disabled
                    : color.icon.unavailable
                }
              />
              <Slider
                disabled={data.state === 'OFF'}
                style={styles.slider}
                minimumValue={
                  color_temp?.value_min && color_temp?.value_min + 2
                }
                maximumValue={color_temp?.value_max}
                step={
                  color_temp?.value_min &&
                  color_temp?.value_max &&
                  (color_temp?.value_min + 2 + color_temp?.value_max) / 5
                }
                minimumTrackTintColor={color.icon.disabled}
                maximumTrackTintColor={color.icon.enabled}
                onSlidingComplete={oncolorTempChange}
                value={data.color_temp}
              />
            </View>
          )}
          {brightness && (
            <View style={styles.sliderContainer}>
              <Icon
                name={'brightness-6'}
                size={icon.size.small}
                color={
                  data.state === 'ON'
                    ? color.icon.disabled
                    : color.icon.unavailable
                }
              />
              <Slider
                disabled={data.state === 'OFF'}
                style={styles.slider}
                minimumValue={brightness?.value_min}
                maximumValue={brightness?.value_max}
                minimumTrackTintColor={color.icon.disabled}
                maximumTrackTintColor={color.icon.enabled}
                onSlidingComplete={onBrightnessChange}
                value={data.brightness}
              />
            </View>
          )}
        </View>
      </View>
    </Card>
  );
};
export default LightCard;

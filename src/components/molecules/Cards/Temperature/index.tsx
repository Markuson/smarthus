/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import aspect from '../../../../styles/GlobalAspect';
import styles from './TempCard.styles';
import Card from '../../../atoms/Card';
import Chart from '../../../atoms/Chart';

export type Props = {
  temperature: number | undefined;
  tlog?: number[];
  tlogColor?: string;
  humidity?: number | undefined;
  hlog?: number[];
  hlogColor?: string;
  name: string;
  onRename: () => void;
};

const {
  color,
  icon,
  dimension: {
    card: {height: h, width: w},
  },
} = aspect;

const TempCard: React.FC<Props> = ({
  humidity,
  hlog,
  hlogColor,
  temperature,
  tlog,
  tlogColor,
  name,
  onRename,
}) => {
  return (
    <Card
      accessibilityLabel={'TemperatureCard'}
      cardSize={{w: w.w1h2, h: h.w1h2}}>
      <View style={styles.topSection}>
        <View style={styles.row}>
          <TouchableWithoutFeedback onLongPress={onRename}>
            <Text numberOfLines={1} style={styles.nameText}>
              {name}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.data}>
        <View style={styles.middleSection}>
        <Icon
            name={'thermometer'}
            size={icon.size.normal}
            color={color.textNormal}
          />
          <View style={styles.textRow}>
            <Text numberOfLines={1} style={styles.dataText}>
              {temperature}
            </Text>
            <Text style={[styles.unitText, {color: tlogColor}]}> ºC</Text>
          </View>
          {humidity && (
            <View style={styles.textRow}>
              <Text numberOfLines={1} style={styles.dataText}>
                {humidity}
              </Text>
              <Text style={[styles.unitText, {color: hlogColor}]}> %</Text>
            </View>
          )}
        </View>
        {/* <View style={styles.bottomSection} /> */}
      </View>
      {/* {!!hlog && hlog.length >= 2 && (
        <View style={[styles.chart, {zIndex: 2, elevation: 2}]}>
          <Chart
            color={hlogColor}
            chartData={hlog}
            accessibilityLabel="Chart"
            size={{w: w.w1h2, h: h.w1h2}}
            domain={{x: {min: 0, max: 23}, y: {min: 0, max: 100}}}
          />
        </View>
      )}
      {!!tlog && tlog.length >= 2 && (
        <View style={[styles.chart]}>
          <Chart
            color={tlogColor}
            chartData={tlog}
            accessibilityLabel="Chart2"
            size={{w: w.w1h2, h: h.w1h2}}
            domain={{x: {min: 0, max: 23}, y: {min: -20, max: 40}}}
          />
        </View>
      )} */}
    </Card>
  );
};
export default TempCard;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import aspect from '../../../../styles/GlobalAspect';
import styles from './WeatherCard.styles';
import Card from '../../../atoms/Card';
import Chart from '../../../atoms/Chart';

export type Props = {
  temperature: number;
  tlog?: number[];
  tlogColor?: string;
  humidity?: string;
  hlog?: number[];
  hlogColor?: string;
  pressure: string;
  plog?: number[];
  plogColor?: string;
  altitude: string;
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

const WeatherCard: React.FC<Props> = ({
  temperature,
  tlog,
  tlogColor,
  humidity,
  hlog,
  hlogColor,
  pressure,
  plog,
  plogColor,
  altitude,
  name,
  onRename,
}) => {
  return (
    <Card accessibilityLabel={'WeatherCard'} cardSize={{w: w.w2h2, h: h.w2h2}}>
      <View style={styles.topSection}>
        <View style={styles.row}>
          <TouchableWithoutFeedback onLongPress={onRename}>
            <Text numberOfLines={1} style={styles.nameText}>
              {name}
            </Text>
          </TouchableWithoutFeedback>
          <Icon
            name={'thermometer'}
            size={icon.size.normal}
            color={color.textNormal}
          />
        </View>
      </View>
      <View style={styles.data}>
        <View style={styles.middleSection}>
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
          {pressure && (
            <View style={styles.textRow}>
              <Text numberOfLines={1} style={styles.dataText}>
                {pressure}
              </Text>
              <Text style={[styles.unitText, {color: plogColor}]}> hPa</Text>
            </View>
          )}
          {false && altitude && (
            <View style={styles.textRow}>
              <Text numberOfLines={1} style={styles.dataText}>
                {altitude}
              </Text>
              <Text style={styles.unitText}> m</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.bottomSection} />
      {!!hlog && hlog.length >= 2 && (
        <View style={[styles.chart, {zIndex: 2, elevation: 2}]}>
          <Chart
            color={hlogColor}
            chartData={hlog}
            accessibilityLabel="Chart"
            size={{w: w.w2h2, h: h.w2h2}}
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
            size={{w: w.w2h2, h: h.w2h2}}
            domain={{x: {min: 0, max: 23}, y: {min: -20, max: 40}}}
          />
        </View>
      )}
      {!!plog && plog.length >= 2 && (
        <View style={[styles.chart, {zIndex: 3, elevation: 3}]}>
          <Chart
            color={plogColor}
            chartData={plog}
            accessibilityLabel="Chart3"
            size={{w: w.w2h2, h: h.w2h2}}
            domain={{x: {min: 0, max: 23}, y: {min: 1000, max: 1050}}}
          />
        </View>
      )}
    </Card>
  );
};
export default WeatherCard;

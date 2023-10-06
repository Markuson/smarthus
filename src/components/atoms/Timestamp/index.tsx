import React from 'react';
import {Text} from 'react-native';
import styles from './Timestamp.styles';

export type Props = {
  time: string;
};

const Timestamp: React.FC<Props> = ({time}) => {
  return <Text style={styles.text}>Last updated: {time}</Text>;
};
export default Timestamp;

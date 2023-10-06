import React from 'react';
import {ActivityIndicator} from 'react-native';
import aspect from '../../../styles/GlobalAspect';

export type Props = {
  size: 'small' | 'large';
};

const Loading: React.FC<Props> = ({size = 'small'}) => {
  return <ActivityIndicator size={size} color={aspect.color.primary} />;
};
export default Loading;

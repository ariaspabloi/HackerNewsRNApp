import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  size: number;
  color: string;
};

export const ArrowUpIcon = ({size, color}: Props) => {
  return (
    <View>
      <Icon name="arrow-up-outline" size={size} color={color} />
    </View>
  );
};

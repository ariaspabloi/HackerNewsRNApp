import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  size: number;
  color: string;
};

export const DeleteIcon = ({size, color}: Props) => {
  return (
    <View>
      <Icon name="trash-outline" size={size} color={color} />
    </View>
  );
};

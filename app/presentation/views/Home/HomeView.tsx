import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/stackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'HomeView'> {}

export const HomeView = ({navigation}: Props) => {
  return (
    <View>
      <Text>HomeView</Text>
    </View>
  );
};

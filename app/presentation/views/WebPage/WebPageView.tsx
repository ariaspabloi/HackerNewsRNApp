import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/stackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'WebPageView'> {}

export const WebPageView = ({route, navigation}: Props) => {
  return (
    <View>
      <Text>WebPageView</Text>
    </View>
  );
};

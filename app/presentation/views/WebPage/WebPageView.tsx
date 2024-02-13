import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import WebView from 'react-native-webview';
import {RootStackParams} from '../../navigation/stackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'WebPageView'> {}

export const WebPageView = ({route}: Props) => {
  const {uri} = route.params;

  return <WebView source={{uri}} />;
};

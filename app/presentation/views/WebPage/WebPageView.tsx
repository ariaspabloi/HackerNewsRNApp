import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {RootStackParams} from '../../navigation/stackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'WebPageView'> {}

export const WebPageView = ({route}: Props) => {
  const {uri} = route.params;

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <WebView source={{uri}} style={styles.webView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  webView: {
    flex: 1,
  },
});

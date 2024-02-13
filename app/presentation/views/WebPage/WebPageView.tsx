import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {LoadingSpin} from '../../components/shared/LoadingSpin';
import {RootStackParams} from '../../navigation/stackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'WebPageView'> {}

export const WebPageView = ({route}: Props) => {
  const {uri} = route.params;
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <WebView
        source={{uri}}
        onLoadStart={() => setLoading(true)}
        onLoad={() => setLoading(false)}
      />
      {loading && <LoadingSpin />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

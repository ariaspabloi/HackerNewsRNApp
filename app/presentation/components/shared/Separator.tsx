import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {marginVertical: 12},
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {gray} from '../../theme/colors';

export const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    borderWidth: 0.4,
    borderColor: gray(0.6),
    borderStyle: 'solid',
    shadowOpacity: 0,
  },
});

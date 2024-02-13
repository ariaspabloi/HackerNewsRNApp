import React from 'react';
import {StyleSheet, View} from 'react-native';
import {listDividerStyle} from '../../theme/element-styles/dividerStyles';

export const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    ...(listDividerStyle as object),
  },
});

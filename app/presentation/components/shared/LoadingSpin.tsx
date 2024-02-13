import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const LoadingSpin = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="green" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

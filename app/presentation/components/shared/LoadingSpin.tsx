import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const LoadingSpin = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="green" size={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

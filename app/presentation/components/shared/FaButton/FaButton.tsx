import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

interface FaButtonProps {
  children: JSX.Element;
  position: 'br' | 'bl';
  onPress: () => void;
}

export const FaButton = ({children, position, onPress}: FaButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonPosition,
        position === 'bl' ? styles.buttonPositionBL : styles.buttonPositionBR,
      ]}
      onPress={onPress}>
      <View style={styles.button}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    position: 'absolute',
    bottom: 10,
  },
  buttonPositionBL: {
    left: 10,
  },
  buttonPositionBR: {
    right: 10,
  },
  button: {
    backgroundColor: 'cyan',
    borderRadius: 29,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

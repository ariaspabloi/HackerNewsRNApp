import React, {useRef} from 'react';

import {StyleSheet, Text} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {SwipeableContainer} from './SwipeableContainer';

type Props = {
  action: () => void;
  children: JSX.Element;
};

export const SwipeableRemovalContainer = ({action, children}: Props) => {
  const swipeableRef = useRef<Swipeable>(null);
  const renderActions = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          swipeableRef.current?.close();
          requestAnimationFrame(action);
        }}
        style={styles.container}>
        <Text style={styles.content}>Delete</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SwipeableContainer
      direction="right"
      renderActions={renderActions}
      swipeableRef={swipeableRef}>
      {children}
    </SwipeableContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '100%',
  },
  content: {
    color: '#1b1a17',
    fontWeight: '600',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

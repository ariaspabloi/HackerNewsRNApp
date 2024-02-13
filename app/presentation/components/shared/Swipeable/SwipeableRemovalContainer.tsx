import React, {useRef} from 'react';

import {StyleSheet, View} from 'react-native';
import {Swipeable, TouchableOpacity} from 'react-native-gesture-handler';
import {danger, secondary} from '../../../theme/colors';
import {DeleteIcon} from '../../icons/DeleteIcon';
import {SwipeableContainer} from './SwipeableContainer';

type Props = {
  action: () => void;
  children: JSX.Element;
};

export const SwipeableRemovalContainer = ({action, children}: Props) => {
  const swipeableRef = useRef<Swipeable>(null);
  const renderActions = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            swipeableRef.current?.close();
            requestAnimationFrame(action);
          }}
          style={styles.button}>
          <DeleteIcon size={38} color={secondary()} />
        </TouchableOpacity>
      </View>
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
    width: '30%',
  },
  button: {
    backgroundColor: danger,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

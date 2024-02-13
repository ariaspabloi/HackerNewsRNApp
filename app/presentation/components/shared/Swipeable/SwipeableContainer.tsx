import React from 'react';
import {Swipeable} from 'react-native-gesture-handler';

type Props = {
  direction: Direction;
  children: JSX.Element;
  swipeableRef?: React.RefObject<Swipeable>;
  action?: () => void;
  renderActions: () => JSX.Element;
};

type Direction = 'left' | 'right';

export const SwipeableContainer = ({
  children,
  action = () => {},
  renderActions,
  direction,
  swipeableRef,
}: Props) => {
  let directionProps;

  if (direction === 'left') {
    directionProps = {
      renderLeftActions: renderActions,
      rightThreshold: Infinity,
    };
  } else {
    directionProps = {
      renderRightActions: renderActions,
      leftThreshold: Infinity,
    };
  }

  const onSwipeableOpen = (swipeDirection: Direction) => {
    if (swipeDirection === direction) {
      action();
    }
  };

  return (
    <Swipeable
      {...directionProps}
      onSwipeableOpen={onSwipeableOpen}
      ref={swipeableRef}>
      {children}
    </Swipeable>
  );
};

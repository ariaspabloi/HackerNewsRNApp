import React from 'react';
import {ArrowUpIcon} from '../../icons/ArrowUpIcon';
import {FaButton} from './FaButton';

type Props = {
  action: () => void;
};

export const UpFaButton = ({action}: Props) => {
  return (
    <FaButton position="br" onPress={action}>
      <ArrowUpIcon size={38} color="white" />
    </FaButton>
  );
};

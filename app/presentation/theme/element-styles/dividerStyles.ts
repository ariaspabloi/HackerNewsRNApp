import {Platform} from 'react-native';
import {gray, secondary} from '../colors';

export const listDividerStyle = {
  borderWidth: 0.4,
  borderColor: gray(0.6),
  borderStyle: 'solid',
  shadowOpacity: 0,
};

export const bottomBorder = {
  borderBottomWidth: Platform.OS === 'ios' ? 0.17 : 0.2,
  borderColor: secondary(),
  borderStyle: 'solid',
};

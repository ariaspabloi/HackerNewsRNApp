import {Appearance} from 'react-native';

const colorScheme = Appearance.getColorScheme();

export const modalBackgroundColor = 'lightgray';

export function gray(opacity: number = 1.0): string {
  if (colorScheme === 'dark') {
    return `rgba(169,169,169, ${opacity})`;
  }
  return `rgba(56,56,56, ${opacity})`;
}

const dark = {
  primary: '#fffffe',
  secondary: '#222525',
  tertiary: gray,
} as const;

const light = {
  primary: '#232323',
  secondary: '#f8f5f2',
  tertiary: gray,
} as const;

export function notSelected(opacity: number = 0.75) {
  return colorScheme === 'dark'
    ? dark.tertiary(opacity)
    : light.tertiary(opacity);
}

export function primary(isInverted: Boolean = false) {
  if (isInverted) {
    return colorScheme === 'dark' ? light.primary : dark.primary;
  }
  return colorScheme === 'dark' ? dark.primary : light.primary;
}

export function secondary(isInverted: Boolean = false) {
  if (isInverted) {
    return colorScheme === 'dark' ? light.secondary : dark.secondary;
  }
  return colorScheme === 'dark' ? dark.secondary : light.secondary;
}

export function tertiary(isInverted: Boolean = false, opacity: number = 1.0) {
  if (isInverted) {
    return colorScheme === 'dark'
      ? light.tertiary(opacity)
      : dark.tertiary(opacity);
  }
  return colorScheme === 'dark'
    ? dark.tertiary(opacity)
    : light.tertiary(opacity);
}

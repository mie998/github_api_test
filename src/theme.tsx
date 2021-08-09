import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: "'Menlo', monospace" };

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// check this page to extendTheme function: https://chakra-ui.com/docs/theming/customize-theme
const theme = extendTheme({
  colors: {
    // default colors: https://chakra-ui.com/docs/theming/theme#colors
    black: '#16161D',
  },
  fonts,
  breakpoints,
  zIndices,
});

export default theme;

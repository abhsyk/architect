import { createGlobalStyle } from 'styled-components';
import { breakpoints, colors, fonts } from './constants';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0, 0.5);
    border-radius: 10px;
    border: transparent;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
`;

// Define what props.theme will look like
export const theme = {
  colors,
  fonts,
};

// Animations
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const respondTo = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  '2xl': `(max-width: ${breakpoints['2xl']})`,
};

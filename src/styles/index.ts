import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
`;

const colors = {
  primary: '#E2B646', // yellow-ish
  darkGray: '#4b4b4b',
  grey: '#A7A7A7',
  black: '#272727',
  white: '#FFF',
};

const fonts = {
  primary: '"Baloo Da 2", serif',
  seconday: '"Muli", serif',
  tertiary: "'Josefin Slab', serif",
};

// Define what props.theme will look like
export const theme = {
  colors,
  fonts,
};

// Animations
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

// Breakpoints
const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536',
};

export const respondTo = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  '2xl': `(max-width: ${breakpoints['2xl']})`,
};

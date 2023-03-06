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

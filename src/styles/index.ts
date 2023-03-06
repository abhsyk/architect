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

export const colors = {
  primary: '#E2B646;',
  grey: '#A7A7A7',
  white: '#FFF',
};

// Define what props.theme will look like
export const theme = {
  colors,
  main: 'mediumseagreen',
};

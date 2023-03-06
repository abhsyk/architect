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
  primary: '',
  grey: '#a7a7a7',
};

// Define what props.theme will look like
export const theme = {
  colors,
  main: 'mediumseagreen',
};

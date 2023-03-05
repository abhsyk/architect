import styled, { createGlobalStyle } from 'styled-components';

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

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 5rem;

  h1 {
    font-family: 'Muli', serif;
    font-size: 2.5rem;
    font-weight: 300;
    color: #4b4b4b;
    margin-bottom: 2rem;
  }

  .underline {
    width: 8rem;
    height: 0.1rem;
    background-color: #c29525;
  }
`;

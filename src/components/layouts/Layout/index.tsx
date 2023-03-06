import { FC, PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../../styles';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  /* display: none; */
`;

export default Layout;

import { FC, PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../../styles';
import { HamburgerButton, ScrollButton } from '../../ui';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <HamburgerButton />
          {children}
          <ScrollButton />
        </StyledLayout>
      </ThemeProvider>
    </>
  );
};

const StyledLayout = styled.div`
  /* display: none; */
`;

export default Layout;

import { FC, PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../../styles';
import { ScrollButton } from '../../ui';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
        <ScrollButton />
      </ThemeProvider>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  /* display: none; */
`;

export default Layout;

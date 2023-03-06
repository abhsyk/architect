import { FC, PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../../styles';
import { HamburgerButton, ScrollButton } from '../../ui';
import { useUI } from '../../../context';
import { Sidebar } from '../../section';
import { AnimatePresence } from 'framer-motion';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isSidebarOpen } = useUI();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledLayout>
          <HamburgerButton />
          <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
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

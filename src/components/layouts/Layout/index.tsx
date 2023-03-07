import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../../styles';
import { HamburgerButton, ScrollButton } from '../../ui';
import { useUI } from '../../../context';
import { About, Contact, Footer, Hero, Sidebar, Team } from '../../section';
import { AnimatePresence } from 'framer-motion';

const Layout: FC = () => {
  const { isSidebarOpen } = useUI();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <HamburgerButton />

        {/* Sections */}
        <AnimatePresence>{isSidebarOpen && <Sidebar />}</AnimatePresence>
        <Hero />
        <About />
        <Team />
        <Contact />
        <Footer />

        <ScrollButton />
      </ThemeProvider>
    </>
  );
};

export default Layout;

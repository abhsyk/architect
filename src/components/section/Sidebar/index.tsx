import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';
import { useUI } from '../../../context';
import { SocialMedia } from '../../common';

const Sidebar: FC = () => {
  const { isSidebarOpen, closeSidebar } = useUI();

  return (
    <>
      <StyledSidebar
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Menu>
          <Item>
            <a href="/" data-content="Home">
              Home
            </a>
          </Item>
          <Item>
            <a href="/" data-content="About">
              About
            </a>
          </Item>
          <Item>
            <a href="/" data-content="Team">
              Team
            </a>
          </Item>
          <Item>
            <a href="/" data-content="Pricing">
              Pricing
            </a>
          </Item>
          <Item>
            <a href="/" data-content="Contact">
              Contact
            </a>
          </Item>
        </Menu>
        <Social />
      </StyledSidebar>
      <AnimatePresence>
        {isSidebarOpen && (
          <Backdrop
            variants={bdAnim}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// Styles
const StyledSidebar = styled(motion.div)`
  position: fixed;
  background: ${({ theme }) => theme.colors.white};
  width: 20rem;
  height: 100vh;
  top: 0;
  right: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const Menu = styled.ul`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Item = styled.li`
  text-align: center;

  a {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.grey};
    position: relative;

    ::before {
      content: attr(data-content);
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      color: ${({ theme }) => theme.colors.primary};
      overflow: hidden;
      white-space: nowrap;
      transition: width 0.3s ease-in-out;
    }

    :hover::before {
      width: 100%;
    }
  }
`;

const Social = styled(SocialMedia)`
  position: absolute;
  width: 100%;
  bottom: 2rem;
  display: flex;
  justify-content: center;

  a {
    transition: color 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;
`;

// Animation variables
const container = {
  hidden: { opacity: 0, x: 300 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: 300, transition: { duration: 0.5 } },
};

const bdAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default Sidebar;

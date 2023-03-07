import { AnimatePresence } from 'framer-motion';
import { FC, useCallback, useEffect } from 'react';
import { useUI } from '../../../context';
import { bdAnim, containerAnim } from './animations';
import { Backdrop, Item, Menu, Social, StyledSidebar } from './styles';

const Sidebar: FC = () => {
  const { isSidebarOpen, closeSidebar } = useUI();

  const handleLocationReplace = useCallback(
    (location: string) => {
      window.location.replace(location);
      closeSidebar();
    },
    [closeSidebar]
  );

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isSidebarOpen]);

  return (
    <>
      <StyledSidebar
        variants={containerAnim}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Menu>
          <Item
            onClick={() => handleLocationReplace('/#home')}
            data-content="Home"
          >
            Home
          </Item>
          <Item
            onClick={() => handleLocationReplace('/#about')}
            data-content="About"
          >
            About
          </Item>
          <Item
            onClick={() => handleLocationReplace('/#team')}
            data-content="Team"
          >
            Team
          </Item>
          <Item
            onClick={() => handleLocationReplace('/#contact')}
            data-content="Contact"
          >
            Contact
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

export default Sidebar;

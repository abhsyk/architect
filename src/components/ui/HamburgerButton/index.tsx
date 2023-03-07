import { FC } from 'react';
import { useUI } from '../../../context';
import { Button, Line } from './styles';

const HamburgerButton: FC = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useUI();

  return (
    <Button onClick={isSidebarOpen ? closeSidebar : openSidebar}>
      <Line className={`line line-1 ${isSidebarOpen ? 'active' : ''}`} />
      <Line className={`line line-2 ${isSidebarOpen ? 'active' : ''}`} />
      <Line className={`line line-3 ${isSidebarOpen ? 'active' : ''}`} />
    </Button>
  );
};

export default HamburgerButton;

import { FC } from 'react';
import styled from 'styled-components';
import { useUI } from '../../../context';

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

// Styles
const Button = styled.div`
  position: fixed;
  width: 2rem;
  height: 2rem;
  top: 2.5rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
  border-radius: 50%;
  z-index: 150;

  .active.line {
    background: rgba(0, 0, 0, 0.6);
  }
  .active.line-1 {
    transform: rotate(45deg) translate(4px, 8px);
  }
  .active.line-2 {
    opacity: 0;
    visibility: hidden;
  }
  .active.line-3 {
    transform: rotate(-45deg) translate(4px, -8px);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  transition: all 0.2s;
`;

export default HamburgerButton;

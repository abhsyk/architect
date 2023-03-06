import { FC } from 'react';
import styled from 'styled-components';
import { useUI } from '../../../context';

const HamburgerButton: FC = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useUI();

  return (
    <Button
      className={`${isSidebarOpen ? 'active' : ''}`}
      onClick={isSidebarOpen ? closeSidebar : openSidebar}
    >
      <Line />
      <Line />
      <Line />
      <span onClick={closeSidebar}>Close</span>
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
  z-index: 150;

  span {
    position: absolute;
    width: 6rem;
    height: 2rem;
    left: 3rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s;

    ::before {
      content: '';
      position: absolute;
      border-top: 10px solid transparent;
      border-right: 10px solid ${({ theme }) => theme.colors.primary};
      border-left: 10px solid transparent;
      border-bottom: 10px solid transparent;
      top: 50%;
      left: -1.2rem;
      transform: translateY(-50%);
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

export default HamburgerButton;

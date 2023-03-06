import { FC } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollButton: FC = () => {
  return (
    <Button>
      <FaArrowUp />
    </Button>
  );
};

// Styles
const Button = styled.a`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  color: ${({ theme }) => theme.colors.white};
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 50%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export default ScrollButton;

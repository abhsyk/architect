import styled from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo } from '../../../styles';

// Styles
export const Button = styled(motion.div)`
  position: fixed;
  right: 2.5rem;
  bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 50%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media ${respondTo.sm} {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.2rem;
  }
`;

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { respondTo } from '../../../styles';

// Styles
export const StyledTeam = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 15rem 2rem;

  @media ${respondTo.xl} {
    padding-bottom: 10rem;
  }
  @media ${respondTo.md} {
    padding-top: 1.8rem;
    padding-bottom: 6rem;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 4rem;

  @media ${respondTo.lg} {
    flex-direction: column;
    align-items: center;
  }
  @media ${respondTo.xl} {
    margin-top: 2rem;
  }
`;

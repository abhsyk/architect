import styled from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo } from '../../../styles';

// Styles
export const StyledAbout = styled(motion.div)`
  width: 100%;
  background-color: #f5f5f5;
  padding-top: 1rem;
  padding-bottom: 8rem;

  @media ${respondTo.md} {
    padding-top: 1.8rem;
    padding-bottom: 5rem;
  }
`;

export const Services = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(6, 4rem);
  grid-row-gap: 2rem;

  @media ${respondTo.lg} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Service = styled(motion.div)`
  width: 100%;
  margin-bottom: 1rem;

  @media ${respondTo.lg} {
    width: 80%;
    margin-bottom: 2rem;
  }

  /* Interior */
  :nth-child(1) {
    grid-column: 4 / 7;
    grid-row: 1 / 3;

    @media ${respondTo.xl} {
      grid-column: 3 / 7;
    }
  }
  /* Decoration */
  :nth-child(2) {
    grid-column: 11 / 14;
    grid-row: 1 / 3;

    @media ${respondTo.xl} {
      grid-column: 11 / 15;
    }
  }
  /* Exterior */
  :nth-child(3) {
    grid-column: 3 / 6;
    grid-row: 3 / 5;

    @media ${respondTo.xl} {
      grid-column: 2 / 6;
    }
  }
  /* Planning */
  :nth-child(4) {
    grid-column: 12 / 15;
    grid-row: 3 / 5;

    @media ${respondTo.xl} {
      grid-column: 12 / 16;
    }
  }
  /* Design */
  :nth-child(5) {
    grid-column: 4 / 7;
    grid-row: 5 / -1;

    @media ${respondTo.xl} {
      grid-column: 3 / 7;
    }
  }
  /* Execution */
  :nth-child(6) {
    grid-column: 11 / 14;
    grid-row: 5 / -1;

    @media ${respondTo.xl} {
      grid-column: 11 / 16;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.tertiary};
    font-size: 1rem;
    text-align: justify;
  }
`;

export const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    font-size: 2rem;
    color: #4b4b4b;
    margin-right: 1rem;
  }
`;

export const ImageWrapper = styled(motion.div)`
  grid-column: 7 /11;
  grid-row: 2 / 6;
  width: 100%;

  @media ${respondTo.lg} {
    width: 60%;
  }
  @media ${respondTo.md} {
    width: 70%;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

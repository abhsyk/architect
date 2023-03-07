import styled from 'styled-components';
import { motion } from 'framer-motion';
import { respondTo } from '../../../styles';

// Styles
export const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Banner = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.primary};
  position: absolute;
  top: 30%;
  left: 15%;
  user-select: none;

  @media ${respondTo.lg} {
    left: 10%;
  }

  h1 {
    font-size: 4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    width: 50%;
    line-height: 5rem;
    letter-spacing: 0.1rem;
    text-shadow: 0 6px 20px rgba(0, 0, 0, 0.7);

    @media ${respondTo.xl} {
      font-size: 3.6rem;
      line-height: 4rem;
      width: 60%;
    }

    @media ${respondTo.lg} {
      font-size: 3.4rem;
      line-height: 3.2rem;
      width: 80%;
    }

    @media ${respondTo.sm} {
      font-size: 3rem;
      line-height: 2.8rem;
    }
  }

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
    width: 70%;
    line-height: 2rem;
    letter-spacing: 0.05rem;
    margin-bottom: 3rem;
    text-shadow: 0 3px 15px rgba(0, 0, 0, 0.7);

    @media ${respondTo.xl} {
      font-size: 1.8rem;
    }
    @media ${respondTo.sm} {
      font-size: 1.6rem;
    }
  }

  button {
    width: 14rem;
    height: 3rem;
    border: none;
    font-family: ${({ theme }) => theme.fonts.seconday};
    font-size: 1rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.7);
    cursor: pointer;

    @media ${respondTo.xl} {
      width: 12rem;
      height: 2.5rem;
      font-size: 0.8rem;
    }
    @media ${respondTo.sm} {
      width: 14rem;
      height: 3rem;
      font-size: 1rem;
    }
  }
`;

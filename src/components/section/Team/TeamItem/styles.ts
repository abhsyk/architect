import { motion } from 'framer-motion';
import styled from 'styled-components';
import { respondTo } from '../../../../styles';

// Styles
export const Card = styled(motion.div)`
  position: relative;
  width: 22rem;
  height: 30rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  overflow: hidden;

  :hover .info {
    opacity: 1;
  }

  @media ${respondTo.xl} {
    width: 20rem;
  }
  @media ${respondTo.lg} {
    width: 25rem;
    margin-bottom: 3rem;
  }
  @media ${respondTo.sm} {
    width: 20rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1.5rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: all 0.4s ease-out;

  /* Name */
  h2 {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.8rem;
  }

  /* Position */
  h3 {
    font-family: ${({ theme }) => theme.fonts.seconday};
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.red};
    margin-bottom: 1rem;
  }

  /* Description */
  p {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1.5rem;
  }

  button {
    width: 6rem;
    height: 1.8rem;
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    border-radius: 0.2rem;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

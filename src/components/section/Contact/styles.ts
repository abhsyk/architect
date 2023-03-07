import { motion } from 'framer-motion';
import styled from 'styled-components';
import { respondTo } from '../../../styles';

// Styles
export const StyledContact = styled(motion.div)`
  width: 100%;
  height: 80vh;
  background: ${({ theme }) => theme.colors.darkGrey2};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  width: 60%;
  height: 38rem;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.5);

  @media ${respondTo.xl} {
    width: 80%;
    height: 36rem;
  }

  @media ${respondTo.lg} {
    width: 90%;
    height: 32rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 3rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 2rem;

    @media ${respondTo.lg} {
      margin-bottom: 1rem;
    }
    @media ${respondTo.md} {
      font-size: 2.5rem;
    }
  }
`;

export const Left = styled.div`
  width: 35%;
  background: linear-gradient(rgba(10, 10, 10, 0.6), rgba(22, 22, 22, 0.9)),
    url(images/contact-bg.jpg) center no-repeat;

  @media ${respondTo.lg} {
    width: 0;
  }
`;

export const Right = styled.div`
  width: 65%;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 3rem;
  text-align: center;

  @media ${respondTo.xl} {
    width: 100%;
  }
  @media ${respondTo.lg} {
    padding-top: 2rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 20rem;
    height: 3rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    margin-top: 2rem;
    font-family: ${({ theme }) => theme.fonts.seconday};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 2px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;

    @media ${respondTo.sm} {
      margin-top: 2.5rem;
      width: 18rem;
      height: 2.5rem;
    }
  }
`;

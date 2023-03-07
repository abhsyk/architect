import { motion } from 'framer-motion';
import styled from 'styled-components';
import { respondTo } from '../../../styles';
import { SocialMedia } from '../../common';

// Styles
export const StyledSidebar = styled(motion.div)`
  position: fixed;
  background: ${({ theme }) => theme.colors.white};
  width: 25rem;
  height: 100vh;
  top: 0;
  right: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  z-index: 100;

  @media ${respondTo.sm} {
    width: 95%;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Item = styled.li`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;

  span {
    color: ${({ theme }) => theme.colors.darkGray};
    position: relative;
    cursor: pointer;

    @media ${respondTo.xl} {
      font-size: 1.8rem;
    }
    @media ${respondTo.md} {
      margin: 0.5rem 0;
    }

    ::before {
      content: attr(data-content);
      /* background-color: ${({ theme }) => theme.colors.primary}; */

      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      color: ${({ theme }) => theme.colors.primary};
      overflow: hidden;
      white-space: nowrap;
      transition: width 0.3s ease-in-out;
    }

    :hover::before {
      width: 100%;
    }
  }
`;

export const Social = styled(SocialMedia)`
  position: absolute;
  width: 100%;
  bottom: 2rem;
  display: flex;
  justify-content: center;

  a {
    transition: color 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 50;
`;

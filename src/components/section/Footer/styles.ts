import styled from 'styled-components';
import { respondTo } from '../../../styles';

// Styles
export const StyledFooter = styled.div`
  width: 100%;
  height: 10rem;
  background: #17181b;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;

  @media ${respondTo.lg} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

export const Content = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media ${respondTo.xl} {
    width: 80%;
  }

  @media ${respondTo.lg} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Copyright = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};

  @media ${respondTo.lg} {
    padding-bottom: 1rem;
  }
`;

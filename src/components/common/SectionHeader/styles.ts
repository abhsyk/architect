import styled from 'styled-components';
import { respondTo } from '../../../styles';

// Styles
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 5rem;

  @media ${respondTo.lg} {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.seconday};
    font-size: 2.5rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.darkGray};
    margin-bottom: 2rem;
  }
`;

export const Underline = styled.div`
  width: 10rem;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary};
`;

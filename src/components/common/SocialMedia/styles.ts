import styled from 'styled-components';

// Styles
export const StyledSocial = styled.div`
  display: flex;

  a {
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.grey};
    cursor: pointer;
  }
`;

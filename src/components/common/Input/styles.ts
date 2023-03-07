import styled from 'styled-components';
import { respondTo } from '../../../styles';

// Styles
export const StyledInput = styled.div`
  position: relative;

  .field {
    width: 25rem;
    background-color: transparent;
    border: none;
    border-bottom: 0.2rem dashed ${({ theme }) => theme.colors.darkGray};
    margin: 1.5rem 0;
    padding: 1rem 1rem 1rem 0;
    font-family: ${({ theme }) => theme.fonts.seconday};
    font-size: 1.2rem;
    color: #4b4b4b;

    @media ${respondTo.xl} {
      margin: 1.4rem 0;
      width: 32rem;
    }
    @media ${respondTo.lg} {
      width: 28rem;
    }
    @media ${respondTo.md} {
      width: 24rem;
    }
    @media ${respondTo.sm} {
      width: 18rem;
    }

    :focus {
      border-bottom-style: solid;
    }
  }

  input {
    height: 2rem;

    :focus ~ label,
    :not(:placeholder-shown) ~ label {
      transform: translateY(1.9rem);
      font-size: 0.8rem;

      @media ${respondTo.lg} {
        transform: translateY(2.2rem);
      }
    }
  }

  textarea {
    height: 3rem;
    resize: none;
    overflow: hidden;

    :focus ~ label,
    :not(:placeholder-shown) ~ label {
      transform: translateY(1.7rem);
      font-size: 0.8rem;

      @media ${respondTo.lg} {
        transform: translateY(2.2rem);
      }
    }
  }

  label {
    position: absolute;
    left: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 1.2rem;
    color: #4b4b4b;
    text-transform: uppercase;
    pointer-events: none;
    bottom: 2rem;
    transition: all 0.3s;
  }
`;

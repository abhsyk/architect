import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // TextareaHTMLAttributes<HTMLTextAreaElement>
  label: string;
}

const Input: FC<Props> = ({ label, ...rest }) => {
  return (
    <StyledInput>
      <input {...rest} className="field" placeholder=" " />
      <label htmlFor={rest.id}>{label}</label>
    </StyledInput>
  );
};

// Styles
const StyledInput = styled.div`
  position: relative;

  .field {
    width: 25rem;
    background-color: transparent;
    border: none;
    border-bottom: 0.2rem dashed #636363;
    margin: 1.5rem 0;
    padding: 1rem 1rem 1rem 0;
    font-family: 'Muli', serif;
    font-size: 1.2rem;
    color: #4b4b4b;

    :focus {
      border-bottom-style: solid;
    }

    :focus ~ label,
    :not(:placeholder-shown) ~ label {
      transform: translateY(-1.4rem);
      font-size: 0.8rem;
    }
  }

  input {
    height: 2rem;
  }

  label {
    position: absolute;
    left: 0;
    font-family: 'Baloo Da 2', serif;
    font-size: 1.2rem;
    color: #4b4b4b;
    text-transform: uppercase;
    pointer-events: none;
    bottom: 2rem;
    transition: all 0.3s;
  }
`;

export default Input;

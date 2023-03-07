import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { StyledInput } from './styles';

interface Props
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  textarea?: boolean;
}

const Input: FC<Props> = ({ label, textarea, ...rest }) => {
  return (
    <StyledInput>
      {textarea ? (
        <textarea {...rest} className="field" placeholder=" "></textarea>
      ) : (
        <input {...rest} className="field" placeholder=" " />
      )}
      <label htmlFor={rest.id}>{label}</label>
    </StyledInput>
  );
};

export default Input;

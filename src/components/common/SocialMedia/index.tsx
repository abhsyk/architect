import { FC } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const SocialMedia: FC<Props> = ({ className }) => {
  return (
    <StyledSocial className={className}>
      <a>
        <FaFacebookF />
      </a>
      <a>
        <FaInstagram />
      </a>
      <a>
        <FaTwitter />
      </a>
    </StyledSocial>
  );
};

// Styles
const StyledSocial = styled.div`
  display: flex;

  a {
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.grey};
    cursor: pointer;
  }
`;

export default SocialMedia;

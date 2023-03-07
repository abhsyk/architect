import { FC } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { StyledSocial } from './styles';

type Props = {
  className?: string;
};

const SocialMedia: FC<Props> = ({ className }) => {
  return (
    <StyledSocial className={className}>
      <a href="/">
        <FaFacebookF />
      </a>
      <a href="/">
        <FaInstagram />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
    </StyledSocial>
  );
};

export default SocialMedia;

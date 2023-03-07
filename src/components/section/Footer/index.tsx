import { FC } from 'react';
import { SocialMedia } from '../../common';
import { Content, Copyright, StyledFooter } from './styles';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Content>
        <Copyright>Copyright &copy; {new Date().getFullYear()} XYZ</Copyright>
        <SocialMedia />
      </Content>
    </StyledFooter>
  );
};

export default Footer;

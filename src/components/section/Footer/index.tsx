import { FC } from 'react';
import { Content, Copyright, Social, StyledFooter } from './styles';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Content>
        <Copyright>Copyright &copy; {new Date().getFullYear()} XYZ</Copyright>
        <Social />
      </Content>
    </StyledFooter>
  );
};

export default Footer;

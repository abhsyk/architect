import { FC } from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Content>
        <Copyright>Copyright &copy; 2023 XYZ</Copyright>
        <Social>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </Social>
      </Content>
    </StyledFooter>
  );
};

// Styles
const StyledFooter = styled.div`
  width: 100%;
  height: 10rem;
  background: #17181b;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;

const Copyright = styled.div`
  font-family: 'Baloo Da 2', serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const Social = styled.div`
  svg {
    margin: 0 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export default Footer;

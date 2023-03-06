import { FC } from 'react';
import styled from 'styled-components';
import { SocialMedia } from '../../common';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Content>
        <Copyright>Copyright &copy; 2023 XYZ</Copyright>
        <SocialMedia />
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
  padding-top: 6rem;
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

export default Footer;

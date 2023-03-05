import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../../styles';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      {children}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  /* display: none; */
`;

export default Layout;

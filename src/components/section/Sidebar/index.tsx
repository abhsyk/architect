import { FC } from 'react';
import styled from 'styled-components';

const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <Menu>
        <Item>
          <a href="#" data-content="Home">
            Home
          </a>
        </Item>
        <Item>
          <a href="#" data-content="About">
            About
          </a>
        </Item>
        <Item>
          <a href="#" data-content="Team">
            Team
          </a>
        </Item>
        <Item>
          <a href="#" data-content="Pricing">
            Pricing
          </a>
        </Item>
        <Item>
          <a href="#" data-content="Contact">
            Contact
          </a>
        </Item>
      </Menu>
    </StyledSidebar>
  );
};

// Styles
const StyledSidebar = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.colors.white};
  width: 20rem;
  height: 100vh;
  top: 0;
  right: 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const Menu = styled.ul`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Item = styled.li`
  text-align: center;

  a {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.grey};
    position: relative;

    ::before {
      content: attr(data-content);
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      color: ${({ theme }) => theme.colors.primary};
      overflow: hidden;
      white-space: nowrap;
      transition: width 0.3s ease-in-out;
    }

    :hover::before {
      width: 100%;
    }
  }
`;

export default Sidebar;

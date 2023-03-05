import { FC } from 'react';
import styled from 'styled-components';
import { Input } from '../../common';

const Contact: FC = () => {
  return (
    <StyledContact>
      <Wrapper>
        <Left />
        <Right>
          <form>
            <Input label="Full Name" type="text" />
            <Input label="Email" type="email" />
            <Input label="Message" type="text" />
          </form>
        </Right>
      </Wrapper>
    </StyledContact>
  );
};

// Styles
const StyledContact = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #272727;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div``;

const Left = styled.div``;

const Right = styled.div``;

export default Contact;

import { FC } from 'react';
import styled from 'styled-components';

const Contact: FC = () => {
  return (
    <StyledContact>
      <Wrapper>
        <Left />
        <Right>
          <form action="">
            <div className="input-group">
              <input type="text" className="field" />
              <label className="input-label">Full Name</label>
            </div>
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

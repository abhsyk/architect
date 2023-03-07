import { FC } from 'react';
import { useScroll } from '../../../hooks/useScroll';
import { fadeIn } from '../../../styles';
import { Input } from '../../common';
import { containerAnim } from './animations';
import { Left, Right, StyledContact, Wrapper } from './styles';

const Contact: FC = () => {
  const { element, controls } = useScroll();

  return (
    <StyledContact
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      ref={element}
      id="contact"
    >
      <Wrapper variants={containerAnim} initial="hidden" animate="show">
        <Left />
        <Right>
          <h1>Contact</h1>
          <form>
            <Input label="Full Name" type="text" />
            <Input label="Email" type="email" />
            <Input textarea label="Message" type="text" />
          </form>
          <button type="submit">Submit</button>
        </Right>
      </Wrapper>
    </StyledContact>
  );
};

export default Contact;

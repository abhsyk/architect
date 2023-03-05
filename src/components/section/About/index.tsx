import { FC } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../../../styles';

const About: FC = () => {
  return (
    <StyledAbout>
      <SectionHeader>
        <h1>About</h1>
        <div className="underline" />
      </SectionHeader>
      <Services></Services>
    </StyledAbout>
  );
};

const StyledAbout = styled.div``;

const Services = styled.div``;

export default About;

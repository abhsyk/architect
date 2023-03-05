import { FC } from 'react';
import styled from 'styled-components';
import { SectionHeader, TeamItem } from '../../common';

const Team: FC = () => {
  return (
    <StyledTeam>
      <SectionHeader title="Team" />
      <Cards>
        <TeamItem
          name="John Smith"
          position="CEO"
          description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"'
          image="images/person-1.jpg"
        />
        <TeamItem
          name="John Smith"
          position="CEO"
          description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"'
          image="images/person-2.jpg"
        />
        <TeamItem
          name="John Smith"
          position="CEO"
          description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"'
          image="images/person-3.jpg"
        />
      </Cards>
    </StyledTeam>
  );
};

// Styles
const StyledTeam = styled.div``;

const Cards = styled.div``;

export default Team;

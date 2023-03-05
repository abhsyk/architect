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
          name="Ann Brown"
          position="Designer"
          description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"'
          image="images/person-2.jpg"
        />
        <TeamItem
          name="Mary Doe"
          position="Architect"
          description='"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, impedit!"'
          image="images/person-3.jpg"
        />
      </Cards>
    </StyledTeam>
  );
};

// Styles
const StyledTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem 8rem 2rem;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 4rem;
`;

export default Team;
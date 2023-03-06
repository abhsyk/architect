import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';
import { useScroll } from '../../../hooks/useScroll';
import { fade } from '../../../styles';
import { SectionHeader, TeamItem } from '../../common';

const Team: FC = () => {
  const { element, controls } = useScroll();

  return (
    <StyledTeam
      variants={fade}
      initial="hidden"
      animate={controls}
      ref={element}
    >
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
          description='"Ut iaculis justo vitae risus bibendum vestibulum. Donec mi sapien, tempor at tortor vel."'
          image="images/person-2.jpg"
        />
        <TeamItem
          name="Mary Doe"
          position="Architect"
          description='"Fusce ullamcorper eu massa id rhoncus. Duis non sem ac quam tincidunt iaculis."'
          image="images/person-3.jpg"
        />
      </Cards>
    </StyledTeam>
  );
};

// Styles
const StyledTeam = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 15rem 2rem;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 4rem;
`;

export default Team;

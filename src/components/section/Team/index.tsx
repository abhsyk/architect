import { FC } from 'react';
import { useScroll } from '../../../hooks/useScroll';
import { fadeIn } from '../../../styles';
import { SectionHeader, TeamItem } from '../../common';
import { Cards, StyledTeam } from './styles';

const Team: FC = () => {
  const { element, controls } = useScroll();

  return (
    <StyledTeam
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      ref={element}
      id="team"
    >
      <SectionHeader title="Our Team" />
      <Cards>
        <TeamItem
          name="Geghard Stepan"
          position="CEO"
          description='"Pellentesque tempor convallis bibendum. Curabitur mattis odio sed orci bibendum viverra."'
          image="images/person-1.jpg"
        />
        <TeamItem
          name="Karine Siran"
          position="Designer"
          description='"Ut iaculis justo vitae risus bibendum vestibulum. Donec mi sapien, tempor at tortor vel."'
          image="images/person-2.jpg"
        />
        <TeamItem
          name="Elen Anahit"
          position="Architect"
          description='"Fusce ullamcorper eu massa id rhoncus. Duis non sem ac quam tincidunt iaculis."'
          image="images/person-3.jpg"
        />
      </Cards>
    </StyledTeam>
  );
};

export default Team;

import { FC } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../../common';

const Team: FC = () => {
  return (
    <StyledTeam>
      <SectionHeader title="Team" />
    </StyledTeam>
  );
};

// Styles
const StyledTeam = styled.div``;

export default Team;

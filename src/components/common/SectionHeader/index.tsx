import { FC } from 'react';
import styled from 'styled-components';
import { respondTo } from '../../../styles';

type Props = {
  title: string;
};

const SectionHeader: FC<Props> = ({ title }) => {
  return (
    <Header>
      <h1>{title}</h1>
      <div className="underline" />
    </Header>
  );
};

// Styles
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 5rem;

  @media ${respondTo.lg} {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  h1 {
    font-family: 'Muli', serif;
    font-size: 2.5rem;
    font-weight: 300;
    color: #4b4b4b;
    margin-bottom: 2rem;
  }

  .underline {
    width: 8rem;
    height: 0.1rem;
    background-color: #c29525;
  }
`;

export default SectionHeader;

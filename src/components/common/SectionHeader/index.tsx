import { FC } from 'react';
import { Header, Underline } from './styles';

type Props = {
  title: string;
};

const SectionHeader: FC<Props> = ({ title }) => {
  return (
    <Header>
      <h1>{title}</h1>
      <Underline />
    </Header>
  );
};

export default SectionHeader;

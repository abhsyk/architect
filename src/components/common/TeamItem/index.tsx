import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  image: string;
  name: string;
  position: string;
  description: string;
};

const TeamItem: FC<Props> = ({ name, position, description, image }) => {
  return (
    <Card>
      <ImageWrapper>
        <img src={image} alt={position} />
      </ImageWrapper>
      <Info>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <p>{description}</p>
        <button>Read More</button>
      </Info>
    </Card>
  );
};

// Styles
const Card = styled.div``;

const ImageWrapper = styled.div``;

const Info = styled.div``;

export default TeamItem;

import { FC } from 'react';
import { Card, ImageWrapper, Info } from './styles';
import { FaArrowRight } from 'react-icons/fa';

type Props = {
  image: string;
  name: string;
  position: string;
  description: string;
};

const TeamItem: FC<Props> = ({ name, position, description, image }) => {
  return (
    <Card
      whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
      whileTap={{ scale: 0.95 }}
    >
      <ImageWrapper>
        <img src={image} alt={position} />
      </ImageWrapper>
      <Info className="info">
        <h2>{name}</h2>
        <h3>{position}</h3>
        <p>{description}</p>
        <button>
          Read More <FaArrowRight />
        </button>
      </Info>
    </Card>
  );
};

export default TeamItem;

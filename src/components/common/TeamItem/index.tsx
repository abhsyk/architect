import { motion } from 'framer-motion';
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
    <Card
      whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
      whileTap={{ scale: 0.95 }}
    >
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
const Card = styled(motion.div)`
  position: relative;
  width: 20rem;
  height: 30rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  padding: 1rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);

  /* Name */
  h2 {
    font-family: 'Baloo Da 2', serif;
    color: #eee;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.8rem;
  }

  /* Position */
  h3 {
    font-family: 'Muli', serif;
    font-size: 1.4rem;
    font-weight: 500;
    color: #a52a2a;
    margin-bottom: 1rem;
  }

  /* Description */
  p {
    font-family: 'Baloo da 2', serif;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1.5rem;
  }

  button {
    width: 6rem;
    height: 1.8rem;
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    font-family: 'Baloo Da 2', serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    border-radius: 0.2rem;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  }
`;

export default TeamItem;

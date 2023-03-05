import { FC } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../../../styles';
import {
  FaPenNib,
  FaPaintRoller,
  FaPencilAlt,
  FaPaintBrush,
  FaRuler,
  FaBuilding,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const serviceItems = [
  {
    icon: <FaPenNib />,
    title: 'Interior',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
  },
  {
    icon: <FaPaintRoller />,
    title: 'Exterior',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
  },
  {
    icon: <FaPencilAlt />,
    title: 'Design',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Decoration',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
  },
  {
    icon: <FaRuler />,
    title: 'Planning',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
  },
  {
    icon: <FaBuilding />,
    title: 'Execution',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, officia! Necessitatibus delectus sed dicta corrupti voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!',
  },
];

const renderServiceItem = () => {
  return serviceItems.map((item) => (
    <Service key={item.title} variants={serviceAnim}>
      <ServiceHeader>
        {item.icon}
        <h3>{item.title}</h3>
      </ServiceHeader>
      <p>{item.text}</p>
    </Service>
  ));
};

const About: FC = () => {
  return (
    <StyledAbout>
      <SectionHeader>
        <h1>About</h1>
        <div className="underline" />
      </SectionHeader>
      <Services variants={container} initial="hidden" animate="show">
        {renderServiceItem()}
        <ImageWrapper variants={serviceAnim}>
          <img src="/images/house.png" alt="house" />
        </ImageWrapper>
      </Services>
    </StyledAbout>
  );
};

// Styles
const StyledAbout = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding-bottom: 8rem;
`;

const Services = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(6, 4rem);
  grid-row-gap: 2rem;
`;

const Service = styled(motion.div)`
  width: 100%;
  margin-bottom: 1rem;

  /* Interior */
  :nth-child(1) {
    grid-column: 4 / 7;
    grid-row: 1 / 3;
  }
  /* Exterior */
  :nth-child(2) {
    grid-column: 3 / 6;
    grid-row: 3 / 5;
  }
  /* Design */
  :nth-child(3) {
    grid-column: 4 / 7;
    grid-row: 5 / -1;
  }
  /* Decoration */
  :nth-child(4) {
    grid-column: 11 / 14;
    grid-row: 1 / 3;
  }
  /* Planning */
  :nth-child(5) {
    grid-column: 12 / 15;
    grid-row: 3 / 5;
  }
  /* Execution */
  :nth-child(6) {
    grid-column: 11 / 14;
    grid-row: 5 / -1;
  }

  p {
    font-family: 'Josefin Slab', serif;
    font-size: 1rem;
    text-align: justify;
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  svg {
    font-size: 2rem;
    color: #4b4b4b;
    margin-right: 1rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  grid-column: 7 /11;
  grid-row: 2 / 6;
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

// Animation variables
const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.25 },
  },
};

const serviceAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

export default About;

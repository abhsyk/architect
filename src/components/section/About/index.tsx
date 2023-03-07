import { FC } from 'react';
import styled from 'styled-components';
import {
  FaPenNib,
  FaPaintRoller,
  FaPencilAlt,
  FaPaintBrush,
  FaRuler,
  FaBuilding,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../common';
import { useScroll } from '../../../hooks/useScroll';
import { fade, respondTo } from '../../../styles';

const serviceItems = [
  {
    icon: <FaPenNib />,
    title: 'Interior',
    text: 'Duis sodales est a pharetra laoreet. Etiam congue quam sit amet egestas fringilla. Nunc non vulputate orci, sit amet ornare odio.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Decoration',
    text: 'Nulla facilisi. Cras interdum diam nec maximus finibus. Sed mattis ex ac quam blandit, et bibendum dui convallis.',
  },
  {
    icon: <FaPaintRoller />,
    title: 'Exterior',
    text: 'Aliquam odio purus, pulvinar bibendum eleifend eu, malesuada eget nibh. Donec molestie dui et risus elementum molestie eget vitae velit. Etiam elementum sed odio sed mollis.',
  },
  {
    icon: <FaRuler />,
    title: 'Planning',
    text: 'Vestibulum vel leo eget ligula accumsan sodales. Maecenas sed finibus purus. In lacus diam, finibus sed velit nec, ornare dignissim. Integer ornare eleifend justo.',
  },
  {
    icon: <FaPencilAlt />,
    title: 'Design',
    text: 'Euismod lorem congue id. Suspendisse potenti. Nam tempus mi eget turpis vulputate, ut consequat tellus suscipit. Nunc maximus vel arcu a efficitur.',
  },
  {
    icon: <FaBuilding />,
    title: 'Execution',
    text: 'Mauris feugiat et augue at finibus. Pellentesque non purus nec libero hendrerit commodo ac vitae mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
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
  const { element, controls } = useScroll();

  return (
    <StyledAbout
      variants={fade}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <SectionHeader title="About" />
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
const StyledAbout = styled(motion.div)`
  width: 100%;
  background-color: #f5f5f5;
  padding-top: 1rem;
  padding-bottom: 8rem;

  @media ${respondTo.md} {
    padding-top: 1.8rem;
    padding-bottom: 5rem;
  }
`;

const Services = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(6, 4rem);
  grid-row-gap: 2rem;

  @media ${respondTo.lg} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Service = styled(motion.div)`
  width: 100%;
  margin-bottom: 1rem;

  @media ${respondTo.lg} {
    width: 80%;
    margin-bottom: 2rem;
  }

  /* Interior */
  :nth-child(1) {
    grid-column: 4 / 7;
    grid-row: 1 / 3;

    @media ${respondTo.xl} {
      grid-column: 3 / 7;
    }
  }
  /* Decoration */
  :nth-child(2) {
    grid-column: 11 / 14;
    grid-row: 1 / 3;

    @media ${respondTo.xl} {
      grid-column: 11 / 15;
    }
  }
  /* Exterior */
  :nth-child(3) {
    grid-column: 3 / 6;
    grid-row: 3 / 5;

    @media ${respondTo.xl} {
      grid-column: 2 / 6;
    }
  }
  /* Planning */
  :nth-child(4) {
    grid-column: 12 / 15;
    grid-row: 3 / 5;

    @media ${respondTo.xl} {
      grid-column: 12 / 16;
    }
  }
  /* Design */
  :nth-child(5) {
    grid-column: 4 / 7;
    grid-row: 5 / -1;

    @media ${respondTo.xl} {
      grid-column: 3 / 7;
    }
  }
  /* Execution */
  :nth-child(6) {
    grid-column: 11 / 14;
    grid-row: 5 / -1;

    @media ${respondTo.xl} {
      grid-column: 11 / 16;
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.tertiary};
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

  @media ${respondTo.xl} {
    grid-row: 3 / -1;
  }
  @media ${respondTo.lg} {
    width: 60%;
  }
  @media ${respondTo.lg} {
    width: 70%;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

// Animation variables
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.3,
      // when: 'beforeChildren',
    },
  },
};

const serviceAnim = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default About;

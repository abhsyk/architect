import { motion } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';

const Hero: FC = () => {
  return (
    <StyledHero>
      <ImageWrapper>
        <motion.img
          variants={bgAnim}
          initial="hidden"
          animate="show"
          src="/images/hero-bg.jpg"
          alt=""
        />
      </ImageWrapper>
      <Banner variants={container} initial="hidden" animate="show">
        <motion.h1 variants={titleAnim}>
          Architecture & Interior Design
        </motion.h1>
        <motion.p variants={titleAnim}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </motion.p>
        <motion.button variants={titleAnim}>Discover now</motion.button>
      </Banner>
    </StyledHero>
  );
};

// Styles
const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Banner = styled(motion.div)`
  font-family: 'Baloo Da 2', serif;
  position: absolute;
  top: 30%;
  left: 15%;
  user-select: none;

  h1 {
    font-size: 4rem;
    font-weight: 300;
    color: #fff;
    width: 50%;
    line-height: 5rem;
    letter-spacing: 0.1rem;
    text-shadow: 0 30px 50px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 2rem;
    color: #fff;
    width: 70%;
    line-height: 2rem;
    letter-spacing: 0.05rem;
    margin-bottom: 3rem;
    text-shadow: 0 30px 50px rgba(0, 0, 0, 0.7);
  }

  button {
    width: 14rem;
    height: 3rem;
    border: none;
    font-family: 'Muli', serif;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: #c29525;
    color: #fff;
    text-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

// Animation variants
const container = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: {
      duration: 2,
      ease: 'easeOut',
      staggerChildren: 0.5,
    },
  },
};

const titleAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

const bgAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 10,
    },
  },
};

export default Hero;

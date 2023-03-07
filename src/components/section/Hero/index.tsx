import { motion } from 'framer-motion';
import { FC } from 'react';
import { bannerAnim, bgAnim, titleAnim } from './animations';
import { Banner, ImageWrapper, StyledHero } from './styles';

const Hero: FC = () => {
  return (
    <StyledHero id="home">
      <ImageWrapper>
        <motion.img
          variants={bgAnim}
          initial="hidden"
          animate="show"
          src="/images/hero-bg.jpg"
          alt="hero"
        />
      </ImageWrapper>
      <Banner variants={bannerAnim} initial="hidden" animate="show">
        <motion.h1 variants={titleAnim}>
          Architecture & Interior Design
        </motion.h1>
        <motion.p variants={titleAnim}>
          Etiam rutrum, felis in placerat feugiat, dui neque porttitor.
        </motion.p>
        <motion.button variants={titleAnim}>Discover now</motion.button>
      </Banner>
    </StyledHero>
  );
};

export default Hero;

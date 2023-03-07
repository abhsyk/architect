import { FC } from 'react';
import { SectionHeader } from '../../common';
import { useScroll } from '../../../hooks/useScroll';
import { fade } from '../../../styles';
import {
  ImageWrapper,
  Service,
  ServiceHeader,
  Services,
  StyledAbout,
} from './styles';
import { serviceItems } from './services';
import { containerAnim, serviceAnim } from './animations';

const renderServiceItems = () => {
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
      id="about"
    >
      <SectionHeader title="About" />
      <Services variants={containerAnim} initial="hidden" animate="show">
        {/* Service items */}
        {renderServiceItems()}
        <ImageWrapper variants={serviceAnim}>
          <img src="/images/house.png" alt="house" />
        </ImageWrapper>
      </Services>
    </StyledAbout>
  );
};

export default About;

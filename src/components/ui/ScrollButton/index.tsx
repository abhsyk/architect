import { AnimatePresence, motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollButton: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // the scroll event fires when the document view has been scrolled
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variants={scrollAnim}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <FaArrowUp />
        </Button>
      )}
    </AnimatePresence>
  );
};

// Styles
const Button = styled(motion.div)`
  position: fixed;
  right: 2.5rem;
  bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  width: 3rem;
  height: 3rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 50%;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

// Animation variants
const scrollAnim = {
  initial: { y: '.5rem', opacity: 0 },
  animate: {
    y: '0rem',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default ScrollButton;

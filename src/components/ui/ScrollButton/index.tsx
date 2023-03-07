import { AnimatePresence } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { scrollAnim } from './animations';
import { Button } from './styles';

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

export default ScrollButton;

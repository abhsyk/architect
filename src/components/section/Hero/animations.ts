// Animation variables
export const bannerAnim = {
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

export const titleAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

export const bgAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 0.7,
    transition: {
      ease: 'easeOut',
      duration: 10,
    },
  },
};

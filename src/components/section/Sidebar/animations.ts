// Animation variables
export const containerAnim = {
  hidden: { opacity: 0, x: 300 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, x: 300, transition: { duration: 0.5 } },
};

export const bdAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

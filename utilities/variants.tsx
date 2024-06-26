export const navbarVariants = {
  open: { translateY: 0, transition: { duration: 0.5 } },
  closed: { translateY: -80, transition: { duration: 0.7 } },
}

export const menuInViewAnimation = {
  hidden: { translateY: -200 },
  visible: {
    translateY: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9],
      delay: 0.5,
    },
  },
}

export const mobileMenuVariants = {
  open: {
    maxHeight: '100%',
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
  closed: {
    maxHeight: 0,
    transition: { duration: 0.3 },
  },
}

export const mobileMenuContentVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

export const mobileMenuLeftToRightVariants = {
  open: { width: '100%', transition: { duration: 0.7, delay: 0.1 } },
  closed: { width: 0, transition: { duration: 0.7 } },
}

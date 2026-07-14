import type { Variants, Transition } from "motion/react";

export const easeOutSoft: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutSoft },
  },
};

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const cardHover = {
  y: -3,
  transition: { duration: 0.25, ease: easeOutSoft },
};

export const softSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.8,
};

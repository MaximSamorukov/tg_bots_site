import React from "react";
import { motion } from "motion/react";
import s from "./style.module.scss";

type ItemCardProps = {
  children: React.ReactNode;
  index: number;
};
export const ItemCard: React.FC<ItemCardProps> = ({ children, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={s.container}
    >
      {children}
    </motion.div>
  );
};

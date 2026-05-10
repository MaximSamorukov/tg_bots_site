import React from "react";
import { motion } from "motion/react";
import s from "./style.module.scss";

type ItemCardProps = {
  children: React.ReactNode;
  index: number;
};
export const ItemCard: React.FC<ItemCardProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={s.container}
    >
      {children}
    </motion.div>
  );
};

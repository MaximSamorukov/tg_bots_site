import type { ProjectItemType } from "@/widgets/Cases";
import { motion } from "motion/react";
import GHIcon from "@/assets/gh.svg?react";
import DeployIcon from "@/assets/deploy.svg?react";
import s from "./style.module.scss";
import { StackItem } from "../StackItem";

type ProjectItemProps = {
  active: boolean;
  type: string;
  name: string;
  title: string;
  description: string;
  github: string | null;
  deploy: string | null;
  image: string;
  index: number;
};

export const ProjectItem = ({
  index,
  type,
  name,
  title,
  description,
  github,
  deploy,
  image,
}: ProjectItemProps) => {
  return (
    <motion.div
      className={s.item}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className={s.item__title}>{title}</div>
    </motion.div>
  );
};

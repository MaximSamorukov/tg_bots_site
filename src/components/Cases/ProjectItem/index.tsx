import type { ProjectItemType } from "@/widgets/Cases";
import { motion } from "motion/react";
import GHIcon from "@/assets/gh.svg?react";
import DeployIcon from "@/assets/deploy.svg?react";
import s from "./style.module.scss";
import { StackItem } from "../StackItem";
import { ItemCard } from "@/components/Shared/ItemCard";
import { FormButton } from "../FormButton";

type ProjectItemProps = {
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
    <ItemCard index={index}>
      <div className={s.item}>
        <div className={s.item__image}>image</div>
        <div className={s.item__title}>{title}</div>
        <div className={s.item__description}>{description}</div>
        <FormButton label="Заказать" />
      </div>
    </ItemCard>
  );
};

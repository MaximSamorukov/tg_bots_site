import s from "./style.module.scss";
import { ItemCard } from "@/components/Shared/ItemCard";
import { FormButton } from "../FormButton";
import type { ITGBot } from "@/types";
import { useCallback } from "react";

type ProjectItemProps = {
  type: string;
  name: string;
  title: string;
  description: string;
  github: string | null;
  deploy: string | null;
  image: string;
  index: number;
  icon: string;
  onModalOpen: (arg: ITGBot) => void;
  item: ITGBot;
};

export const ProjectItem = ({
  index,
  title,
  description,
  icon,
  onModalOpen,
  item,
}: ProjectItemProps) => {
  const onOpenModal = useCallback(() => {
    onModalOpen(item);
  }, [item, onModalOpen]);
  return (
    <ItemCard index={index}>
      <div className={s.item}>
        <div className={s.item__image}>
          <img src={icon} alt={title} />
        </div>
        <div className={s.item__title}>{title}</div>
        <div className={s.item__description}>{description}</div>
        <FormButton label="Подробнее" onModalOpen={onOpenModal} />
      </div>
    </ItemCard>
  );
};

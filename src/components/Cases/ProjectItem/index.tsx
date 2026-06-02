import s from "./style.module.scss";
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
  icon: string;
  onModalOpen: () => void;
};

export const ProjectItem = ({
  index,
  title,
  description,
  icon,
  onModalOpen,
}: ProjectItemProps) => {
  return (
    <ItemCard index={index}>
      <div className={s.item}>
        <div className={s.item__image}>
          <img src={icon} alt={title} />
        </div>
        <div className={s.item__title}>{title}</div>
        <div className={s.item__description}>{description}</div>
        <FormButton label="Заказать" onModalOpen={onModalOpen} />
      </div>
    </ItemCard>
  );
};

import type { ITGBot } from "@/types";
import s from "./style.module.scss";

type DescriptionComponentProps = {
  description: ITGBot["fullData"]["description"];
};

export const DescriptionComponent: React.FC<DescriptionComponentProps> = ({
  description,
}) => {
  return (
    <div className={s.container}>
      <h3>Описание</h3>
      <p>{description}</p>
    </div>
  );
};

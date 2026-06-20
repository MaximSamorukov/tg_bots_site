import type { ITGBot } from "@/types";
import s from "./style.module.scss";

type TitleComponentProps = {
  title: ITGBot["fullData"]["title"];
};

export const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
    </div>
  );
};

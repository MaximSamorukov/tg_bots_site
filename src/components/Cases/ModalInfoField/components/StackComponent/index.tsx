import type { ITGBot } from "@/types";
import s from "./style.module.scss";

type StackComponentProps = {
  stack: ITGBot["fullData"]["stack"];
};

export const StackComponent: React.FC<StackComponentProps> = ({ stack }) => {
  return (
    <div className={s.stackContainer}>
      <div className={s.stackContainer__header}>
        <h3>Технологический стек</h3>
      </div>
      <div className={s.stackContainer__items}>
        {stack.map((tech, index) => (
          <div key={index}>{tech}</div>
        ))}
      </div>
    </div>
  );
};

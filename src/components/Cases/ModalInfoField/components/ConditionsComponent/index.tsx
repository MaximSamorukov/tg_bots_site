import type { ITGBot } from "@/types";
import s from "./style.module.scss";

type ConditionsComponentProps = {
  conditions: ITGBot["fullData"]["conditions"];
};

export const ConditionsComponent: React.FC<ConditionsComponentProps> = ({
  conditions,
}) => {
  return (
    <div className={s.container}>
      <h3>Условия размещения</h3>
      {conditions.map((condition, index) => (
        <div key={index} className="condition-item">
          <h4>
            {condition.name === "self-hosted" ? "Self-hosted" : "Подписка"}
          </h4>
          <p>{condition.description}</p>
          <span className="price">{condition.price} ₽</span>
        </div>
      ))}
    </div>
  );
};

import s from "./style.module.scss";
import { FormButton } from "../../../FormButton";

export const RequestComponent = () => {
  return (
    <div className={s.container}>
      <div className={s.container__titleContainer}>
        <h3>Заказать</h3>
      </div>
      <div className={s.container__inputContainer}>
        <input
          className={s.container__input}
          placeholder="телефон или email для связи"
        />
      </div>
      <div className={s.container__buttonContainer}>
        <FormButton label="Назначить консультацию" onModalOpen={() => {}} />
      </div>
    </div>
  );
};

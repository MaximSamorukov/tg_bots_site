import s from "./style.module.scss";
import { sendNotificationOnRequest } from "@/utils/checkIp";
import { FormButton } from "../../../FormButton";
import { useCallback, useState, type ChangeEvent } from "react";
import type { ITGBot } from "@/types";
type RequestComponentProps = {
  botName: ITGBot["fullData"]["title"];
};
export const RequestComponent: React.FC<RequestComponentProps> = ({
  botName,
}) => {
  const [userData, setUserData] = useState<string>();
  const [requestIsProceeding, setRequestIsProceeding] =
    useState<boolean>(false);
  const onInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserData(e.target.value);
  }, []);
  const onRequestConsultation = useCallback(() => {
    setRequestIsProceeding(true);
    setTimeout(() => {
      setRequestIsProceeding(false);
      setUserData("");
    }, 1500);
    sendNotificationOnRequest({
      question: `Потенциального заказчика интересует приложение: ${botName}`,
      contact: userData || "нет данных",
    });
  }, [userData, botName]);
  const btnLabel = requestIsProceeding
    ? "Запрос отправляется"
    : "Заказать консультацию";
  return (
    <div className={s.container}>
      <div className={s.container__titleContainer}>
        <h3>Заказать</h3>
      </div>
      <div className={s.container__inputContainer}>
        <input
          onChange={onInput}
          value={userData}
          className={s.container__input}
          placeholder="телефон или email для связи"
        />
      </div>
      <div className={s.container__buttonContainer}>
        <FormButton
          disabled={!userData}
          label={btnLabel}
          onModalOpen={onRequestConsultation}
        />
      </div>
    </div>
  );
};

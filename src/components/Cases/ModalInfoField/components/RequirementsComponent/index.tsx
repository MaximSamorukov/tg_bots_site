import type { ITGBot } from "@/types";
import s from "./style.module.scss";

type RequirementsComponentProps = {
  requirements: ITGBot["fullData"]["requirements"];
};

export const RequirementsComponent: React.FC<RequirementsComponentProps> = ({
  requirements,
}) => {
  return (
    <div className={s.container}>
      <h3>Системные требования</h3>
      <ul>
        <li>OS: {requirements.OS}</li>
        <li>RAM: {requirements.RAM}</li>
        <li>SSD: {requirements.SSD}</li>
        <li>Пиковая нагрузка: {requirements.peak_rpc}</li>
        <li>Максимальное кол-во пользователей: {requirements.concurrency}</li>
      </ul>
    </div>
  );
};

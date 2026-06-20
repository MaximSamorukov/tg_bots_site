import type { ITGBot } from "@/types";
import s from "./style.module.scss";

type ArchitectureComponentProps = {
  architecture: ITGBot["fullData"]["architecture"];
};

export const ArchitectureComponent: React.FC<ArchitectureComponentProps> = ({
  architecture,
}) => {
  return (
    <div className={s.container}>
      <h3>Архитектура</h3>
      <p>{architecture}</p>
    </div>
  );
};

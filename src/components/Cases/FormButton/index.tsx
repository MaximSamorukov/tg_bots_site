import { memo } from "react";
import s from "./style.module.scss";

type FormButtonPropsType = {
  label: string;
  onModalOpen: () => void;
};

export const FormButton: React.FC<FormButtonPropsType> = memo(
  ({ label, onModalOpen }) => {
    return (
      <div onClick={onModalOpen} className={s.container}>
        {label}
      </div>
    );
  },
);

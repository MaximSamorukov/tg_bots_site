import { memo } from "react";
import cn from "classnames";
import s from "./style.module.scss";

type FormButtonPropsType = {
  label: string;
  onModalOpen: () => void;
  disabled?: boolean;
};

export const FormButton: React.FC<FormButtonPropsType> = memo(
  ({ label, onModalOpen, disabled }) => {
    return (
      <button
        disabled={disabled}
        onClick={onModalOpen}
        className={cn(s.container, { [s.container__disabled]: disabled })}
      >
        {label}
      </button>
    );
  },
);

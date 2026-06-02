import { memo, useState } from "react";
import s from "./style.module.scss";
import { useTranslation } from "@/providers/translations";

type FormButtonPropsType = {
  label: string;
  onModalOpen: () => void;
};

export const FormButton: React.FC<FormButtonPropsType> = memo(
  ({ label, onModalOpen }) => {
    const c = useTranslation();
    return (
      <div onClick={onModalOpen} className={s.container}>
        {label}
      </div>
    );
  },
);

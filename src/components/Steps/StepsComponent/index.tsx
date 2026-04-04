import React from "react";
import s from "./style.module.scss";
import { StepItem } from "../StepItem";
import { useTranslation } from "@/providers/translations";
import { PAGES } from "@/constants";

const arr = Array.from({ length: 5 }, () => null);

export const StepsComponent = () => {
  const c = useTranslation();
  return (
    <div className={s.container}>
      {c.t[PAGES.THIRD].map(({ step }) => (
        <StepItem key={step} label={step} />
      ))}
    </div>
  );
};

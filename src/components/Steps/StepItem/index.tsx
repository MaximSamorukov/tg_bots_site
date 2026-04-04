import React from "react";
import s from "./style.module.scss";

export const StepItem = ({ label }: { label: string }) => {
  return <div className={s.container}>{label}</div>;
};

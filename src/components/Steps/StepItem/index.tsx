import React from "react";
import s from "./style.module.scss";

export const StepItem = ({
  label,
  number,
}: {
  label: string;
  number: number;
}) => {
  return <div className={s.container}>{`${number}. ${label}`}</div>;
};

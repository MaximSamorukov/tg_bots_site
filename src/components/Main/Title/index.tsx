import React from "react";
import s from "./style.module.scss";

type TitlePropsType = {
  first: string;
  second: string;
};

export const Title: React.FC<TitlePropsType> = ({ first, second }) => {
  return (
    <div className={s.container}>
      <div className={s.container__first}>{first}</div>
      <div className={s.container__second}>{second}</div>
    </div>
  );
};

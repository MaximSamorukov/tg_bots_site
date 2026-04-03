import React from "react";
import s from "./style.module.scss";

type PointPropsType = {
  point: string;
};

export const Point: React.FC<PointPropsType> = ({ point }) => {
  return <div className={s.container}>{point}</div>;
};

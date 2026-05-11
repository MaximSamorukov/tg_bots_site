import React from "react";
import s from "./style.module.scss";
type Option = { option: string[] };

export type ComplexPointType = {
  type: string;
  options: Option[];
};

type PointPropsType = {
  point: ComplexPointType;
};

export const Point: React.FC<PointPropsType> = ({ point }) => {
  const { type, options } = point;
  return (
    <div className={s.c}>
      <div className={s.c__type}>{type}</div>
      <div className={s.c__options}>
        {options.map(({ option }) => {
          console.log(option);
          const str = option.join(", ");
          return <div className={s.c__option}>{str}</div>;
        })}
      </div>
    </div>
  );
};

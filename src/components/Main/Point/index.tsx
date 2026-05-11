import React from "react";
import s from "./style.module.scss";
type Option = { option: string[] };

export type ComplexPointType = {
  type: string;
  options: Option[];
  id: string;
};

type PointPropsType = {
  point: ComplexPointType;
};

export const Point: React.FC<PointPropsType> = ({ point }) => {
  const { type, options, id } = point;
  if (id === "contacts") {
    return (
      <div className={s.c}>
        <div className={s.c__type}>{type}</div>
        <div className={s.c__options}>
          <div className={s.c__option}>
            <span>Telegram:</span>
            <a
              href={"https://t.me/M_Camopykoff"}
              target="_blank"
              rel="noopener noreferrer"
            >
              @M_Camopykoff
            </a>
          </div>
          <div className={s.c__option}>
            <span>Email:</span>
            <a href={`mailto:maxim.samorukov@gmail.com`}>
              maxim.samorukov@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={s.c}>
      <div className={s.c__type}>{type}</div>
      <div className={s.c__options}>
        {options.map(({ option }) => {
          const str = option.join(", ");
          return <div className={s.c__option}>{str}</div>;
        })}
      </div>
    </div>
  );
};

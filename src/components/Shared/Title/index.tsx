import { useTranslation } from "@/providers/translations";
import cn from "classnames";
import s from "./style.module.scss";
import type { PAGES } from "@/constants";

type TitlePropsType = {
  item: (typeof PAGES)[keyof typeof PAGES];
};

export const Title: React.FC<TitlePropsType> = ({ item }) => {
  const c = useTranslation();
  const title = c.t.itemTitle[item].title;
  return <div className={s.container}>{title}</div>;
};

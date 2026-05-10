import { useTranslation } from "@/providers/translations";
import s from "./style.module.scss";
import type { PAGES } from "@/constants";

type TitlePropsType = {
  item: (typeof PAGES)[keyof typeof PAGES];
};

export const Title: React.FC<TitlePropsType> = ({ item }) => {
  const c = useTranslation();
  const title = c.t.itemTitle[item].title;
  const subtitle = c.t.itemTitle[item].subtitle;
  return (
    <div className={s.container}>
      <div className={s.container__title}>{title}</div>
      <div className={s.container__moto}>{subtitle}</div>
    </div>
  );
};

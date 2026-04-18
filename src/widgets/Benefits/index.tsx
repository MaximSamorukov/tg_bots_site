import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { BenefitItem } from "@/components/Benefits/BenefitItem";

export const Benefits = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.SECOND} className={s.container}>
      <div className={s.data__title}>{c.t.pageTitle[PAGES.SECOND]}</div>
      <div className={s.data}>
        {c.t[PAGES.SECOND].map((i, index) => (
          <BenefitItem
            index={index}
            key={i.title}
            title={i.title}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
};

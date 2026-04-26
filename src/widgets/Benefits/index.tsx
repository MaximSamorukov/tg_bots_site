import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { BenefitItem } from "@/components/Benefits/BenefitItem";
import { Title } from "@/components/Shared/Title";

export const Benefits = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.SECOND} className={s.container}>
      <Title item={PAGES.SECOND} />
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

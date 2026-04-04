import { StepsComponent } from "@/components/Steps/StepsComponent";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";

export const Steps = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.THIRD} className={s.container}>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle[PAGES.THIRD]}</div>
        <StepsComponent />
      </div>
    </div>
  );
};

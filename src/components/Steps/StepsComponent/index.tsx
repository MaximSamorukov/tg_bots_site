import s from "./style.module.scss";
import { StepItem } from "../StepItem";
import { useTranslation } from "@/providers/translations";
import { PAGES } from "@/constants";

export const StepsComponent = () => {
  const c = useTranslation();
  return (
    <div className={s.container}>
      {c.t[PAGES.THIRD].map(({ step }, i) => (
        <StepItem number={i + 1} key={step} label={step} />
      ))}
    </div>
  );
};

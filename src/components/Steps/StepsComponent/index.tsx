import s from "./style.module.scss";
import { StepItem } from "../StepItem";
import { useTranslation } from "@/providers/translations";
import { PAGES } from "@/constants";

type SubstepsType = Array<Record<string, string>>;
export const StepsComponent = () => {
  const c = useTranslation();
  return (
    <div className={s.container}>
      {c.t[PAGES.THIRD].map(({ step, substeps }, i) => {
        const substepsArray = [...substeps] as unknown as SubstepsType;
        return (
          <StepItem
            number={i + 1}
            key={step}
            label={step}
            substeps={substepsArray}
          />
        );
      })}
    </div>
  );
};

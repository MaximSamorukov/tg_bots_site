import { HighEducationItem } from "@/components/Education/HighEducation/HighEducationItem";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";

export const Education = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.THIRD} className={s.container}>
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle[PAGES.THIRD]}</div>
        {c.t[PAGES.THIRD].map((i, ind) => (
          <HighEducationItem
            index={ind}
            key={i.speciality}
            name={i.name}
            specialty={i.speciality}
            degree={i.degree}
            icon={i.icon}
          />
        ))}
      </div>
    </div>
  );
};

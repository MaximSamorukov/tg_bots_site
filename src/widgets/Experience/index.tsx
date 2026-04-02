import { motion } from "motion/react";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { ExperienceItem } from "@/components/Experience/ExperienceItem";

export const Experience = () => {
  const c = useTranslation();
  return (
    <motion.div
      id={PAGES.SECOND}
      className={s.container}
      initial={{ filter: "blur(10px)" }}
      whileInView={{ filter: "none" }}
      transition={{ duration: 2 }}
    >
      <div className={s.data}>
        <div className={s.data__title}>{c.t.pageTitle[PAGES.SECOND]}</div>
        {c.t[PAGES.SECOND].map((i) => (
          <ExperienceItem
            key={i.company}
            stack={i.stack}
            company={i.company}
            title={i.title}
            start={i.start}
            end={i.end}
            description={i.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

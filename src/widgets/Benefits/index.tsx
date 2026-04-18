import { motion } from "motion/react";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { BenefitItem } from "@/components/Benefits/BenefitItem";

export const Benefits = () => {
  const c = useTranslation();
  return (
    <motion.div
      id={PAGES.SECOND}
      className={s.container}
      initial={{ filter: "blur(10px)" }}
      whileInView={{ filter: "none" }}
      transition={{ duration: 2 }}
    >
      <div className={s.data__title}>{c.t.pageTitle[PAGES.SECOND]}</div>
      <div className={s.data}>
        {c.t[PAGES.SECOND].map((i) => (
          <BenefitItem
            key={i.title}
            title={i.title}
            description={i.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

import { motion } from "motion/react";
import Bot1 from "@/assets/first/bot_1.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { Title } from "@/components/Main/Title";
import { Point } from "@/components/Main/Point";
import { FormButton } from "@/components/Main/FormButton";

import s from "./style.module.scss";

export const Main = () => {
  const c = useTranslation();
  const less980px = useMediaQuery("(max-width: 980px)");
  const less750px = useMediaQuery("(max-width: 750px)");
  if (less980px) {
    return (
      <div id={PAGES.FIRST} className={s.container}>
        <motion.div
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "none" }}
          transition={{ duration: 0.5 }}
          className={s.data}
        >
          <div className={s.data__main}>
            <Title
              first={c.t[PAGES.FIRST].main.title.first}
              second={c.t[PAGES.FIRST].main.title.second}
            />
            {c.t[PAGES.FIRST].main.points.map((point) => (
              <Point point={point} />
            ))}
            <FormButton label="Рассчитать стоимость" />
          </div>
          {!less750px && (
            <div className={s.data__image}>
              <img src={Bot1} width="100%" alt="bot" />
            </div>
          )}
        </motion.div>
      </div>
    );
  }
  return (
    <div id={PAGES.FIRST} className={s.container}>
      <motion.div
        initial={{ filter: "blur(10px)" }}
        whileInView={{ filter: "none" }}
        transition={{ duration: 0.5 }}
        className={s.data}
      >
        <div className={s.data__main}>
          <Title
            first={c.t[PAGES.FIRST].main.title.first}
            second={c.t[PAGES.FIRST].main.title.second}
          />
          {c.t[PAGES.FIRST].main.points.map((point) => (
            <Point point={point} />
          ))}
          <FormButton label="Рассчитать стоимость" />
        </div>
        <div className={s.data__image}>
          <img src={Bot1} width="100%" alt="bot" />
        </div>
      </motion.div>
    </div>
  );
};

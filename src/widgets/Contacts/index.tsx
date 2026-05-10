import { motion } from "motion/react";
import { useTranslation } from "@/providers/translations";
import resume from "@/assets/resume/Резюме_frontend_Саморуков.pdf";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { Title } from "@/components/Shared/Title";
import { ConnectForm } from "@/components/Shared/ConnectForm";

export const Contacts = () => {
  const c = useTranslation();
  return (
    <div id={PAGES.FIFTH} className={s.container}>
      <motion.div
        className={s.data}
        initial={{ filter: "blur(10px)" }}
        whileInView={{ filter: "none" }}
        transition={{ duration: 1 }}
      >
        <Title item={PAGES.FIFTH} />
        <div className={s.data__contacts}>
          <div className={s.data__contactItem}>
            <span>Telegram:</span>
            <a
              href={c.t.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.t.contacts.telegramName}
            </a>
          </div>
          <div className={s.data__contactItem}>
            <span>Email:</span>
            <a href={`mailto:${c.t.contacts.email}`}>{c.t.contacts.email}</a>
          </div>
        </div>
        <div className={s.data__form}>
          <ConnectForm translateKey={PAGES.FIFTH} />
        </div>
      </motion.div>
    </div>
  );
};

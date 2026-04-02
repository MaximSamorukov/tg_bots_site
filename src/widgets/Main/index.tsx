import { motion } from "motion/react";
import GitHubIcon from "@/assets/gh.svg?react";
import EmailIcon from "@/assets/email.svg?react";
import LinkedInIcon from "@/assets/ln.svg?react";
import TelegramIcon from "@/assets/tg.svg?react";
import { useMediaQuery } from "@uidotdev/usehooks";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { DownloadResumeBtn } from "@/components/Main/DownloadResumeBtn";

export const Main = () => {
  const c = useTranslation();
  const less980px = useMediaQuery("(max-width: 980px)");
  if (less980px) {
    return (
      <div id={PAGES.FIRST} className={s.container}>
        <motion.div
          initial={{ filter: "blur(10px)" }}
          animate={{ filter: "none" }}
          transition={{ duration: 0.5 }}
          className={s.data}
        >
          <div className={s.data__brief}>
            <div className={s.data__title}>{c.t[PAGES.FIRST].brief.name}</div>
            <div className={s.data__occupation}>
              {c.t[PAGES.FIRST].brief.occupation}
            </div>
            <div className={s.data__moto}>{c.t[PAGES.FIRST].brief.moto}</div>
          </div>
          <div className={s.data__summary}>
            <span
              dangerouslySetInnerHTML={{
                __html: c.t[PAGES.FIRST].summary.first,
              }}
            />
            <br />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: c.t[PAGES.FIRST].summary.second,
              }}
            />
            <br />
            <br />
            <span
              dangerouslySetInnerHTML={{
                __html: c.t[PAGES.FIRST].summary.third,
              }}
            />
          </div>
          <div className={s.data__brief}>
            <div className={s.data__socials}>
              <a
                href={c.t.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className={s.data__socialItem}
              >
                <GitHubIcon />
              </a>
              <a
                href={c.t.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={s.data__socialItem}
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${c.t.contacts.email}`}
                className={s.data__socialItem}
              >
                <EmailIcon />
              </a>
              <a
                href={c.t.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={s.data__socialItem}
              >
                <TelegramIcon />
              </a>
            </div>
            <DownloadResumeBtn />
          </div>
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
        <div className={s.data__brief}>
          <div className={s.data__title}>{c.t[PAGES.FIRST].brief.name}</div>
          <div className={s.data__occupation}>
            {c.t[PAGES.FIRST].brief.occupation}
          </div>
          <div className={s.data__moto}>{c.t[PAGES.FIRST].brief.moto}</div>
          <div className={s.data__socials}>
            <a
              href={c.t.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={s.data__socialItem}
            >
              <GitHubIcon />
            </a>
            <a
              href={c.t.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={s.data__socialItem}
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${c.t.contacts.email}`}
              className={s.data__socialItem}
            >
              <EmailIcon />
            </a>
            <a
              href={c.t.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={s.data__socialItem}
            >
              <TelegramIcon />
            </a>
          </div>
          <DownloadResumeBtn />
        </div>
        <div className={s.data__summary}>
          <span
            dangerouslySetInnerHTML={{ __html: c.t[PAGES.FIRST].summary.first }}
          />
          <br />
          <br />
          <span
            dangerouslySetInnerHTML={{
              __html: c.t[PAGES.FIRST].summary.second,
            }}
          />
          <br />
          <br />
          <span
            dangerouslySetInnerHTML={{ __html: c.t[PAGES.FIRST].summary.third }}
          />
        </div>
      </motion.div>
    </div>
  );
};

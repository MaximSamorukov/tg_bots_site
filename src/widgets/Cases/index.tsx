import { useTranslation } from "@/providers/translations";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { ProjectItem } from "@/components/Cases/ProjectItem";
import { Title } from "@/components/Shared/Title";
import shop_bot from "@/assets/cases/shop_bot.png";
import pay_bot from "@/assets/cases/pay_bot.png";
import activity_bot from "@/assets/cases/activity_bot.png";
import cleaning_bot from "@/assets/cases/cleaning_bot.png";
import crowd_funding_bot from "@/assets/cases/crowd_funding_bot.png";
import beauty_salon_bot from "@/assets/cases/beauty_salon_bot.png";
type ProjectType = "project" | "widget" | "testTask";

export type ProjectItemType = {
  type: ProjectType;
  title: string;
  github: string;
  deploy: string;
  description: string;
  stack: string[];
};

export type DataType = Record<ProjectType, ProjectItemType[]>;

export const icons = {
  shop_bot,
  activity_bot,
  cleaning_bot,
  pay_bot,
  crowd_funding_bot,
  beauty_salon_bot,
};

export const Cases = () => {
  const c = useTranslation();

  return (
    <div id={PAGES.FOURTH} className={s.container}>
      <Title item={PAGES.FOURTH} />
      <div className={s.data}>
        <div className={s.data__items}>
          {c.t[PAGES.FOURTH].map((i, index) => (
            <ProjectItem
              icon={icons[i.name]}
              index={index}
              key={i.name}
              title={i.title}
              type={i.type}
              description={i.description}
              github={i.github}
              deploy={i.deploy}
              image={i.image}
              name={i.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

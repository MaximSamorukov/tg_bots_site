import { useTranslation } from "@/providers/translations";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useMemo } from "react";
import { ProjectItem } from "@/components/Cases/ProjectItem";
import { Title } from "@/components/Shared/Title";

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

const init = {
  project: [],
  widget: [],
  testTask: [],
} as DataType;

export const Cases = () => {
  const c = useTranslation();

  return (
    <div id={PAGES.FOURTH} className={s.container}>
      <Title item={PAGES.FOURTH} />
      <div className={s.data}>
        <div className={s.data__items}>
          {c.t[PAGES.FOURTH].map((i, index) => (
            <ProjectItem
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

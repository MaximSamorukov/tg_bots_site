import { useTranslation } from "@/providers/translations";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useMemo } from "react";
import { ProjectItem } from "@/components/Projects/ProjectItem";

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

export const Projects = () => {
  const c = useTranslation();
  const { project, widget } = useMemo(() => {
    const data = c.t[PAGES.FOURTH].reduce((acc, i) => {
      const type = i.type;
      const currentData = acc[type];
      const nextData = [...currentData, i];
      const newAcc = Object.assign({ ...acc }, { [type]: nextData });
      return newAcc;
    }, init);
    return data;
  }, [c.t[PAGES.FOURTH]]);

  return (
    <div id={PAGES.FOURTH} className={s.container}>
      <div className={s.data}>
        <div
          className={s.data__title}
        >{`${c.t.pageTitle[PAGES.FOURTH]} и ${c.t.pageTitle[PAGES.FOURTH]}`}</div>
        <div className={s.data__items}>
          {[...project, ...widget].map((i, index) => (
            <ProjectItem
              index={index}
              key={`${i.title}_${index}`}
              title={i.title}
              type={i.type}
              description={i.description}
              github={i.github}
              deploy={i.deploy}
              stack={i.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

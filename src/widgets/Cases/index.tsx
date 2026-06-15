import { useCallback, useState } from "react";
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
import { Modal } from "@/components/Cases/Modal";
import type { ITGBot } from "@/types";
import { ModalInfoField } from "@/components/Cases/ModalInfoField";
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
  const [opened, setOpened] = useState<boolean>(false);
  const [currentModalItem, setCurrentModalItem] = useState<ITGBot>();
  const c = useTranslation();

  const onClick = useCallback((data: ITGBot) => {
    setCurrentModalItem(data);
    setOpened((prev) => {
      if (prev) {
        return false;
      }
      return true;
    });
  }, []);
  const closeModal = useCallback(() => {
    setOpened(() => false);
  }, []);
  return (
    <>
      <div id={PAGES.FOURTH} className={s.container}>
        <Title item={PAGES.FOURTH} />
        <div className={s.data}>
          <div className={s.data__items}>
            {c.t[PAGES.FOURTH].map((i, index) => (
              <ProjectItem
                item={i as unknown as ITGBot}
                onModalOpen={onClick}
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
      <Modal isOpened={opened} onCloseModal={closeModal}>
        <div style={{ width: "100%", height: "100%", border: "1px solid red" }}>
          <ModalInfoField type="title" data={currentModalItem?.fullData!} />
          <ModalInfoField type="paragraph" data={currentModalItem?.fullData!} />
          <ModalInfoField type="images" data={currentModalItem?.fullData!} />
          <ModalInfoField
            type="architecture"
            data={currentModalItem?.fullData!}
          />
          <ModalInfoField type="stack" data={currentModalItem?.fullData!} />
          <ModalInfoField
            type="requirements"
            data={currentModalItem?.fullData!}
          />
          <ModalInfoField
            type="conditions"
            data={currentModalItem?.fullData!}
          />
          <ModalInfoField type="request" data={currentModalItem?.fullData!} />
          <ModalInfoField
            type="download_docs"
            data={currentModalItem?.fullData!}
          />
        </div>
      </Modal>
    </>
  );
};

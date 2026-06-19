import type { ITGBot } from "@/types";
import React from "react";
import s from "./style.module.scss";
type ModalInfoFieldPropsType = {
  type:
    | "paragraph"
    | "title"
    | "images"
    | "architecture"
    | "stack"
    | "requirements"
    | "conditions"
    | "request"
    | "download_docs";
  data: ITGBot["fullData"];
};

export const ModalInfoField: React.FC<ModalInfoFieldPropsType> = ({
  type,
  data,
}) => {
  switch (type) {
    case "architecture":
      return (
        <div className="modal-info-field architecture">
          <h3>Архитектура</h3>
          <p>{data.architecture}</p>
        </div>
      );

    case "title":
      return (
        <div className="modal-info-field title">
          <h2>{data.title}</h2>
        </div>
      );

    case "paragraph":
      return (
        <div className="modal-info-field paragraph">
          <h3>Описание</h3>
          <p>{data.description}</p>
        </div>
      );

    case "stack":
      return (
        <div className={s.stackContainer}>
          <div className={s.stackContainer__header}>
            <h3>Технологический стек</h3>
          </div>
          <div className={s.stackContainer__items}>
            {data.stack.map((tech, index) => (
              <div key={index}>{tech}</div>
            ))}
          </div>
        </div>
      );

    case "requirements":
      return (
        <div className="modal-info-field requirements">
          <h3>Системные требования</h3>
          <ul>
            <li>OS: {data.requirements.OS}</li>
            <li>RAM: {data.requirements.RAM}</li>
            <li>SSD: {data.requirements.SSD}</li>
            <li>Пиковая нагрузка: {data.requirements.peak_rpc}</li>
            <li>
              Максимальное кол-во пользователей: {data.requirements.concurrency}
            </li>
          </ul>
        </div>
      );

    case "conditions":
      return (
        <div className="modal-info-field conditions">
          <h3>Условия размещения</h3>
          {data.conditions.map((condition, index) => (
            <div key={index} className="condition-item">
              <h4>
                {condition.name === "self-hosted" ? "Self-hosted" : "Подписка"}
              </h4>
              <p>{condition.description}</p>
              <span className="price">{condition.price} ₽</span>
            </div>
          ))}
        </div>
      );

    case "request":
      return (
        <div className="modal-info-field request">
          <h3>Заказать</h3>
        </div>
      );

    case "download_docs":
      return (
        <div className="modal-info-field download_docs">
          <h3>Скачать документацию</h3>
        </div>
      );

    case "images":
      return (
        <div className={s.imagesContainer}>
          <div className={s.imagesContainer__header}>
            <h3>Изображения</h3>
          </div>
          <div className={s.imagesContainer__images}>
            {data.images.length > 0 ? (
              <>
                {data.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Изображение ${index + 1}`}
                  />
                ))}
              </>
            ) : (
              <p>Нет изображений</p>
            )}
          </div>
        </div>
      );

    default:
      return null;
  }
};

import type { ITGBot } from "@/types";
import s from "./style.module.scss";
import { useCallback, useState } from "react";
import { Modal } from "@/components/Cases/Modal";

type ImagesPreviewComponentProps = {
  images: ITGBot["fullData"]["images"];
};

export const ImagesPreviewComponent: React.FC<ImagesPreviewComponentProps> = ({
  images,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImgPath, setSelectedImgPath] = useState<string>();
  const openPreview = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    setSelectedImgPath(e.currentTarget.id);
    setShowModal(true);
  }, []);
  const closeModal = useCallback(() => {
    setSelectedImgPath("");
    setShowModal(false);
  }, []);
  return (
    <div className={s.imagesContainer}>
      <div className={s.imagesContainer__header}>
        <h3>Изображения</h3>
      </div>
      <div className={s.imagesContainer__images}>
        {images.length > 0 ? (
          <>
            {images.map((image, index) => {
              const path = `/bot_images/${image}`;
              return (
                <img
                  id={path}
                  onClick={openPreview}
                  key={index}
                  src={path}
                  alt={image}
                  loading="lazy"
                />
              );
            })}
          </>
        ) : (
          <p>Нет изображений</p>
        )}
      </div>
      <Modal id="preview" isOpened={showModal} onCloseModal={closeModal}>
        <div className={s.modalContainer}>
          <button onClick={closeModal} className={s.modal_closeButton}>
            Закрыть
          </button>
          <img
            id={selectedImgPath}
            key={selectedImgPath}
            src={selectedImgPath}
            alt={selectedImgPath}
            loading="lazy"
          />
        </div>
      </Modal>
    </div>
  );
};

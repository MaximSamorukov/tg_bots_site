import type { ITGBot } from "@/types";
import s from "./style.module.scss";

type ImagesPreviewComponentProps = {
  images: ITGBot["fullData"]["images"];
};

export const ImagesPreviewComponent: React.FC<ImagesPreviewComponentProps> = ({
  images,
}) => {
  return (
    <div className={s.imagesContainer}>
      <div className={s.imagesContainer__header}>
        <h3>Изображения</h3>
      </div>
      <div className={s.imagesContainer__images}>
        {images.length > 0 ? (
          <>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Изображение ${index + 1}`} />
            ))}
          </>
        ) : (
          <p>Нет изображений</p>
        )}
      </div>
    </div>
  );
};

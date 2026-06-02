import { createPortal } from "react-dom";
import cn from "classnames";
import s from "./style.module.scss";
import { useCallback, type MouseEvent } from "react";

type ModalPropsType = {
  children: React.ReactNode;
  isOpened: boolean;
  onCloseModal: () => void;
};
export const Modal: React.FC<ModalPropsType> = ({
  children,
  isOpened,
  onCloseModal,
}) => {
  const onClose = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if ((e.target as HTMLDivElement).id === "layer") {
        onCloseModal();
      }
    },
    [onCloseModal],
  );
  const cl = cn(s.container, {
    [s.container__opened]: isOpened,
    [s.container__closed]: !isOpened,
  });
  return createPortal(
    <div id="layer" onClick={onClose} className={cl}>
      {isOpened ? <div className={s.modalContainer}>{children}</div> : <></>}
    </div>,
    document.body,
  );
};

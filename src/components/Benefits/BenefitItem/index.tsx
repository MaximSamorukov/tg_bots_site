import { useMediaQuery } from "@uidotdev/usehooks";

import s from "./style.module.scss";

type BenefitItemProps = {
  title: string;
  description: string;
};

export const BenefitItem = ({ title, description }: BenefitItemProps) => {
  const less980px = useMediaQuery("(max-width: 980px)");
  if (less980px) {
    return (
      <div className={s.container}>
        <div className={s.mainData}>
          <div className={s.mainData__header}>
            <div className={s.mainData__title}>{title}</div>
          </div>
          <div className={s.mainData__description}>
            <div className={s.mainData__descriptionItem}>{description}</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={s.container}>
      <div className={s.mainData}>
        <div className={s.mainData__header}>
          <div className={s.mainData__title}>{title}</div>
        </div>
        <div className={s.mainData__description}>
          <div className={s.mainData__descriptionItem}>{description}</div>
        </div>
      </div>
    </div>
  );
};

import { useMediaQuery } from "@uidotdev/usehooks";

import s from "./style.module.scss";
import { ItemCard } from "@/components/Shared/ItemCard";

type BenefitItemProps = {
  title: string;
  description: string;
  index: number;
};

export const BenefitItem = ({
  index,
  title,
  description,
}: BenefitItemProps) => {
  const less980px = useMediaQuery("(max-width: 980px)");
  if (less980px) {
    return (
      <ItemCard index={index}>
        <div className={s.container}>
          <div className={s.mainData}>
            <div className={s.mainData__image}>dfd</div>
            <div className={s.mainData__header}>
              <div className={s.mainData__title}>{title}</div>
            </div>
            <div className={s.mainData__description}>
              <div className={s.mainData__descriptionItem}>{description}</div>
            </div>
          </div>
        </div>
      </ItemCard>
    );
  }
  return (
    <ItemCard index={index}>
      <div className={s.container}>
        <div className={s.mainData}>
          <div className={s.mainData__image}>dfd</div>
          <div className={s.mainData__header}>
            <div className={s.mainData__title}>{title}</div>
          </div>
          <div className={s.mainData__description}>
            <div className={s.mainData__descriptionItem}>{description}</div>
          </div>
        </div>
      </div>
    </ItemCard>
  );
};

import { useMediaQuery } from "@uidotdev/usehooks";
import M from "@/assets/benefits/ai.png";
import s from "./style.module.scss";
import { ItemCard } from "@/components/Shared/ItemCard";

type BenefitItemProps = {
  title: string;
  description: string;
  index: number;
  icon: string;
};

export const BenefitItem = ({
  index,
  title,
  description,
  icon,
}: BenefitItemProps) => {
  const less980px = useMediaQuery("(max-width: 980px)");
  if (less980px) {
    return (
      <ItemCard index={index}>
        <div className={s.container}>
          <div className={s.mainData}>
            <div className={s.mainData__image}>
              <img src={icon} alt={title} />
            </div>
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
          <div className={s.mainData__image}>
            <img src={icon} alt={title} />
          </div>
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

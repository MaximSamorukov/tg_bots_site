import { StepsComponent } from "@/components/Steps/StepsComponent";
import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { Title } from "@/components/Shared/Title";

export const Steps = () => {
  return (
    <div id={PAGES.THIRD} className={s.container}>
      <Title item={PAGES.THIRD} />
      <div className={s.data}>
        <StepsComponent />
      </div>
    </div>
  );
};

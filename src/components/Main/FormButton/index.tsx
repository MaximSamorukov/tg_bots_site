import { memo, useCallback } from "react";
import s from "./style.module.scss";
import { useActiveSection } from "@/utils/hooks/useActiveSection";
import { PAGES } from "@/constants";
const pages = Object.values(PAGES);
type FormButtonPropsType = {
  label: string;
};

export const FormButton: React.FC<FormButtonPropsType> = memo(({ label }) => {
  const { setActivePage } = useActiveSection(pages);
  const onClick = useCallback(() => {
    setActivePage(PAGES.FIFTH);
  }, [setActivePage]);
  return (
    <div onClick={onClick} className={s.container}>
      {label}
    </div>
  );
});

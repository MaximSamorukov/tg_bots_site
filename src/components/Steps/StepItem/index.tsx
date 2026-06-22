import s from "./style.module.scss";

export const StepItem = ({
  label,
  number,
  substeps,
}: {
  label: string;
  number: number;
  substeps: Record<string, string>[];
}) => {
  const mainStep = `${number}. ${label}`;
  return (
    <div className={s.c}>
      <div className={s.c__mainStep}>{mainStep}</div>
      {substeps.map(({ step }) => {
        const subStep = `- ${step}`;
        return (
          <div key={subStep} className={s.c__subStep}>
            {subStep}
          </div>
        );
      })}
    </div>
  );
};

import s from "./style.module.scss";
import { PAGES } from "@/constants";
import { useTranslation } from "@/providers/translations";
import { BenefitItem } from "@/components/Benefits/BenefitItem";
import { Title } from "@/components/Shared/Title";
import Leads from "@/assets/benefits/leads.png";
import Monetisation from "@/assets/benefits/monitisation.png";
import FAQ from "@/assets/benefits/faq.png";
import Service from "@/assets/benefits/service.png";
import Messaging from "@/assets/benefits/messaging.png";
import AI from "@/assets/benefits/ai.png";

const icons = {
  leads: Leads,
  monetisation: Monetisation,
  faq: FAQ,
  service: Service,
  messaging: Messaging,
  ai: AI,
};

export const Benefits = () => {
  const c = useTranslation();

  return (
    <div id={PAGES.SECOND} className={s.container}>
      <Title item={PAGES.SECOND} />
      <div className={s.data}>
        {c.t[PAGES.SECOND].map((i, index) => (
          <BenefitItem
            icon={icons[i.type]}
            index={index}
            key={i.title}
            title={i.title}
            description={i.description}
          />
        ))}
      </div>
    </div>
  );
};

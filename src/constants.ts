export const PAGES = {
  FIRST: "main",
  SECOND: "benefits",
  THIRD: "devsteps",
  FOURTH: "bots",
  FIFTH: "contacts",
} as const;

export const MENU = [
  {
    name: PAGES.FIRST,
    slug: PAGES.FIRST,
  },
  {
    name: PAGES.SECOND,
    slug: PAGES.SECOND,
  },
  {
    name: PAGES.THIRD,
    slug: PAGES.THIRD,
  },
  {
    name: PAGES.FOURTH,
    slug: PAGES.FOURTH,
  },
  {
    name: PAGES.FIFTH,
    slug: PAGES.FIFTH,
  },
];

export const PAGES_CONFIG = {
  [PAGES.FIRST]: {
    company: "company",
    active: "active",
    title: "title",
    start: "start",
    end: "end",
    description: "description",
  },
  [PAGES.SECOND]: {
    valid: "valid",
    name: "name",
    school: "school",
    type: "type",
    description: "description",
  },
  [PAGES.THIRD]: {
    name: "name",
    speciality: "speciality",
    degree: "degree",
  },
  [PAGES.FOURTH]: {
    description: "description",
    stack: "stack",
    github: "github",
    deploy: "deploy",
  },
};

export const CHECK_IP_URL = "https://ipapi.co/json/";

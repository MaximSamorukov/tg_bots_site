import { PAGES } from "./constants";

export const t = {
  en: {
    pageTitle: {
      [PAGES.FIRST]: "Main",
      [PAGES.SECOND]: "Benefits",
      [PAGES.THIRD]: "Development steps",
      [PAGES.FOURTH]: "Cases",
      [PAGES.FIFTH]: "Contacts",
    },
    menu: {
      [PAGES.FIRST]: "Main",
      [PAGES.SECOND]: "Benefits",
      [PAGES.THIRD]: "Steps",
      [PAGES.FOURTH]: "Exapmples",
      [PAGES.FIFTH]: "Contacts",
    },
    [PAGES.FIRST]: {
      main: {
        title: {
          first: "Chatbot",
          second: "development",
        },
        points: [
          "Telegram, VK, Mini App",
          "CRM & n8n integration",
          "Payment service connection",
          "Launch in as little as 3 days",
          "Starting from 200 USD",
        ],
      },
      brief: {
        name: "Maksim Samorukov",
        occupation: "frontend developer",
        moto: "I build intuitive UX/UI",
      },
      summary: {
        first:
          "Hi! I'm a <span class='accent'>frontend developer</span> with an engineering background.",
        second:
          "I build modern web interfaces with <span class='accent'>React</span> and <span class='accent'>TypeScript</span>, develop <span class='accent'>fullstack applications</span> and <span class='accent'>Telegram bots</span>. Building my own SaaS product using AI to optimize welding technology development.",
        third:
          "The combination of a PhD in materials science, an engineering background, and web development experience allows me to thoroughly understand the subject domain for <span class='accent'>effective problem-solving</span>.",
      },
    },
    [PAGES.SECOND]: [
      {
        active: true,
        title: "Automation",
        description:
          "Chat bots with LLM can be trained on company data, adapt to business specifics, and conduct dialogue in a lively, natural form. They are capable of understanding context, remembering conversation details, and adapting to the client's communication style, ensuring maximum convenience of interaction.",
      },
      {
        active: true,
        title: "Integration",
        description:
          "Chat bots can integrate with other systems and applications, can send dialogues to CRM and even have their own CRM. Integrations allow managing business processes more efficiently.",
      },
      {
        active: true,
        title: "Analytics",
        description:
          "Chat bots can collect and analyze data about customers and their behavior, which helps companies understand customer preferences and needs, as well as improve the quality of products and services.",
      },
    ],
    [PAGES.THIRD]: [
      {
        step: "Defining goals and objectives",
      },
      {
        step: "Developing and agreeing on technical requirements, timelines, and costs",
      },
      {
        step: "Development and testing",
      },
      {
        step: "Acceptance testing",
      },
      {
        step: "Deployment and support",
      },
    ],
    [PAGES.FOURTH]: [
      {
        active: true,
        type: "project",
        name: "shop_bot",
        title: "Telegram бот магазин",
        description: "Telegram бот магазин",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "pay_bot",
        title: "Telegram бот оплаты постов в канале",
        description: "Telegram бот оплаты постов в канале",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "promouter_bot",
        title: "Telegram бот продающий услуги",
        description: "Telegram бот оплаты постов в канале",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "shop_bot_1",
        title: "Telegram бот магазин_1",
        description: "Telegram бот магазин",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "pay_bot_2",
        title: "Telegram бот оплаты постов в канале_2",
        description: "Telegram бот оплаты постов в канале",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "promouter_bot_3",
        title: "Telegram бот продающий услуги_3",
        description: "Telegram бот оплаты постов в канале",
        github: null,
        deploy: null,
        image: "",
      },
    ],
    [PAGES.FIFTH]: {
      telegram: "https://t.me/M_Camopykoff",
      telegramName: "@M_Camopykoff",
      linkedin: "https://www.linkedin.com/in/maxim-samorukov",
      github: "https://github.com/MaximSamorukov",
      email: "maxim.samorukov@gmail.com",
      phone: "+7(925)026 17 37",
      tel: "tel:+79250261737",
    },
    common: {
      page: {
        contacts: {
          download: "download",
          resumeName: "Resume_frontend_Samorukov.pdf",
        },
        projects: {
          testTasksDisclaimer:
            "The applications have limited functionality. Some lack responsive design. They were developed as test assignments during the job application process in accordance with the provided specifications.",
        },
      },
    },
  },
  ru: {
    pageTitle: {
      [PAGES.FIRST]: "Главная",
      [PAGES.SECOND]: "Преимущества",
      [PAGES.THIRD]: "Процесс разработки",
      [PAGES.FOURTH]: "Решения",
      [PAGES.FIFTH]: "Контакты",
    },
    menu: {
      [PAGES.FIRST]: "Главная",
      [PAGES.SECOND]: "Преимущества",
      [PAGES.THIRD]: "Этапы разработки",
      [PAGES.FOURTH]: "Решения",
      [PAGES.FIFTH]: "Контакты",
    },
    [PAGES.FIRST]: {
      main: {
        title: {
          first: "Разработка",
          second: "чат-ботов",
        },
        points: [
          "Telegram, VK, Mini App",
          "Интеграция с CRM, n8n",
          "Подключение сервисов оплаты",
          "Запуск от 3 дней",
          "Стоимость от 10000 ₽",
        ],
      },
      brief: {
        name: "Максим Саморуков",
        occupation: "фронтенд-разработчик",
        moto: "строю удобный UX/UI",
      },
      summary: {
        first:
          "Привет! Я <span class='accent'>фронтенд-разработчик</span> с инженерным бэкграундом.",
        second:
          "Создаю современные веб-интерфейсы на <span class='accent'>React</span> и <span class='accent'>TypeScript</span>, разрабатываю <span class='accent'>фуллстэк-приложения</span> и <span class='accent'>Telegram-ботов</span>. Развиваю собственный SaaS-продукт с использованием AI для оптимизации разработки технологий сварки.",
        third:
          "Сочетание степени к.т.н. в материаловедении, инженерного бэкграунда и опыта в веб-разработке позволяет мне комплексно оценивать предметную область для <span class='accent'>эффективного решения задач</span>.",
      },
    },
    [PAGES.SECOND]: [
      {
        active: true,
        title: "Автоматизация",
        description:
          "Чат боты с LLM могут обучаться на данных компании, адаптироваться под специфику бизнеса и вести диалог в живой, естественной форме. Они способны понимать контекст, запоминать детали разговора и подстраиваться под стиль общения клиента, обеспечивая максимально удобное взаимодействие.",
      },
      {
        active: true,
        title: "Интеграция",
        description:
          "Чат-боты могут интегрироваться с другими системами и приложениями, могут отправлять диалоги в CRM и даже имеют свою собственную CRM. Интеграции позволяют управлять бизнес-процессами более эффективно.",
      },
      {
        active: true,
        title: "Аналитика",
        description:
          "Чат-боты могут собирать и анализировать данные о клиентах и их поведении, что помогает компаниям понимать предпочтения и потребности своих клиентов, а также улучшать качество продуктов и услуг.",
      },
    ],
    [PAGES.THIRD]: [
      {
        step: "Определение целей и задач",
      },
      {
        step: "Разработка и согласование ТЗ, сроков и стоимости",
      },
      {
        step: "Разработка и тестирование",
      },
      {
        step: "Приемо-сдаточные испытания",
      },
      {
        step: "Деплой и поддержка",
      },
    ],
    [PAGES.FOURTH]: [
      {
        active: true,
        type: "project",
        name: "shop_bot",
        title: "Telegram бот магазин",
        description: "Telegram бот магазин",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "pay_bot",
        title: "Telegram бот оплаты постов в канале",
        description: "Telegram бот оплаты постов в канале",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "promouter_bot",
        title: "Telegram бот продающий услуги",
        description: "Telegram бот оплаты постов в канале",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "shop_bot_1",
        title: "Telegram бот магазин_1",
        description: "Telegram бот магазин",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "pay_bot_2",
        title: "Telegram бот оплаты постов в канале_2",
        description: "Telegram бот оплаты постов в канале",
        github: null,
        deploy: null,
        image: "",
      },
      {
        active: true,
        type: "project",
        name: "promouter_bot_3",
        title: "Telegram бот продающий услуги_3",
        description: "Telegram бот оплаты постов в канале",
        github: null,
        deploy: null,
        image: "",
      },
    ],
    [PAGES.FIFTH]: {
      telegram: "https://t.me/M_Camopykoff",
      telegramName: "@M_Camopykoff",
      linkedin: "https://www.linkedin.com/in/maxim-samorukov",
      github: "https://github.com/MaximSamorukov",
      email: "maxim.samorukov@gmail.com",
      phone: "+7(925)026 17 37",
      tel: "tel:+79250261737",
    },
    common: {
      page: {
        contacts: {
          download: "скачать",
          resumeName: "Резюме_frontend_Саморуков.pdf",
        },
        projects: {
          testTasksDisclaimer:
            "Приложения обладают ограниченной функциональностью. В некоторых отсутствует адаптив. Были реализованы как тестовые задания в процессе трудоустройства в соответствии с ТЗ.",
        },
      },
    },
  },
} as const;

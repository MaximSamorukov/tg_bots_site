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
        type: "project",
        title: "Next.js application for 3d printing studio",
        description: "Next.js application with client and admin parts.",
        github: "https://github.com/MaximSamorukov/3d-studio",
        deploy: "https://3d-studio-nine.vercel.app/",
        stack: [
          "Next.js 15",
          "React 19",
          "Material UI",
          "SASS",
          "Three.js",
          "MobX",
          "NextAuth",
          "TypeORM",
          "PostgreSQL",
          "YooKassa",
        ],
      },
      {
        type: "project",
        title: "My previous resume website",
        description: "My previous resume website.",
        github: "https://github.com/MaximSamorukov/react_resume",
        deploy: "http://react-resume-sandy.vercel.app/",
        stack: ["React", "AntD", "SASS", "Pixi.js", "axios"],
      },
      {
        type: "testTask",
        title: "Page with historical facts",
        description: "Page with historical facts.",
        github: "https://github.com/MaximSamorukov/test_only",
        deploy: "https://test-only-ten.vercel.app/",
        stack: ["React 19", "TS", "GSAP", "SASS"],
      },
      {
        type: "testTask",
        title: "Todo application",
        description:
          "Todo application with rendering optimized using the profiler.",
        github: "https://github.com/MaximSamorukov/test_task",
        deploy: "https://test-task-two-gold.vercel.app/",
        stack: ["React 19", "TS", "Zustand", "SASS"],
      },
      {
        type: "testTask",
        title: "Course catalog page built with vanilla JS (SPA)",
        description:
          "Course catalog page. Entire layout built with vanilla JS (SPA) without React. Includes filtering functionality and responsive design.",
        github: "https://github.com/MaximSamorukov/vanillajs_test_task",
        deploy: "https://vanillajs-test-task.vercel.app/",
        stack: ["JS", "MobX", "SASS"],
      },
      {
        type: "testTask",
        title: "Currency exchanger form",
        description:
          "Currency exchanger form, built without a Figma mockup based on a JPEG reference, with responsive design. UI is based on heavily customized Material UI components. Interface buttons are not functional.",
        github: "https://github.com/MaximSamorukov/AWX_test",
        deploy: "https://awx-test.vercel.app/",
        stack: ["TS", "React 19", "SASS", "Material UI"],
      },
      {
        type: "testTask",
        title: "Todo application",
        description:
          "Todo application with filtering, drag-and-drop manual sorting, localStorage state persistence, and the ability to edit existing tasks.",
        github: "https://github.com/MaximSamorukov/chatapp_test",
        deploy: "https://chatapp-test-tan.vercel.app/",
        stack: ["TS", "React 19", "Redux Toolkit", "SASS", "@dnd-kit"],
      },
      {
        type: "testTask",
        title: "Product catalog interface",
        description:
          "A non-responsive product catalog interface using the DummyJSON public API for authentication and fetching products.",
        github: "https://github.com/MaximSamorukov/aiti_guru_test",
        deploy: "https://aiti-guru-test.vercel.app",
        stack: [
          "Vite",
          "TS",
          "React 19",
          "Redux Toolkit",
          "React Router",
          "SASS",
          "zod",
          "React Hot Toast",
        ],
      },
      {
        type: "testTask",
        title: "An application for building graphs",
        description:
          "An application for saving and restoring graph state (all nodes and connections between them) on page reload. The graph should be saved automatically or by user action, so that it is restored in the same state after refreshing the page.",
        github: "https://github.com/MaximSamorukov/graph_test_task",
        deploy: "https://graph-test-task.vercel.app/",
        stack: [
          "Vite",
          "TS",
          "React 19",
          "Redux Toolkit",
          "React Router",
          "CSS",
          "dexie",
          "comlink",
        ],
      },
      //{
      //  type: "widget",
      //  title: "Animated multi-button with submenu.",
      //  description: "Animated multi-button with submenu.",
      //  github: "https://github.com/MaximSamorukov/widget_multi_button",
      //  deploy: "tbd",
      //  stack: ["TS", "React 19", "RxJS", "SASS"],
      //},
      {
        type: "widget",
        title: "Plastic window cost calculator.",
        description: "Plastic window cost calculator.",
        github: "https://github.com/MaximSamorukov/window_calculator_mini_app",
        deploy: "https://window-calculator-mini-app.vercel.app/",
        stack: ["TS", "React 19", "SASS"],
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
        type: "project",
        title: "Next.js приложение студии 3d печати",
        description:
          "Next.js приложение с клиентской и административной частями.",
        github: "https://github.com/MaximSamorukov/3d-studio",
        deploy: "https://3d-studio-nine.vercel.app/",
        stack: [
          "Next.js 15",
          "React 19",
          "Material UI",
          "SASS",
          "Three.js",
          "MobX",
          "NextAuth",
          "TypeORM",
          "PostgreSQL",
          "YooKassa",
        ],
      },
      {
        type: "project",
        title: "Моё прошлое резюме",
        description: "Моё прошлое резюме",
        github: "https://github.com/MaximSamorukov/react_resume",
        deploy: "http://react-resume-sandy.vercel.app/",
        stack: ["React", "AntD", "SASS", "Pixi.js", "axios"],
      },
      {
        type: "testTask",
        title: "Страница с историческими фактами.",
        description: "Страница с историческими фактами.",
        github: "https://github.com/MaximSamorukov/test_only",
        deploy: "https://test-only-ten.vercel.app/",
        stack: ["React 19", "TS", "GSAP", "SASS"],
      },
      {
        type: "testTask",
        title: "Todo приложение",
        description:
          "Todo приложение с оптимизированным с помощью профайлера рендерингом.",
        github: "https://github.com/MaximSamorukov/test_task",
        deploy: "https://test-task-two-gold.vercel.app/",
        stack: ["React 19", "TS", "Zustand", "SASS"],
      },
      {
        type: "testTask",
        title: "Страница каталога курсов на чистом JS (SPA)",
        description:
          "Страница каталога курсов. Вся верстка сделана на чистом JS (SPA) без использования React. Добавлен функционал фильтрации. Обеспечена адаптивность.",
        github: "https://github.com/MaximSamorukov/vanillajs_test_task",
        deploy: "https://vanillajs-test-task.vercel.app/",
        stack: ["JS", "MobX", "SASS"],
      },
      {
        type: "testTask",
        title: "Форма валютного обменника",
        description:
          "Форма валютного обменника, сверстанная без Figma макета на основании jpeg, с адаптивностью. Используемый UI - значительно кастомизированные Material UI компоненты.",
        github: "https://github.com/MaximSamorukov/AWX_test",
        deploy: "https://awx-test.vercel.app/",
        stack: ["TS", "React 19", "SASS", "Material UI"],
      },
      {
        type: "testTask",
        title: "Todo приложение",
        description:
          "Todo приложение с функционалами фильтрации, ручной сортировки методом перетаскивания, сохранением состояния в localStorage и возможностью редактирования существующих задач.",
        github: "https://github.com/MaximSamorukov/chatapp_test",
        deploy: "https://chatapp-test-tan.vercel.app/",
        stack: ["TS", "React 19", "Redux Toolkit", "SASS", "@dnd-kit"],
      },
      {
        type: "testTask",
        title: "Интерфейс для работы с каталогом товаров",
        description:
          "Приложение представляет собой неадаптивный интерфейс для работы с каталогом товаров, использующий публичное API DummyJSON для аутентификации и для получения товаров.",
        github: "https://github.com/MaximSamorukov/aiti_guru_test",
        deploy: "https://aiti-guru-test.vercel.app",
        stack: [
          "Vite",
          "TS",
          "React 19",
          "Redux Toolkit",
          "React Router",
          "SASS",
          "zod",
          "React Hot Toast",
        ],
      },
      {
        type: "testTask",
        title: "Приложение для построения графов",
        description:
          "Приложение для реализации возможности сохранять состояние графа (все элементы и связи между ними), а также загружать его при повторном открытии страницы. Граф должен сохраняться автоматически или по действию пользователя, чтобы после обновления страницы он восстанавливался в том же виде.",
        github: "https://github.com/MaximSamorukov/graph_test_task",
        deploy: "https://graph-test-task.vercel.app/",
        stack: [
          "Vite",
          "TS",
          "React 19",
          "Redux Toolkit",
          "React Router",
          "CSS",
          "dexie",
          "comlink",
        ],
      },
      //{
      //  type: "widget",
      //  title: "Мультикнопка с подменю анимированная",
      //  description: "Мультикнопка с подменю анимированная",
      //  github: "https://github.com/MaximSamorukov/widget_multi_button",
      //  deploy: "tbd",
      //  stack: ["TS", "React 19", "RxJS", "SASS"],
      //},
      {
        type: "widget",
        title: "Калькулятор стоимости пластиковых окон",
        description: "Калькулятор стоимости пластиковых окон",
        github: "https://github.com/MaximSamorukov/window_calculator_mini_app",
        deploy: "https://window-calculator-mini-app.vercel.app/",
        stack: ["TS", "React 19", "SASS"],
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

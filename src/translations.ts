import { PAGES } from "./constants";

export const t = {
  en: {
    pageTitle: {
      [PAGES.FIRST]: "Main",
      [PAGES.SECOND]: "Features",
      [PAGES.THIRD]: "Development steps",
      [PAGES.FOURTH]: "Cases",
      [PAGES.FIFTH]: "Contacts",
    },
    itemTitle: {
      [PAGES.FIRST]: { title: "Main", subtitle: "Main", moto: "Main" },
      [PAGES.SECOND]: {
        title: "Features",
        subtitle: "What can your bot do:",
        moto: "Features",
      },
      [PAGES.THIRD]: {
        title: "Development steps",
        subtitle: "Optimal sequence for the best result",
        moto: "Development steps",
      },
      [PAGES.FOURTH]: {
        title: "Cases",
        subtitle: "Examples of developed bots",
        moto: "Cases",
      },
      [PAGES.FIFTH]: {
        title: "Contacts",
        subtitle: "Use the feedback form, email or write to Telegram",
        moto: "Contacts",
      },
    },
    menu: {
      [PAGES.FIRST]: "Main",
      [PAGES.SECOND]: "Features",
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
        complexPoints: [
          {
            type: "Platforms:",
            id: "platforms",
            options: [
              {
                option: ["Telegram", "VK", "Avito"],
              },
            ],
          },
          {
            type: "Integrations:",
            id: "integrations",
            options: [
              {
                option: [
                  "CRM",
                  "payment systems",
                  "Google",
                  "email",
                  "e-commerce",
                  "AI",
                  "RAG",
                ],
              },
            ],
          },
          {
            type: "Conditions:",
            id: "conditions",
            options: [
              {
                option: ["development time: from 7 days"],
              },
              {
                option: ["price: from 10,000 ₽"],
              },
            ],
          },
          {
            type: "Contacts:",
            id: "contacts",
            options: [
              {
                option: ["Telegram: @M_Camopykoff"],
              },
              {
                option: ["Email: maxim.samorukov@gmail.com"],
              },
            ],
          },
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
        title: "Сбор заявок и лидов",
        type: "leads",
        description:
          "Квалифицирует клиента, собирает контакт и передаёт менеджеру. Автоответ в любое время суток.",
      },
      {
        active: true,
        title: "Оплата и подписки",
        type: "monetisation",
        description:
          "Приём платежей через ЮKassa и T-Bank. Выдача доступов, квитанций, напоминания об оплате.",
      },
      {
        active: true,
        title: "Техподдержка и FAQ",
        type: "faq",
        description:
          "Отвечает на типовые вопросы по базе знаний. Переводит на оператора только сложные случаи.",
      },
      {
        active: true,
        title: "Запись на услуги",
        type: "service",
        description:
          "Клиент выбирает время, подтверждает запись. Напоминания за 24 часа и за 1 час.",
      },
      {
        active: true,
        title: "Рассылки по базе",
        type: "messaging",
        description:
          "Сегментация аудитории, таргетированные рассылки с кнопками. Открываемость до 90%.",
      },
      {
        active: true,
        title: "GPT-консультант",
        type: "ai",
        description:
          "Обученный на вашем каталоге или документации ИИ. Отвечает точно и по делу, не выдумывает.",
      },
    ],
    [PAGES.THIRD]: [
      {
        step: "Defining Goals and Objectives",
        substeps: [
          {
            step: "You outline the goal and objective, which we then clarify and refine.",
          },
        ],
      },
      {
        step: "Development and Approval of Requirements, Timeline, and Cost",
        substeps: [
          {
            step: "I draft the technical requirements, create a project timeline, and determine the cost.",
          },
          {
            step: "After agreeing on the scope of work, timeline, and cost, we finalize the requirements and you make a 30% advance payment. The remaining balance is due after the demo, before deployment to the server.",
          },
        ],
      },
      {
        step: "Development and Testing",
        substeps: [
          {
            step: "I develop the bot in accordance with the technical requirements and timeline.",
          },
          {
            step: "I keep you updated on the progress. If necessary, I consult on technical questions.",
          },
        ],
      },
      {
        step: "Acceptance Testing",
        substeps: [
          {
            step: "Once the bot is ready, I conduct a demo.",
          },
          {
            step: "Based on the demo results and, if necessary, I make revisions.",
          },
          {
            step: "You make the final payment.",
          },
        ],
      },
      {
        step: "Deployment and Support",
        substeps: [
          {
            step: "Deployment to your server or mine.",
          },
          {
            step: "Transfer of the codebase and documentation.",
          },
        ],
      },
    ],
    [PAGES.FOURTH]: [
      {
        active: true,
        type: "project",
        name: "shop_bot",
        title: "Telegram бот магазин цифровых товаров",
        description:
          "Бот представляет клиенту каталог, принимает оплату через агрегатор, позволяет скачать купленный товар, ведёт историю заказов. Административная часть на основе web приложения, Telegram Web App или через диалог в чате, позволяет управлять контентом магазина",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот магазин цифровых товаров",
          description:
            "Бот представляет клиенту каталог, принимает оплату через агрегатор, позволяет скачать купленный товар, ведёт историю заказов. Административная часть на основе web приложения, Telegram Web App или через диалог в чате, позволяет управлять контентом магазина.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура представляет собой модульный монолит с четким разделением на Telegram-клиентский слой (Telegraf.js для обработки команд и инлайн-клавиатур), бэкенд API (Node.js, отвечающий за прием платежей через YouKassa, управление заказами и автоматическую выдачу цифровых товаров) и административную панель (React SPA для управления товарами и ценами). Данные хранятся в PostgreSQL (пользователи, заказы, метаданные товаров) и S3-совместимом хранилище (файлы, ключи, ссылки). Система использует вебхуки для обработки уведомлений от платежной системы и построена на событийно-ориентированном подходе: успешная оплата триггерит автоматическую выдачу товара и запись в историю заказов. Предусмотрены две модели развертывания — Self-hosted на сервере заказчика или подписочная на сервере исполнителя с гарантией поддержки работоспособности.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "cleaning_bot",
        title: "Telegram бот для продажи услуг клининга",
        description:
          "Бот предлагает каталог услуг клининга, расчёт стоимости, онлайн-запись и оплату. Пользователь выбирает дату, уборку и получает напоминание о визите клинера.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для продажи услуг клининга",
          description:
            "Бот предлагает каталог услуг клининга, расчёт стоимости, онлайн-запись и оплату. Пользователь выбирает дату, уборку и получает напоминание о визите клинера.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура включает модуль бронирования с проверкой доступности дат, калькулятор стоимости на основе выбранных услуг и площади, а также систему уведомлений для отправки напоминаний через Telegram-шедулер. Бэкенд на Node.js обрабатывает платежи через YouKassa, сохраняет записи и статусы заказов в PostgreSQL, а Telegraf.js управляет диалоговым интерфейсом с пользователем. Административная панель на React позволяет управлять каталогом услуг, просматривать расписание и подтверждать заявки. Предусмотрены две модели хостинга — самостоятельное размещение или подписка с поддержкой исполнителем.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "beauty_salon_bot",
        title: "Telegram бот для записи в салон красоты",
        description:
          "Бот показывает услуги, мастеров и свободное время. Клиент выбирает дату, записывается и получает напоминание. Администратор видит все записи в удобном календаре.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для записи в салон красоты",
          description:
            "Бот показывает услуги, мастеров и свободное время. Клиент выбирает дату, записывается и получает напоминание. Администратор видит все записи в удобном календаре.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура включает модуль управления расписанием с проверкой занятости мастеров, систему бронирования с выбором услуги, специалиста и временного слота, а также шедулер напоминаний для отправки уведомлений перед визитом. Бэкенд на Node.js обрабатывает логику записи и платежи через YouKassa (если требуется предоплата), Telegraf.js управляет пользовательским диалогом, а PostgreSQL хранит данные о клиентах, услугах, мастерах и бронированиях. Административная панель на React отображает календарь записей, позволяет управлять услугами и графиком работы мастеров, а также просматривать историю посещений. Медиафайлы (фото работ, логотипы) сохраняются в S3, а система поддерживает две модели хостинга — самостоятельное размещение или подписка с обслуживанием исполнителем.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "pay_bot",
        title: "Telegram бот для управления постами в канале",
        description:
          "Бот открывает доступ к закрытым постам в канале после оплаты. Поддерживает подписки, разовые платежи, проверку статуса пользователя и автоматическое продление.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для управления постами в канале",
          description:
            "Бот открывает доступ к закрытым постам в канале после оплаты. Поддерживает подписки, разовые платежи, проверку статуса пользователя и автоматическое продление.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура построена вокруг гибкой системы доступа: бэкенд на Node.js управляет подписками и разовыми платежами через YouKassa, хранит статусы пользователей в PostgreSQL и взаимодействует с Telegram API через Telegraf.js для проверки прав перед открытием постов. Событийная модель обеспечивает автоматическое продление подписок и мгновенную реакцию на оплату, а S3-хранилище используется для логов и вспомогательных файлов. Административная панель на React позволяет управлять тарифами, просматривать активных подписчиков и историю транзакций. Система поддерживает два способа развертывания — на сервере заказчика или исполнителя с ежемесячным обслуживанием.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "activity_bot",
        title: "Telegram бот для мониторинга активности в группе",
        description:
          "Бот отслеживает активность участников: сообщения, реакции, время в группе. Генерирует отчёты, выявляет неактивных пользователей и отправляет уведомления администратору при подозрительном поведении.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для мониторинга активности в группе",
          description:
            "Бот отслеживает активность участников: сообщения, реакции, время в группе. Генерирует отчёты, выявляет неактивных пользователей и отправляет уведомления администратору при подозрительном поведении.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура строится вокруг аналитического модуля, который агрегирует события участников (сообщения, реакции, время присутствия) через Telegraf.js, сохраняет метрики в PostgreSQL для последующей статистической обработки и генерации отчетов. Фоновая система шедулинга запускает периодические проверки для выявления неактивных пользователей и аномалий, отправляя уведомления администратору при обнаружении подозрительного поведения. Административная панель на React предоставляет визуализацию активности в виде графиков и списков, а также настройку пороговых значений для автоматических предупреждений. Данные отчетов и логов могут выгружаться в S3-хранилище для долгосрочного хранения, при этом система поддерживает два варианта развертывания — самостоятельный или с технической поддержкой исполнителя.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "crowd_funding_bot",
        title: "Telegram бот для краудфандинга",
        description:
          "Бот помогает собирать средства на проекты. Пользователи просматривают кампании, делают пожертвования, видят прогресс сбора. Администратор получает отчёты о платежах и донатерах автоматически.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для краудфандинга",
          description:
            "Бот помогает собирать средства на проекты. Пользователи просматривают кампании, делают пожертвования, видят прогресс сбора. Администратор получает отчёты о платежах и донатерах автоматически.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура построена на модуле кампаний (создание, редактирование, отображение прогресса), платежном шлюзе через YouKassa для приёма пожертвований и автоматической генерации отчётов по донатерам и собранным суммам. Данные о кампаниях, транзакциях и пользователях хранятся в PostgreSQL, а статические медиафайлы — в S3. Бэкенд на Node.js обрабатывает логику кампаний и платежей, Telegraf.js управляет интерфейсом бота, а React-админка позволяет контролировать все кампании, просматривать отчёты и управлять сборами. Поддерживаются две модели размещения: на сервере заказчика или с ежемесячной поддержкой исполнителя.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
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
      form: {
        title: "Ask a question",
        subtitle:
          "Write your question or provide a brief description of the task. I will respond within an hour.",
        question: {
          placeholder:
            "For example: I need a Telegram bot to monitor task completion...",
          label: "A question or a task",
        },
        contact: {
          placeholder: "@username или телефон",
          label: "Contact",
        },
        submit: {
          label: "Submit request",
        },
      },
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
      [PAGES.SECOND]: "Возможности",
      [PAGES.THIRD]: "Процесс разработки",
      [PAGES.FOURTH]: "Решения",
      [PAGES.FIFTH]: "Контакты",
    },
    itemTitle: {
      [PAGES.FIRST]: { title: "Главная", subtitle: "Main", moto: "Main" },
      [PAGES.SECOND]: {
        title: "Возможности",
        subtitle: "Что умеет ваш бот:",
        moto: "Features",
      },
      [PAGES.THIRD]: {
        title: "Процесс разработки",
        subtitle: "Оптимальная последовательность для лучшего результата",
        moto: "Development steps",
      },
      [PAGES.FOURTH]: {
        title: "Решения",
        subtitle: "Примеры разработанных ботов",
        moto: "Cases",
      },
      [PAGES.FIFTH]: {
        title: "Контакты",
        subtitle:
          "Используйте форму обратной связи, эл. почту или напишите в Телеграм",
        moto: "Contacts",
      },
    },
    menu: {
      [PAGES.FIRST]: "Главная",
      [PAGES.SECOND]: "Возможности",
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
        complexPoints: [
          {
            type: "Платформы:",
            id: "platforms",
            options: [
              {
                option: ["Telegram", "VK", "Avito"],
              },
            ],
          },
          {
            type: "Интеграции:",
            id: "integrations",
            options: [
              {
                option: [
                  "CRM",
                  "платежные системы",
                  "Google",
                  "эл.почта",
                  "сайт/интернет магазин",
                  "AI",
                  "RAG",
                ],
              },
            ],
          },
          {
            type: "Условия:",
            id: "conditions",
            options: [
              {
                option: ["срок изготовления от 7 дней"],
              },
              {
                option: ["стоимость от 10,000 ₽"],
              },
            ],
          },
          {
            type: "Контакты:",
            id: "contacts",
            options: [
              {
                option: ["Telegram: @M_Camopykoff"],
              },
              {
                option: ["Email: maxim.samorukov@gmail.com"],
              },
            ],
          },
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
        title: "Сбор заявок и лидов",
        type: "leads",
        description:
          "Квалифицирует клиента, собирает контакт и передаёт менеджеру. Автоответ в любое время суток.",
      },
      {
        active: true,
        title: "Оплата и подписки",
        type: "monetisation",
        description:
          "Приём платежей через ЮKassa и T-Bank. Выдача доступов, квитанций, напоминания об оплате.",
      },
      {
        active: true,
        title: "Техподдержка и FAQ",
        type: "faq",
        description:
          "Отвечает на типовые вопросы по базе знаний. Переводит на оператора только сложные случаи.",
      },
      {
        active: true,
        title: "Запись на услуги",
        type: "service",
        description:
          "Клиент выбирает время, подтверждает запись. Напоминания за 24 часа и за 1 час.",
      },
      {
        active: true,
        title: "Рассылки по базе",
        type: "messaging",
        description:
          "Сегментация аудитории, таргетированные рассылки с кнопками. Открываемость до 90%.",
      },
      {
        active: true,
        title: "GPT-консультант",
        type: "ai",
        description:
          "Обученный на вашем каталоге или документации ИИ. Отвечает точно и по делу, не выдумывает.",
      },
    ],
    [PAGES.THIRD]: [
      {
        step: "Определение целей и задач",
        substeps: [
          {
            step: "Вы обозначаете цель и задачу, которую мы конкретизируем и уточняем.",
          },
        ],
      },
      {
        step: "Разработка и согласование ТЗ, сроков и стоимости",
        substeps: [
          {
            step: "Я разрабатываю техническое задание, календарный план и определяю стоимость.",
          },
          {
            step: "После согласования объема работ, сроков и стоимости фиксируем ТЗ, вы вносите аванс 30%. Остаток - после демо, перед делоем на сервер.",
          },
        ],
      },
      {
        step: "Разработка и тестирование",
        substeps: [
          {
            step: "Разрабатываю бота в соответствии с техническим заданием и сроками.",
          },
          {
            step: "Держу в курсе хода работ. При необходимости согласовываю технические вопросы.",
          },
        ],
      },
      {
        step: "Приёмо-сдаточные испытания",
        substeps: [
          {
            step: "По факту готовности бота, провожу демо.",
          },
          {
            step: "По результатам демо, при необходимости, вношу правки.",
          },
          {
            step: "Вы производите оплату.",
          },
        ],
      },
      {
        step: "Деплой и поддержка",
        substeps: [
          {
            step: "Деплой на ваш или на мой сервер.",
          },
          {
            step: "Передача кодовой базы и документации.",
          },
        ],
      },
    ],
    [PAGES.FOURTH]: [
      {
        active: true,
        type: "project",
        name: "shop_bot",
        title: "Telegram бот магазин цифровых товаров",
        description:
          "Бот представляет клиенту каталог, принимает оплату через агрегатор, позволяет скачать купленный товар, ведёт историю заказов. Административная часть на основе web приложения, Telegram Web App или через диалог в чате, позволяет управлять контентом магазина",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот магазин цифровых товаров",
          description:
            "Бот представляет клиенту каталог, принимает оплату через агрегатор, позволяет скачать купленный товар, ведёт историю заказов. Административная часть на основе web приложения, Telegram Web App или через диалог в чате, позволяет управлять контентом магазина.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура представляет собой модульный монолит с четким разделением на Telegram-клиентский слой (Telegraf.js для обработки команд и инлайн-клавиатур), бэкенд API (Node.js, отвечающий за прием платежей через YouKassa, управление заказами и автоматическую выдачу цифровых товаров) и административную панель (React SPA для управления товарами и ценами). Данные хранятся в PostgreSQL (пользователи, заказы, метаданные товаров) и S3-совместимом хранилище (файлы, ключи, ссылки). Система использует вебхуки для обработки уведомлений от платежной системы и построена на событийно-ориентированном подходе: успешная оплата триггерит автоматическую выдачу товара и запись в историю заказов. Предусмотрены две модели развертывания — Self-hosted на сервере заказчика или подписочная на сервере исполнителя с гарантией поддержки работоспособности.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "cleaning_bot",
        title: "Telegram бот для продажи услуг клининга",
        description:
          "Бот предлагает каталог услуг клининга, расчёт стоимости, онлайн-запись и оплату. Пользователь выбирает дату, уборку и получает напоминание о визите клинера.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для продажи услуг клининга",
          description:
            "Бот предлагает каталог услуг клининга, расчёт стоимости, онлайн-запись и оплату. Пользователь выбирает дату, уборку и получает напоминание о визите клинера.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура включает модуль бронирования с проверкой доступности дат, калькулятор стоимости на основе выбранных услуг и площади, а также систему уведомлений для отправки напоминаний через Telegram-шедулер. Бэкенд на Node.js обрабатывает платежи через YouKassa, сохраняет записи и статусы заказов в PostgreSQL, а Telegraf.js управляет диалоговым интерфейсом с пользователем. Административная панель на React позволяет управлять каталогом услуг, просматривать расписание и подтверждать заявки. Предусмотрены две модели хостинга — самостоятельное размещение или подписка с поддержкой исполнителем.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "beauty_salon_bot",
        title: "Telegram бот для записи в салон красоты",
        description:
          "Бот показывает услуги, мастеров и свободное время. Клиент выбирает дату, записывается и получает напоминание. Администратор видит все записи в удобном календаре.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для записи в салон красоты",
          description:
            "Бот показывает услуги, мастеров и свободное время. Клиент выбирает дату, записывается и получает напоминание. Администратор видит все записи в удобном календаре.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура включает модуль управления расписанием с проверкой занятости мастеров, систему бронирования с выбором услуги, специалиста и временного слота, а также шедулер напоминаний для отправки уведомлений перед визитом. Бэкенд на Node.js обрабатывает логику записи и платежи через YouKassa (если требуется предоплата), Telegraf.js управляет пользовательским диалогом, а PostgreSQL хранит данные о клиентах, услугах, мастерах и бронированиях. Административная панель на React отображает календарь записей, позволяет управлять услугами и графиком работы мастеров, а также просматривать историю посещений. Медиафайлы (фото работ, логотипы) сохраняются в S3, а система поддерживает две модели хостинга — самостоятельное размещение или подписка с обслуживанием исполнителем.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "pay_bot",
        title: "Telegram бот для управления постами в канале",
        description:
          "Бот открывает доступ к закрытым постам в канале после оплаты. Поддерживает подписки, разовые платежи, проверку статуса пользователя и автоматическое продление.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для управления постами в канале",
          description:
            "Бот открывает доступ к закрытым постам в канале после оплаты. Поддерживает подписки, разовые платежи, проверку статуса пользователя и автоматическое продление.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура построена вокруг гибкой системы доступа: бэкенд на Node.js управляет подписками и разовыми платежами через YouKassa, хранит статусы пользователей в PostgreSQL и взаимодействует с Telegram API через Telegraf.js для проверки прав перед открытием постов. Событийная модель обеспечивает автоматическое продление подписок и мгновенную реакцию на оплату, а S3-хранилище используется для логов и вспомогательных файлов. Административная панель на React позволяет управлять тарифами, просматривать активных подписчиков и историю транзакций. Система поддерживает два способа развертывания — на сервере заказчика или исполнителя с ежемесячным обслуживанием.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "activity_bot",
        title: "Telegram бот для мониторинга активности в группе",
        description:
          "Бот отслеживает активность участников: сообщения, реакции, время в группе. Генерирует отчёты, выявляет неактивных пользователей и отправляет уведомления администратору при подозрительном поведении.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для мониторинга активности в группе",
          description:
            "Бот отслеживает активность участников: сообщения, реакции, время в группе. Генерирует отчёты, выявляет неактивных пользователей и отправляет уведомления администратору при подозрительном поведении.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура строится вокруг аналитического модуля, который агрегирует события участников (сообщения, реакции, время присутствия) через Telegraf.js, сохраняет метрики в PostgreSQL для последующей статистической обработки и генерации отчетов. Фоновая система шедулинга запускает периодические проверки для выявления неактивных пользователей и аномалий, отправляя уведомления администратору при обнаружении подозрительного поведения. Административная панель на React предоставляет визуализацию активности в виде графиков и списков, а также настройку пороговых значений для автоматических предупреждений. Данные отчетов и логов могут выгружаться в S3-хранилище для долгосрочного хранения, при этом система поддерживает два варианта развертывания — самостоятельный или с технической поддержкой исполнителя.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
      },
      {
        active: true,
        type: "project",
        name: "crowd_funding_bot",
        title: "Telegram бот для краудфандинга",
        description:
          "Бот помогает собирать средства на проекты. Пользователи просматривают кампании, делают пожертвования, видят прогресс сбора. Администратор получает отчёты о платежах и донатерах автоматически.",
        github: null,
        deploy: null,
        image: "",
        fullData: {
          title: "Telegram бот для краудфандинга",
          description:
            "Бот помогает собирать средства на проекты. Пользователи просматривают кампании, делают пожертвования, видят прогресс сбора. Администратор получает отчёты о платежах и донатерах автоматически.",
          stack: [
            "node.js, v18+",
            "telegraf.js",
            "PostgreSQL, v14+",
            "S3",
            "YouKassa",
            "React",
          ],
          architecture:
            "Архитектура построена на модуле кампаний (создание, редактирование, отображение прогресса), платежном шлюзе через YouKassa для приёма пожертвований и автоматической генерации отчётов по донатерам и собранным суммам. Данные о кампаниях, транзакциях и пользователях хранятся в PostgreSQL, а статические медиафайлы — в S3. Бэкенд на Node.js обрабатывает логику кампаний и платежей, Telegraf.js управляет интерфейсом бота, а React-админка позволяет контролировать все кампании, просматривать отчёты и управлять сборами. Поддерживаются две модели размещения: на сервере заказчика или с ежемесячной поддержкой исполнителя.",
          images: [
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "image_6",
          ],
          requirements: {
            OS: "Ubuntu 20.04+ / Linux",
            CPU: "3.3 GGz x 2",
            RAM: "4 ГБ",
            SSD: "40 ГБ (NVMe)",
            concurrency: "до 5000 активных пользователей",
            peak_rpc: "100 запросов/сек",
          },
          conditions: [
            {
              name: "self-hosted",
              description: "Бот размещается на серевере заказчика.",
              price: "20000",
            },
            {
              name: "subscription",
              description:
                "Бот размещается на серевере исполнителя и его работоспособность поддерживается исполнителем в рамках подписной модели.",
              price: "3000",
            },
          ],
        },
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
      form: {
        title: "Задать вопрос",
        subtitle:
          "Напишите вопрос или направьте краткое описание задачи. Отвечу в течение часа.",
        question: {
          placeholder:
            "Например: нужен телеграм бот для контроля выполнения работ...",
          label: "Вопрос или задача",
        },
        contact: {
          placeholder: "@username или телефон",
          label: "Контакт для связи",
        },
        submit: {
          label: "Отправить",
        },
      },
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

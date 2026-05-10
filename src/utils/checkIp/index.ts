import { CHECK_IP_URL } from "@/constants";

type Response = {
  ip: string | null;
  city: string | null;
  country_name: string | null;
  languages: string | null;
};

const defaultResponse = {
  ip: null,
  city: null,
  country_name: null,
  languages: null,
};
const SERVER_URL = "https://check-client-app.vercel.app/api/bots"; // "http://localhost:3000/api";
const SERVER_URL_VISITOR = `${SERVER_URL}/visitor`;
const SERVER_URL_NOTIFICATION = `${SERVER_URL}/notification`;

export const checkClientData = async (): Promise<Response> => {
  if (import.meta.env.DEV) {
    return Promise.resolve(defaultResponse);
  }
  try {
    const response = await fetch(CHECK_IP_URL)
      .then((d) => d.json())
      .then((data) => {
        const { ip, city, country_name, languages } = data;
        fetch(SERVER_URL_VISITOR, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip, city, country_name, languages }),
        }).catch(console.error);
        return { ip, city, country_name, languages };
      });
    return response;
  } catch {
    const errorObject = {
      ip: null,
      city: null,
      country_name: null,
      languages: null,
    };
    if (import.meta.env.PROD) {
      fetch(SERVER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(errorObject),
      }).catch(console.error);
    }
    return errorObject;
  }
};

export type NotificationData = {
  question: string;
  contact: string;
};
export const sendNotificationOnRequest = async (
  data: NotificationData,
): Promise<boolean> => {
  if (import.meta.env.DEV) {
    return Promise.resolve(false);
  }
  const { question, contact } = data;
  try {
    fetch(SERVER_URL_NOTIFICATION, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, contact }),
    }).catch(console.error);

    return true;
  } catch {
    return false;
  }
};

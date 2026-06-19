export interface ITGBot {
  active: boolean;
  type: "project";
  name: string;
  title: string;
  description: string;
  github: string | null;
  deploy: string | null;
  image: string;
  fullData: FullData;
}

interface FullData {
  title: string;
  description: string;
  stack: string[];
  architecture: string;
  images: any[]; // можно уточнить, если известен тип элементов
  requirements: Requirements;
  conditions: Condition[];
}

interface Requirements {
  OS: string;
  RAM: string;
  SSD: string;
  concurrency: string;
  peak_rpc: string;
}

interface Condition {
  name: "self-hosted" | "subscription"; // или string, если возможны другие варианты
  description: string;
  price: string; // указано как строка, хотя значение "20000" и "3000" — числа в строке
}

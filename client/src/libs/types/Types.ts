export interface StatusType {
  count: number;
  type: string;
  time: number;
}
export interface ReviewType {
  title: string;
  description: string;
  name: string;
  date: string;
}

export interface WhyChooseThisType {
  icon: string;
  title: string;
  description: string;
}

export interface HowToOrderItemType {
  icon: string;
  title: string;
  description: string;
}

export interface QuestionsItemType {
  question: string;
  answer: string;
}

export interface OurPartnersItemType {
  name: string;
  icon: string;
  host: string;
  alt: string;
}

export interface LanguageOption {
  code: string;
  flag: string;
  name: string;
}

export type SupportedLocale = "en" | "es-ES" | "pt-BR";

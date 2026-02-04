
export interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  whatYouGet: {
    title: string;
    items: {
      id: string;
      label: string;
      content: string;
    }[];
  };
  suitableFamilies: {
    suitable: string[];
    worries: string[];
    expectations: string[];
    unsuitable: string[];
  };
  process: string[];
  price: string;
}

export type ProductType = 'clinical' | 'non-clinical';

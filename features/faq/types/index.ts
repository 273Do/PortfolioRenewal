type FAQObj = {
  sys: {
    id: string;
  };
  title: string;
  description: string;
};

type FAQResponse = {
  faqCollection: {
    items: FAQObj[];
  };
};

export type { FAQObj, FAQResponse };

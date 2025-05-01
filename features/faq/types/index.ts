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

type ToolsObj = {
  tech0: string;
  tech1: string;
  tech2: string;
  tech3: string;
  tech4: string;
  tech5: string;
  tech6: string;
  tech7: string;
  tech8: string;
  tech9: string;
};

type ToolsResponse = {
  toolCollection?: {
    items: ToolsObj;
  };
  technologiesCollection?: {
    items: ToolsObj;
  };
};

export type { FAQObj, FAQResponse, ToolsObj, ToolsResponse };

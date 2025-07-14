type ToolsResponse = {
  toolCollection?: {
    items: string[];
  };
  technologiesCollection?: {
    items: { techNames: string[] };
  };
};

export type { ToolsResponse };

type ToolsResponse = {
  toolCollection?: {
    items: { toolNames: string[] };
  };
  technologiesCollection?: {
    items: { techNames: string[] };
  };
};

export type { ToolsResponse };

// お知らせの型
export type NoticeObj = {
  id: number;
  event_date: Date;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  technologyId?: number;
};

// 使用可能技術の型
export type TechnologyObj = {
  id: number;
  tech0: string;
  tech1: string;
  tech2: string;
  tech3?: string;
  tech4?: string;
  tech5?: string;
  tech6?: string;
  tech7?: string;
  tech8?: string;
  tech9?: string;
  createdAt: Date;
  updatedAt: Date;
  // toolId?: number; //FK
};

export type TechnologyOnlyObj = {
  tech0: string;
  tech1: string;
  tech2: string;
  tech3?: string;
  tech4?: string;
  tech5?: string;
  tech6?: string;
  tech7?: string;
  tech8?: string;
  tech9?: string;
};

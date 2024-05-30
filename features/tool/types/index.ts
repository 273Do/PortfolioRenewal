import type { TechnologyOnlyObj } from "@/features/main/types";

// Toolの型
export type ToolObj = {
  id: number;
  name: string;
  period: string;
  color: string;
  description: string;
  backgroundColor: string;
  ingenuity: string;
  point: string;
  url: string;
  technology: TechnologyOnlyObj;
  genre: GenreObj;
  createdAt: Date;
  updatedAt: Date;
};

// genreの型
export type GenreObj = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

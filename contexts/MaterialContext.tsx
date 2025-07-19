"use client";
import { createContext, type ReactNode, useContext, useState } from "react";

import type { MaterialContextType, MaterialType } from "./types";

const MaterialContext = createContext<MaterialContextType | null>(null);

const MaterialProvider = ({ children }: { children: ReactNode }) => {
  const [material, toggleMaterial] = useState<MaterialType>("wireframe");

  return (
    <MaterialContext.Provider value={{ material, toggleMaterial }}>
      {children}
    </MaterialContext.Provider>
  );
};

const useMaterial = () => {
  const context = useContext(MaterialContext);
  if (!context) {
    throw new Error("useMaterial must be used within a MaterialProvider");
  }
  return context;
};

export { MaterialContext, MaterialProvider, useMaterial };

type MaterialType = "metal" | "wireframe" | "ascii" | "none";

type MaterialContextType = {
  material: MaterialType;
  toggleMaterial: (material: MaterialType) => void;
};

export type { MaterialType, MaterialContextType };

type MaterialType = "metal" | "lamina" | "wireframe" | "ascii";

type MaterialContextType = {
  material: MaterialType;
  toggleMaterial: (material: MaterialType) => void;
};

export type { MaterialType, MaterialContextType };

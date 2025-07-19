import type { RefObject } from "react";

import type { MaterialType } from "@/contexts/types";

interface ModelMaterialProps {
  material: MaterialType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  depth: RefObject<any>;
}

export type { ModelMaterialProps };

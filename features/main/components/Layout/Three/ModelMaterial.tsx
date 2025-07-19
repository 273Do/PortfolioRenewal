import { Edges, MeshTransmissionMaterial } from "@react-three/drei";
import { Color, Depth, Fresnel, LayerMaterial, Noise } from "lamina";
import * as THREE from "three";

import type { ModelMaterialProps } from "./types";

const ModelMaterial = ({ material, depth }: ModelMaterialProps) => {
  switch (material) {
    case "wireframe":
      return <meshStandardMaterial wireframe />;
    case "metal":
      return (
        <>
          <Edges linewidth={1} scale={1} threshold={10} color="white" />
          <MeshTransmissionMaterial
            roughness={0.25}
            backside
            backsideThickness={1}
            thickness={0.1}
            distortion={0.5}
            temporalDistortion={0.03}
            resolution={1024}
          />
        </>
      );
    default:
      return (
        <>
          <Edges linewidth={1} scale={1} threshold={10} color="white" />
          <LayerMaterial side={THREE.BackSide}>
            <Color color="#6645cf" />
            <Depth
              far={3}
              origin={[1, 2, 1]}
              colorA="#ff00e3"
              colorB="#00ffff"
              alpha={1}
              mode="multiply"
              mapping="camera"
            />
            <Depth
              ref={depth}
              near={0.25}
              far={2}
              colorA="#ffe100"
              alpha={1}
              mode="lighten"
              mapping="vector"
            />
            <Fresnel mode="softlight" />
            <Noise
              mapping="world"
              type="white"
              colorA="#ff00e3"
              colorB="#00ffff"
              scale={0.5}
              offset={[0, 0, 0]}
              speed={1}
              mode="multiply"
            />
          </LayerMaterial>
        </>
      );
  }
};

export default ModelMaterial;

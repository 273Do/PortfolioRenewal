"use client";
import { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import type * as THREE from "three";

import { useMaterial } from "@/contexts/MaterialContext";

import ModelMaterial from "./ModelMaterial";

export const Model = () => {
  const { nodes } = useGLTF("./model/logo.glb");

  const { material } = useMaterial();

  const { camera, mouse } = useThree(); // ビューポートの幅を取得

  const ref = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    const targetX = -mouse.x * 1;
    const targetY = -mouse.y * 1;
    // 緩やかに追従させる
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  // const mesh = useRef<THREE.Mesh | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const depth = useRef<any>(null);
  // useFrame((state, delta) => {
  //   if (mesh.current) mesh.current.rotation.z += delta / 2;
  //   if (depth.current?.origin)
  //     depth.current.origin.set(-state.mouse.y, state.mouse.x, 0);
  // });

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        scale={20}
        geometry={(nodes.mesh as THREE.Mesh).geometry}
        rotation={[2, 0.3, 0.25]}
        position={[-1.5, -1.2, 0]}
        ref={ref}
      >
        <ModelMaterial
          material={material}
          //  depth={depth}
        />
      </mesh>
    </>
  );
};

"use client";

import { RGBELoader } from "three-stdlib";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import three_font from "@/public/Inter_Medium_Regular.json";

const Three = ({ three_text, three_color }) => {
  const Theme = useTheme();
  const BGColor = Theme.theme === "dark" ? "#0a0a0b" : "#ffffff";

  const { autoRotate, text, shadow, ...config } = useControls({
    text: three_text,
    backside: true,
    backsideThickness: { value: 0.46, min: 0, max: 2 },
    samples: { value: 15, min: 1, max: 32, step: 1 },
    resolution: { value: 1024, min: 64, max: 2048, step: 64 },
    transmission: { value: 1, min: 0, max: 1 },
    clearcoat: { value: 0.1, min: 0.1, max: 1 },
    clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
    thickness: { value: 0.3, min: 0, max: 5 },
    chromaticAberration: { value: 0, min: 0, max: 5 },
    anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
    roughness: { value: 0.08, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
    distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
    color: three_color,
    gColor: "#ffffff",
    autoRotate: true,
  });

  useEffect(() => {
    config.text = three_text;
    config.color = three_color;
  }, [three_text, three_color, BGColor]);

  //デバイスによってカメラ倍率を変更
  let cameraZoom;
  if (window.innerWidth <= 450) cameraZoom = 40;
  else cameraZoom = 80;

  return (
    <Canvas
      shadows
      orthographic
      camera={{ position: [10, 20, 20], zoom: cameraZoom }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach="background" args={[BGColor]} />
      {/** The text and the grid */}
      <Text
        toolName={three_text}
        config={config}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1, 5]}
      >
        {three_text}
      </Text>
      {/** Controls */}
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={-0.3}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      {/** The environment is just a bunch of shapes emitting light. This is needed for the clear-coat */}
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer
            intensity={20}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[10, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[20, 2, 1]}
          />
          <Lightformer
            type="ring"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-0.1, -1, -5]}
            scale={10}
          />
        </group>
      </Environment>
      {/** Soft shadows */}
      <AccumulativeShadows
        frames={100}
        color={BGColor}
        colorBlend={40}
        toneMapped={true}
        alphaTest={0.7}
        opacity={0.5}
        scale={30}
        position={[0, -1.01, 0]}
      >
        <RandomizedLight
          amount={4}
          radius={10}
          ambient={0.5}
          intensity={1}
          position={[0, 10, -10]}
          size={15}
          mapSize={1024}
          bias={0.0001}
        />
      </AccumulativeShadows>
    </Canvas>
  );
};

const Grid = ({ number = 23, lineWidth = 0.026, height = 0.5 }) => (
  // Renders a grid and crosses as instances
  <Instances position={[0, -1.02, 0]}>
    <planeGeometry args={[lineWidth, height]} />
    <meshBasicMaterial color="#666" />
    {Array.from({ length: number }, (_, y) =>
      Array.from({ length: number }, (_, x) => (
        <group
          key={x + ":" + y}
          position={[
            x * 2 - Math.floor(number / 2) * 2,
            -0.01,
            y * 2 - Math.floor(number / 2) * 2,
          ]}
        >
          <Instance rotation={[-Math.PI / 2, 0, 0]} />
          <Instance rotation={[-Math.PI / 2, 0, Math.PI / 2]} />
        </group>
      ))
    )}
    {/* <gridHelper args={[100, 100, "#bbb", "#bbb"]} position={[0, -0.01, 0]} /> */}
  </Instances>
);

function Text({ toolName, children, config, font = three_font, ...props }) {
  const router = useRouter();
  const texture = useLoader(
    RGBELoader,
    "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"
  );

  return (
    <>
      <group>
        <Center scale={[0.8, 1, 1]} front top {...props}>
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            lineHeight={0.6}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
            onClick={() => router.push(`/tool/${toolName}`)}
          >
            {children}
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
        <Grid />
      </group>
    </>
  );
}

export default Three;

"use client";
import { useRef, useReducer, useMemo } from "react";

import { useSpring, animated, easings } from "@react-spring/three";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { DepthOfField as BaseDepthOfField } from "@react-three/postprocessing";
import { EffectComposer, N8AO, Noise } from "@react-three/postprocessing";
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { easing } from "maath";
import { useTheme } from "next-themes";
import * as THREE from "three";

const accents = ["#4d4d4d", "#20ffa0", "#ff4060", "#ffcc00"];
const DepthOfField = animated(BaseDepthOfField);

const shuffle = (accent = 0) => [
  { color: "#7e7e7e", roughness: 0.1 },
  { color: "#7e7e7e", roughness: 0.75 },
  { color: "#7e7e7e", roughness: 0.25 },
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.25 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.25 },
  //   { color: accents[accent], roughness: 0.1, accent: true },
  //   { color: accents[accent], roughness: 0.75, accent: true },
];

// 3Dシーンのコンポーネント
export default function LogoThree(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  const { theme } = useTheme();

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 14, 0], fov: 17.5, near: 1, far: 20 }}
      {...props}
      className="pointer-events-auto"
    >
      <Scene connectors={connectors} theme={theme} />
    </Canvas>
  );
}

function Scene() {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  // 各オブジェクトの色や質感をランダム化
  const connectors = useMemo(() => shuffle(accent), [accent]);
  const { theme } = useTheme();

  // ガラスマテリアルのモデルの数
  const glass_obj = 4;

  // カメラのボケ効果のスケールを管理
  const springs = useSpring({
    from: { bokehScale: 80 },
    to: { bokehScale: 1 },
    config: {
      duration: 750,
      easing: easings.easeInExpo,
    },
  });

  return (
    // Canvasコンポーネントで3Dシーンを構築
    <>
      {/* 初期背景 */}
      <color
        attach="background"
        args={[theme === "dark" ? "#0a0a0b" : "#ffffff"]}
      />

      {/* ライトの設定 */}
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15} // 光の角度
        penumbra={1} // 光の柔らかさ
        intensity={1} // 光の強さ
        castShadow // シャドウを有効化
      />

      {/* Physicsで物理エンジンを適用 */}
      <Physics /*debug*/ gravity={[0, 0, 0]} debug={false}>
        {/* ポインター */}
        <Pointer />

        {/* Connectorコンポーネントを複数生成 */}
        {
          connectors.map((props, i) => <Connector key={i} {...props} />) /* prettier-ignore */
        }
        {[...Array(glass_obj)].map((_, i) => (
          <Connector key={i} position={[10, 10, 5]}>
            <Model>
              {/* ガラス風の光の透過マテリアルを設定 */}
              <MeshTransmissionMaterial
                clearcoat={2} // クリアコート（反射の強さ），１で最大（ガラスのような光沢）
                thickness={0.1} // 厚みの影響度（ガラスの厚み）
                anisotropicBlur={0.1} // 異方性ぼかし（透明部分のぼやけ具合）
                chromaticAberration={0.1} // 色収差（光の屈折による虹色のにじみ）
                samples={8} // レンダリング時のサンプリング数（高いほど滑らか）
                resolution={512} // 屈折のテクスチャ解像度（高いほど詳細だが重い）
              />
            </Model>
          </Connector>
        ))}
      </Physics>

      {/* EffectComposerでポストプロセスエフェクト(ポストプロセス処理)を適用 */}
      <EffectComposer disableNormalPass multisampling={8}>
        {/* N8AOでアンビエントオクルージョン(影の奥行き)を適用 */}
        <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={springs.bokehScale}
          // bokehScale={40}
        />
        <Noise opacity={10} premultiply />
      </EffectComposer>

      {/* Environmentで環境マップを適用 */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
    </>
  );
}

// オブジェクトの物理演算を行うコンポーネント
function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  // 指定されていない場合は randFloatSpread(10) を使ってランダムな初期位置を設定
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);

  // フレームごとに物理演算を適用
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);

    const centerOffset = new THREE.Vector3(1.5, 0, 0); // X方向に +1 ずらす

    // オブジェクトを中心に引っ張る力を加えている
    // applyImpulse を使って，オブジェクトを中央に向かうように動かす
    // negate().multiplyScalar(0.2) によって，現在の位置の逆方向に力を加える
    api.current?.applyImpulse(
      vec
        .copy(api.current.translation())
        .sub(centerOffset)
        .negate()
        .multiplyScalar(0.2)
    );
  });

  const v = 2;
  // RigidBodyで物理演算を適用
  return (
    <RigidBody
      linearDamping={4} // 線形ダンピング
      angularDamping={1} // 角速度ダンピング
      friction={0.1} // 摩擦
      position={pos} // 位置
      rotation={pos} // 回転
      ref={api}
      colliders={false} // コライダーを無効化
    >
      {/* CuboidCollider を使ってオブジェクトの衝突判定を設定 */}
      <CuboidCollider
        args={[0.8 * v, 0.1, 0.3 * v]}
        position={[0.7 * v, 0.1, -0.4 * v]}
      />
      {/* 当たり判定をモデルそのものにする(激重) <TrimeshCollider args={[api.mesh.geometry]} /> */}
      {children ? children : <Model {...props} />}
      {accent && (
        // アクセント色のポイントライト(distanceで影響範囲を指定)
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

// マウスカーソルの位置を追従するコンポーネント
function Pointer({ vec = new THREE.Vector3() }) {
  // リアルタイムでマウスカーソルの位置を取得し更新
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]} // 初期位置
      type="kinematicPosition" // キネマティックボディ
      colliders={false} // コライダーを無効化
      ref={ref}
    >
      {/* マウスカーソルの形状は球体 */}
      <BallCollider args={[0.75]} />
    </RigidBody>
  );
}

// 3Dモデルを表示するコンポーネント
function Model({ children, color = "white", roughness = 0, ...props }) {
  const ref = useRef();
  // glTFファイルを読み込む
  // const { nodes, materials } = useGLTF("/c-transformed.glb");
  const { nodes, materials } = useGLTF("/273do_logo.glb");

  useFrame((state, delta) => {
    // easing.dampC で色を滑らかに変化させる
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={20}
      geometry={nodes.mesh.geometry}
    >
      {/* マテリアル設定 */}
      <meshStandardMaterial
        metalness={0.2}
        roughness={roughness}
        // map={materials.base.map}
      />
      {children}
    </mesh>
  );
}

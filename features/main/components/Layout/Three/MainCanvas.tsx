"use client";
import { AsciiRenderer, Environment, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DotScreen, EffectComposer } from "@react-three/postprocessing";
import { useTheme } from "next-themes";

import { useMaterial } from "@/contexts/MaterialContext";

import { Model } from "./Model";

const MainCanvas = ({ className }: { className?: string }) => {
  const { material } = useMaterial();
  const { theme } = useTheme();

  if (material !== "none")
    return (
      <div className={`z-[160] h-screen w-screen ${className}`}>
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          gl={{
            powerPreference: "high-performance",
            antialias: false,
            stencil: false,
            depth: true,
            preserveDrawingBuffer: true,
            failIfMajorPerformanceCaveat: false,
          }}
        >
          <Model />
          <Environment preset="night">
            <Lightformer
              intensity={5}
              position={[1, 6, 3.6]}
              scale={[10, 50, 1]}
              rotation={[Math.PI / 2, 0, 0]}
              onUpdate={(self: {
                lookAt: (arg0: number, arg1: number, arg2: number) => void;
              }) => self.lookAt(0, 0, 0)}
            />
          </Environment>

          <EffectComposer>
            {material === "dot" && (
              <DotScreen angle={Math.PI * 0.5} scale={2.5} />
            )}

            {material === "ascii" && (
              <AsciiRenderer
                invert={false}
                resolution={0.1}
                fgColor={theme === "dark" ? "#bbbbbb" : "#393939"}
                bgColor="transparent"
                characters=" .:-+*%@#^"
              />
            )}
          </EffectComposer>
        </Canvas>
      </div>
    );
};

export default MainCanvas;

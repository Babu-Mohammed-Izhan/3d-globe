import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GlossySphere from "./sphere";
import { useControls } from "leva";
import { PresetsType } from "@react-three/drei/helpers/environment-assets";

const GlossySphereCanvas = () => {
  const { environment } = useControls({
    environment: {
      value: "lobby",
      options: [
        "apartment",
        "city",
        "dawn",
        "forest",
        "lobby",
        "night",
        "park",
        "studio",
        "sunset",
        "warehouse",
      ],
    },
  });

  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={6} />
      <spotLight
        intensity={2}
        angle={0.2}
        penumbra={1}
        position={[5, 15, 10]}
      />
      <GlossySphere />
      <Environment preset={environment as PresetsType} background />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default GlossySphereCanvas;

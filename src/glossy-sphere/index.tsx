import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GlossySphere, { Grading } from "./sphere";

const GlossySphereCanvas = () => {
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight />
      <spotLight
        intensity={0.5}
        angle={0.2}
        penumbra={1}
        position={[5, 15, 10]}
      />
      <GlossySphere />
      <Grading />
      <Environment preset="dawn" background blur={0.6} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default GlossySphereCanvas;

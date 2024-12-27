import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Tutorial = () => {
  return (
    <Canvas className="canvas">
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} intensity={2} />
      <directionalLight color="red" position={[0, 0, -5]} intensity={2} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Tutorial;

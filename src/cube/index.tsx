import { Canvas } from "@react-three/fiber";
import Cube from "./cube";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

const CubeCanvas = () => {
  const { speed, x } = useControls({
    speed: { value: 1, min: 1, max: 20, step: 1 },
    x: { value: 0, min: 0, max: 10, step: 1 },
  });
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Cube position={[-1.5 - x, 0, 0]} speed={speed} />
      <Cube position={[0, 0, 0]} oppositeSpin={true} speed={speed} />
      <Cube position={[1.5 + x, 0, 0]} speed={speed} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default CubeCanvas;

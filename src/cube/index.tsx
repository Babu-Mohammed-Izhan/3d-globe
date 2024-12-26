import { Canvas } from "@react-three/fiber";
import Cube from "./cube";
import { OrbitControls } from "@react-three/drei";

const CubeCanvas = () => {
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
      <Cube position={[-1.2, 0, 0]} />
      <Cube position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default CubeCanvas;

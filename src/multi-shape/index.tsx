import { Canvas } from "@react-three/fiber";
import Cube from "./cube";
import { OrbitControls } from "@react-three/drei";
import Polygon from "./ploygon";

const MultiShapeCanvas = () => {
  return (
    <Canvas camera={{ position: [2, 2, 2] }}>
      <mesh>
        <ambientLight intensity={Math.PI} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Cube position={[0, 0, 0]} />
        <Polygon currentPosition={[0, 1, 0]} targetPosition={[1, 0, 0]} />
        <Polygon currentPosition={[0, -1, 0]} targetPosition={[-1, 0, 0]} />
        <Polygon currentPosition={[1, 0, 0]} targetPosition={[0, 0, 1]} />
        <Polygon currentPosition={[-1, 0, 0]} targetPosition={[0, 0, -1]} />
        <Polygon currentPosition={[0, 0, 1]} targetPosition={[0, 1, 0]} />
        <Polygon currentPosition={[0, 0, -1]} targetPosition={[0, -1, 0]} />
        <OrbitControls enableZoom={false} />
      </mesh>
    </Canvas>
  );
};

export default MultiShapeCanvas;

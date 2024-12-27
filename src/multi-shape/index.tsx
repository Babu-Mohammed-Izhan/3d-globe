import { Canvas } from "@react-three/fiber";
import Cube from "./cube";
import { OrbitControls } from "@react-three/drei";
import Polygon from "./ploygon";

const MultiShapeCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3.5] }}>
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
        <Polygon position={[0, 1, 0]} />
        <Polygon position={[0, -1, 0]} />
        <Polygon position={[1, 0, 0]} />
        <Polygon position={[-1, 0, 0]} />
        <Polygon position={[0, 0, 1]} />
        <Polygon position={[0, 0, -1]} />
        <OrbitControls enableZoom={false} />
      </mesh>
    </Canvas>
  );
};

export default MultiShapeCanvas;

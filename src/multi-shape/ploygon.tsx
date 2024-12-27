import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Polygon = ({ position }: { position: Vector3 }) => {
  const meshRef = useRef<Mesh>(null);

  const [hovered, hover] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <dodecahedronGeometry args={[0.2]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "#5de4c7"} />
      </mesh>
    </group>
  );
};

export default Polygon;

import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Cube = ({ position }: { position: Vector3 }) => {
  const ref = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={(event) => (event.stopPropagation, hover(true))}
      onPointerOut={(_) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "blue" : "indigo"} />
    </mesh>
  );
};

export default Cube;

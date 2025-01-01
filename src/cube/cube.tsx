import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Cube = ({
  position,
  oppositeSpin,
  speed,
}: {
  position: Vector3;
  oppositeSpin?: boolean;
  speed?: number;
}) => {
  const ref = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);

  useFrame((_, delta) => {
    if (ref.current) {
      if (oppositeSpin) {
        ref.current.rotation.x -= delta * (speed ?? 1);
      } else {
        ref.current.rotation.x += delta * (speed ?? 1);
      }
    }
  });

  return (
    <mesh
      ref={ref}
      position={position}
      onPointerOver={(event) => (event.stopPropagation, hover(true))}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "blue" : "indigo"} />
    </mesh>
  );
};

export default Cube;

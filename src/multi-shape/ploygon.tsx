import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import * as THREE from "three";

const Polygon = ({
  currentPosition,
  targetPosition,
}: {
  currentPosition: number[];
  targetPosition: number[];
}) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);
  const [towardsTarget, setTowardsTarget] = useState(true);
  const [currentLocalPosition] = useState(
    new THREE.Vector3(...currentPosition)
  );

  useFrame(() => {
    if (meshRef.current) {
      const target = towardsTarget
        ? new THREE.Vector3(...targetPosition)
        : new THREE.Vector3(...currentPosition);
      currentLocalPosition.lerp(target, 0.05);

      if (currentLocalPosition.distanceTo(target) < 0.01) {
        setTowardsTarget((prev) => !prev);
      }

      meshRef.current.position.copy(currentLocalPosition);
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <dodecahedronGeometry args={[0.2]} />
        <meshStandardMaterial color={hovered ? "#5de4c7" : "hotpink"} />
      </mesh>
    </group>
  );
};

export default Polygon;

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector3 } from "three";
import EarthMaterial from "./earth-material";
import AtmosphereMesh from "./atmoshpere-mesh";

const Earth = ({
  sunDirection,
  speed,
}: {
  sunDirection: Vector3;
  speed: number;
}) => {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += speed;
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2, 64]} />
        <EarthMaterial sunDirection={sunDirection} />
        <AtmosphereMesh />
      </mesh>
    </group>
  );
};

export default Earth;

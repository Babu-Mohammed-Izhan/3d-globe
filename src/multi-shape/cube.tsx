import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Cube = ({ position }: { position: Vector3 }) => {
  const textRef = useRef<Mesh>(null);
  const [hovered, hover] = useState(false);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime * 2) * 4;
    }
  });

  return (
    <mesh
      position={position}
      onPointerOver={(event) => (event.stopPropagation, hover(true))}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[0.75, 0.75, 0.75]} />
      <meshStandardMaterial>
        <RenderTexture attach="map" anisotropy={16}>
          <PerspectiveCamera
            makeDefault
            manual
            aspect={1 / 1}
            position={[0, 0, 5]}
          />
          <color
            attach="background"
            args={hovered ? ["#007dff"] : ["#ff8200"]}
          />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} />
          <Text
            ref={textRef}
            fontSize={4}
            color={hovered ? "white" : "#4c4c4a"}
          >
            HELLO
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;

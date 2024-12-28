import { useTexture } from "@react-three/drei";
import { useState } from "react";
import { Texture } from "three";

const GlossySphere = () => {
  const texture = useTexture("/terrazo.png");
  const [clicked, setClicked] = useState(false);

  return (
    <mesh onClick={() => setClicked((prev) => !prev)}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        map={clicked ? texture : new Texture()}
        clearcoat={1}
        metalness={1}
        clearcoatRoughness={0}
        roughness={0}
      />
    </mesh>
  );
};

export default GlossySphere;

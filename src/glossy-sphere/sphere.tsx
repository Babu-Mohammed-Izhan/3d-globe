import { extend, ReactThreeFiber, useLoader } from "@react-three/fiber";
import { Effects, useTexture } from "@react-three/drei";
import { LUTPass, LUTCubeLoader } from "three-stdlib";
import { useState } from "react";
import { Texture } from "three";

extend({ LUTPass });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      lUTPass: ReactThreeFiber.Object3DNode<LUTPass, typeof LUTPass>;
    }
  }
}

export function Grading() {
  const cubeResult = useLoader(LUTCubeLoader, "/cubicle-99.CUBE");

  return (
    <Effects>
      <lUTPass lut={cubeResult.texture3D} intensity={0.75} />
    </Effects>
  );
}

const GlossySphere = () => {
  const texture = useTexture("/terrazo.png");
  const [clicked, setClicked] = useState(false);

  return (
    <mesh onClick={() => setClicked((prev) => !prev)}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial
        map={clicked ? new Texture() : texture} // Reset texture on click
        clearcoat={1}
        metalness={0.5}
        clearcoatRoughness={0}
        roughness={0}
      />
    </mesh>
  );
};

export default GlossySphere;

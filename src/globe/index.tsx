import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { NoToneMapping, Vector3 } from "three";
import Earth from "./earth";

const sunDirection = new Vector3(-2, 0.5, 1.5);

const EarthCanvas = () => {
  const { x, y, z } = sunDirection;

  const { speed } = useControls({
    speed: { value: 0.001, min: 0.001, max: 0.1, step: 0.001 },
  });

  return (
    <Canvas
      camera={{ position: [0, 0.1, 5] }}
      gl={{ toneMapping: NoToneMapping }}
      style={{ backgroundColor: "black" }}
    >
      <Earth sunDirection={sunDirection} speed={speed} />
      <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
      <directionalLight position={[x, y, z]} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default EarthCanvas;

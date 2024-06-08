import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Moon = ({
  moon1Path,
  moon1OrbitRadius,
  moon1OrbitSpeed,
  moon1Scale,
  planetPosition,
  timeSpeed,
  speedOfRotation,
}) => {
  const { scene } = useGLTF(moon1Path);
  const moon1Ref = useRef();
  const moon1OrbitRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (moon1Ref.current && moon1OrbitRef.current) {
      const rotationSpeed = speedOfRotation * timeSpeed;
      moon1Ref.current.rotation.y += rotationSpeed;
      moon1Ref.current.rotation.x = Math.PI / 2;
      const moon1X =
        Math.cos(time * moon1OrbitSpeed * timeSpeed) * moon1OrbitRadius;
      const moon1Y =
        Math.sin(time * moon1OrbitSpeed * timeSpeed) * moon1OrbitRadius;

      moon1Ref.current.position.set(moon1X, moon1Y, 0);
      moon1Ref.current.position.add(planetPosition.current.position);
      moon1OrbitRef.current.position.set(
        planetPosition.current.position.x,
        planetPosition.current.position.y,
        0
      );
    }
  });

  return (
    <>
      <primitive object={scene} ref={moon1Ref} scale={moon1Scale} />
      <mesh ref={moon1OrbitRef}>
        <torusGeometry args={[moon1OrbitRadius, 0.005, 10, 100]} />
      </mesh>
    </>
  );
};
export default Moon;

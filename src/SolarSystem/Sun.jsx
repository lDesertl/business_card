import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
const Sun = ({ timeSpeed }) => {
  const { scene } = useGLTF("/Models/Sun.glb");
  const sunRef = useRef();
  // Функция для вращения вокруг своей оси
  useFrame(() => {
    if (sunRef.current) {
      const rotationSpeed = 0.0333 * timeSpeed;
      sunRef.current.rotation.y += rotationSpeed;
      sunRef.current.rotation.x = Math.PI / 2;
    }
  });

  return (
    <primitive
      object={scene}
      ref={sunRef}
      position={[0, 0, 0]}
      scale={0.0006}
    />
  );
};

export default Sun;

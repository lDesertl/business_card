import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
const Sun = () => {
  const { scene } = useGLTF("/Models/Sun.glb");
  const sunRef = useRef();
  // Функция для вращения вокруг своей оси
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.z += 0.0333;
    }
  });

  return (
    <primitive
      object={scene}
      ref={sunRef}
      position={[0, 0, 0]}
      scale={0.0003}
    />
  );
};

export default Sun;

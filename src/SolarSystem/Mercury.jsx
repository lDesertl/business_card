import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
const Mercury = () => {
  const { scene } = useGLTF("/Models/Mercury.glb");
  const planetRef = useRef();
  const radius = 0.6; // Радиус окружности
  const speed = 4.16; // Скорость вращения

  // Функция для вращения вокруг своей оси и перемещения по орбите
  useFrame((state, delta) => {
    if (planetRef.current) {
      const time = state.clock.elapsedTime;

      // Вращение вокруг своей оси
      planetRef.current.rotation.z += 0.017;

      // Перемещение по орбите
      const x = Math.cos(time * speed) * radius;
      const y = Math.sin(time * speed) * radius;
      planetRef.current.position.set(x, y, 0);
    }
  });

  return <primitive object={scene} ref={planetRef} scale={0.0003} />;
};

export default Mercury;

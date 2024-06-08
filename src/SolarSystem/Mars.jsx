import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
const Mars = () => {
  const { scene } = useGLTF("/Models/Mars.glb");
  const planetRef = useRef();
  const radius = 2.5; // Радиус окружности
  const speed = 0.53; // Скорость вращения

  // Функция для вращения вокруг своей оси и перемещения по орбите
  useFrame((state, delta) => {
    if (planetRef.current) {
      const time = state.clock.elapsedTime;

      // Вращение вокруг своей оси
      planetRef.current.rotation.z += 0.97;

      // Перемещение по орбите
      const x = Math.cos(time * speed) * radius;
      const y = Math.sin(time * speed) * radius;
      planetRef.current.position.set(x, y, 0);
    }
  });

  return <primitive object={scene} ref={planetRef} scale={0.0003} />;
};

export default Mars;

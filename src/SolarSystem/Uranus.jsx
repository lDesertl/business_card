import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
const Uranus = () => {
  const { scene } = useGLTF("/Models/Uranus.glb");
  const planetRef = useRef();
  const radius = 32; // Радиус окружности
  const speed = 0.0119; // Скорость вращения

  // Функция для вращения вокруг своей оси и перемещения по орбите
  useFrame((state, delta) => {
    if (planetRef.current) {
      const time = state.clock.elapsedTime;

      // Вращение вокруг своей оси
      planetRef.current.rotation.z += 1.3888;

      // Перемещение по орбите
      const x = Math.cos(time * speed) * radius;
      const y = Math.sin(time * speed) * radius;
      planetRef.current.position.set(x, y, -30);
    }
  });

  return <primitive object={scene} ref={planetRef} scale={0.003} />;
};

export default Uranus;

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
const Mars = ({ timeSpeed }) => {
  const { scene } = useGLTF("/Models/Mars.glb");
  const planetRef = useRef();
  const radius = 1.8; // Радиус окружности
  const speed = 0.53; // Скорость вращения
  // const speed = 0;
  // Функция для вращения вокруг своей оси и перемещения по орбите
  useFrame((state, delta) => {
    if (planetRef.current) {
      const time = state.clock.elapsedTime;

      // Вращение вокруг своей оси
      const rotationSpeed = 0.97 * timeSpeed;
      planetRef.current.rotation.y += rotationSpeed;
      planetRef.current.rotation.x = Math.PI / 2;

      // Перемещение по орбите
      const x = Math.cos(time * speed * timeSpeed) * radius;
      const y = Math.sin(time * speed * timeSpeed) * radius;
      planetRef.current.position.set(x, y, 0);
    }
  });

  return <primitive object={scene} ref={planetRef} scale={0.0002} />;
};

export default Mars;

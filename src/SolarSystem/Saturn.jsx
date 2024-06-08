import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
const Saturn = () => {
  const { scene } = useGLTF("/Models/scene.glb");
  const planetRef = useRef();
  const radius = 28; // Радиус окружности
  const speed = 0.0339; // Скорость вращения

  // Функция для вращения вокруг своей оси и перемещения по орбите
  useFrame((state, delta) => {
    if (planetRef.current) {
      const time = state.clock.elapsedTime;

      // Вращение вокруг своей оси
      planetRef.current.rotation.y += 2.2222;
      planetRef.current.rotation.z += 0;
      planetRef.current.rotation.x = Math.PI / 2;

      // Перемещение по орбите
      const x = Math.cos(time * speed) * radius;
      const y = Math.sin(time * speed) * radius;
      planetRef.current.position.set(x, y, -30);
    }
  });

  return <primitive object={scene} ref={planetRef} />;
};

export default Saturn;

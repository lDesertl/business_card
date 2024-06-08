import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
const Earth = ({ timeSpeed }) => {
  const { scene } = useGLTF("/Models/Earth.glb");
  const { scene: moonScene } = useGLTF("/Models/Moon.glb");
  const planetRef = useRef();
  const moonRef = useRef();
  const moonOrbitRef = useRef();
  const radius = 1.3; // Радиус окружности
  const speed = 1; // Скорость вращения
  // const speed = 0;
  const moonOrbitRadius = 0.2; // Радиус орбиты Луны вокруг Земли
  const moonOrbitSpeed = 2; // Скорость вращения Луны вокруг Земли
  // Функция для вращения вокруг своей оси и перемещения по орбите
  useFrame((state, delta) => {
    if (planetRef.current && moonRef.current && moonOrbitRef.current) {
      const time = state.clock.elapsedTime;

      // Вращение вокруг своей оси
      const rotationSpeed = 1 * timeSpeed;
      planetRef.current.rotation.y += rotationSpeed;
      planetRef.current.rotation.x = Math.PI / 2;

      // Перемещение по орбите
      const x = Math.cos(time * speed * timeSpeed) * radius;
      const y = Math.sin(time * speed * timeSpeed) * radius;
      planetRef.current.position.set(x, y, 0);
      moonOrbitRef.current.position.set(x, y, 0);
      // Вращение Луны вокруг Земли
      const moonX =
        Math.cos(time * moonOrbitSpeed * timeSpeed) * moonOrbitRadius;
      const moonY =
        Math.sin(time * moonOrbitSpeed * timeSpeed) * moonOrbitRadius;
      moonRef.current.position.set(moonX, moonY, 0);

      moonRef.current.position.add(planetRef.current.position);
    }
  });

  return (
    <>
      <primitive object={scene} ref={planetRef} scale={0.00026} />
      <primitive object={moonScene} ref={moonRef} scale={0.00005} />
      <mesh ref={moonOrbitRef}>
        <torusGeometry args={[0.2, 0.005, 10, 100]} />
      </mesh>
    </>
  );
};

export default Earth;

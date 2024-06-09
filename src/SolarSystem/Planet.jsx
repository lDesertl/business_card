import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Moon from "./Moon";

const Planet = ({
  modelPath,
  radius,
  speed,
  speedOfRotation,
  timeSpeed,
  scale,
  setSelectedPlanet,
  setCamControls,
  moon1Path,
  moon1OrbitRadius,
  moon1OrbitSpeed,
  moon1SpeedOfRotation,
  moon1Scale,
  moon2Path,
  moon2OrbitRadius,
  moon2OrbitSpeed,
  moon2SpeedOfRotation,
  moon2Scale,
  moon3Path,
  moon3OrbitRadius,
  moon3OrbitSpeed,
  moon3SpeedOfRotation,
  moon3Scale,
  moon4Path,
  moon4OrbitRadius,
  moon4OrbitSpeed,
  moon4SpeedOfRotation,
  moon4Scale,
  moon5Path,
  moon5OrbitRadius,
  moon5OrbitSpeed,
  moon5SpeedOfRotation,
  moon5Scale,
  moon6Path,
  moon6OrbitRadius,
  moon6OrbitSpeed,
  moon6SpeedOfRotation,
  moon6Scale,
  moon7Path,
  moon7OrbitRadius,
  moon7OrbitSpeed,
  moon7SpeedOfRotation,
  moon7Scale,
  moon8Path,
  moon8OrbitRadius,
  moon8OrbitSpeed,
  moon8SpeedOfRotation,
  moon8Scale,
  moon9Path,
  moon9OrbitRadius,
  moon9OrbitSpeed,
  moon9SpeedOfRotation,
  moon9Scale,
}) => {
  const { scene } = useGLTF(modelPath);
  const planetRef = useRef();
  useFrame((state) => {
    if (planetRef.current) {
      const time = state.clock.elapsedTime;
      // Вращение вокруг своей оси
      const rotationSpeed = speedOfRotation * timeSpeed;
      planetRef.current.rotation.y += rotationSpeed;
      planetRef.current.rotation.x = Math.PI / 2;

      // Перемещение по орбите
      const x = Math.cos(time * speed * timeSpeed) * radius;
      const y = Math.sin(time * speed * timeSpeed) * radius;
      planetRef.current.position.set(x, y, 0);
    }
  });

  const handleClick = () => {
    if (setSelectedPlanet) {
      setSelectedPlanet(planetRef.current);
      setCamControls(false);
    }
  };

  return (
    <>
      <group ref={planetRef} onClick={handleClick}>
        <primitive object={scene} scale={scale} />
      </group>
      <mesh>
        <torusGeometry args={[radius, 0.01, 10, 100]} />
      </mesh>
      {moon1Path && (
        <Moon
          moon1Path={moon1Path}
          moon1OrbitRadius={moon1OrbitRadius}
          moon1OrbitSpeed={moon1OrbitSpeed}
          moon1Scale={moon1Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon1SpeedOfRotation}
        />
      )}
      {moon2Path && (
        <Moon
          moon1Path={moon2Path}
          moon1OrbitRadius={moon2OrbitRadius}
          moon1OrbitSpeed={moon2OrbitSpeed}
          moon1Scale={moon2Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon2SpeedOfRotation}
        />
      )}
      {moon3Path && (
        <Moon
          moon1Path={moon3Path}
          moon1OrbitRadius={moon3OrbitRadius}
          moon1OrbitSpeed={moon3OrbitSpeed}
          moon1Scale={moon3Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon3SpeedOfRotation}
        />
      )}
      {moon4Path && (
        <Moon
          moon1Path={moon4Path}
          moon1OrbitRadius={moon4OrbitRadius}
          moon1OrbitSpeed={moon4OrbitSpeed}
          moon1Scale={moon4Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon4SpeedOfRotation}
        />
      )}
      {moon5Path && (
        <Moon
          moon1Path={moon5Path}
          moon1OrbitRadius={moon5OrbitRadius}
          moon1OrbitSpeed={moon5OrbitSpeed}
          moon1Scale={moon5Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon5SpeedOfRotation}
        />
      )}
      {moon6Path && (
        <Moon
          moon1Path={moon6Path}
          moon1OrbitRadius={moon6OrbitRadius}
          moon1OrbitSpeed={moon6OrbitSpeed}
          moon1Scale={moon6Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon6SpeedOfRotation}
        />
      )}
      {moon7Path && (
        <Moon
          moon1Path={moon7Path}
          moon1OrbitRadius={moon7OrbitRadius}
          moon1OrbitSpeed={moon7OrbitSpeed}
          moon1Scale={moon7Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon7SpeedOfRotation}
        />
      )}
      {moon8Path && (
        <Moon
          moon1Path={moon8Path}
          moon1OrbitRadius={moon8OrbitRadius}
          moon1OrbitSpeed={moon8OrbitSpeed}
          moon1Scale={moon8Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon8SpeedOfRotation}
        />
      )}
      {moon9Path && (
        <Moon
          moon1Path={moon9Path}
          moon1OrbitRadius={moon9OrbitRadius}
          moon1OrbitSpeed={moon9OrbitSpeed}
          moon1Scale={moon9Scale}
          planetPosition={planetRef}
          timeSpeed={timeSpeed}
          speedOfRotation={moon9SpeedOfRotation}
        />
      )}
    </>
  );
};

export default Planet;

import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import Controls from "./Controls";
import Planet from "./Planet";
import Stars from "./Stars";

const SolarSystem = () => {
  const cameraRef = useRef();
  const timeSpeed = 0.1;

  return (
    <div className="SystemBox">
      <Canvas
        style={{ background: "#000714" }}
        camera={{ position: [0, -10, 5], rotation: [Math.PI / 4, 0, 0] }} // Начальное положение камеры
        orbitControls
      >
        <Suspense fallback={<>Загрузка</>}>
          <ambientLight intensity={6} />
          <pointLight position={[10, 10, 10]} ref={cameraRef} />
          <Stars count={5000} r={20} r1={80} />
          <Planet
            modelPath="/Models/Sun/Sun.glb"
            radius={0}
            speed={0}
            scale={0.0006}
            timeSpeed={timeSpeed}
            speedOfRotation={0.0333}
          />
          <Planet
            modelPath="/Models/Planets/Mercury.glb"
            radius={1}
            speed={4.79}
            scale={0.0001}
            timeSpeed={timeSpeed}
            speedOfRotation={0.017}
          />
          <Planet
            modelPath="/Models/Planets/Venus.glb"
            radius={1.9}
            speed={3.5}
            scale={0.0002}
            timeSpeed={timeSpeed}
            speedOfRotation={0.004115}
          />
          <Planet
            modelPath="/Models/Planets/Earth.glb"
            radius={2.6}
            speed={2.98}
            scale={0.00026}
            timeSpeed={timeSpeed}
            speedOfRotation={1}
            moon1Path={"/Models/Moons/Moon.glb"}
            moon1OrbitRadius={0.4}
            moon1OrbitSpeed={1.023}
            moon1SpeedOfRotation={0.14663}
            moon1Scale={0.00005}
          />
          <Planet
            modelPath="/Models/Planets/Mars.glb"
            radius={4}
            speed={2.41}
            scale={0.0002}
            timeSpeed={timeSpeed}
            speedOfRotation={0.97}
            moon1Path={"/Models/Moons/Phobos.glb"}
            moon1OrbitRadius={0.5}
            moon1OrbitSpeed={2.138}
            moon1SpeedOfRotation={0.14663}
            moon1Scale={0.001}
            moon2Path={"/Models/Moons/Deimos.glb"}
            moon2OrbitRadius={0.6}
            moon2OrbitSpeed={1.351}
            moon2SpeedOfRotation={0.14663}
            moon2Scale={0.002}
          />
          <Planet
            modelPath="/Models/Planets/Jupiter.glb"
            radius={7}
            speed={1.31}
            scale={0.0005}
            timeSpeed={timeSpeed}
            speedOfRotation={2.2439}
            moon1Path={"/Models/Moons/Io.glb"}
            moon1OrbitRadius={0.5}
            moon1OrbitSpeed={2.108}
            moon1SpeedOfRotation={0.14663}
            moon1Scale={0.0001}
            moon2Path={"/Models/Moons/Europa.glb"}
            moon2OrbitRadius={0.6}
            moon2OrbitSpeed={1.369}
            moon2SpeedOfRotation={0.14663}
            moon2Scale={0.0001}
            moon3Path={"/Models/Moons/Ganymede.glb"}
            moon3OrbitRadius={0.7}
            moon3OrbitSpeed={1.07}
            moon3SpeedOfRotation={0.14663}
            moon3Scale={0.0001}
            moon4Path={"/Models/Moons/Callisto.glb"}
            moon4OrbitRadius={0.8}
            moon4OrbitSpeed={0.713}
            moon4SpeedOfRotation={0.14663}
            moon4Scale={0.0001}
          />
          <Planet
            modelPath="/Models/Planets/Saturn.glb"
            radius={10}
            speed={0.97}
            scale={0.0003}
            timeSpeed={timeSpeed}
            speedOfRotation={2.2222}
            moon1Path={"/Models/Moons/Mimas.glb"}
            moon1OrbitRadius={0.5}
            moon1OrbitSpeed={3.14}
            moon1SpeedOfRotation={0.14663}
            moon1Scale={0.0001}
            moon2Path={"/Models/Moons/Enceladus.glb"}
            moon2OrbitRadius={0.6}
            moon2OrbitSpeed={2.01}
            moon2SpeedOfRotation={0.14663}
            moon2Scale={0.0001}
            moon3Path={"/Models/Moons/Tethys.glb"}
            moon3OrbitRadius={0.7}
            moon3OrbitSpeed={1.27}
            moon3SpeedOfRotation={0.14663}
            moon3Scale={0.0001}
            moon4Path={"/Models/Moons/Dione.glb"}
            moon4OrbitRadius={0.8}
            moon4OrbitSpeed={1.02}
            moon4SpeedOfRotation={0.14663}
            moon4Scale={0.0001}
            moon5Path={"/Models/Moons/Rhea.glb"}
            moon5OrbitRadius={0.9}
            moon5OrbitSpeed={0.67}
            moon5SpeedOfRotation={0.14663}
            moon5Scale={0.0001}
            moon6Path={"/Models/Moons/Titan.glb"}
            moon6OrbitRadius={1}
            moon6OrbitSpeed={0.47}
            moon6SpeedOfRotation={0.14663}
            moon6Scale={0.0001}
            moon7Path={"/Models/Moons/Hyperion.glb"}
            moon7OrbitRadius={1.1}
            moon7OrbitSpeed={0.37}
            moon7SpeedOfRotation={0.14663}
            moon7Scale={0.0001}
            moon8Path={"/Models/Moons/Iapetus.glb"}
            moon8OrbitRadius={1.2}
            moon8OrbitSpeed={0.23}
            moon8SpeedOfRotation={0.14663}
            moon8Scale={0.0001}
          />
          <Planet
            modelPath="/Models/Planets/Uranus.glb"
            radius={13}
            speed={0.68}
            scale={0.0003}
            timeSpeed={timeSpeed}
            speedOfRotation={1.3888}
            moon1Path={"/Models/Moons/Miranda.glb"}
            moon1OrbitRadius={0.5}
            moon1OrbitSpeed={1.44}
            moon1SpeedOfRotation={0.14663}
            moon1Scale={0.0001}
            moon2Path={"/Models/Moons/Ariel.glb"}
            moon2OrbitRadius={0.6}
            moon2OrbitSpeed={1.19}
            moon2SpeedOfRotation={0.14663}
            moon2Scale={0.0001}
            moon3Path={"/Models/Moons/Umbriel.glb"}
            moon3OrbitRadius={0.7}
            moon3OrbitSpeed={1.04}
            moon3SpeedOfRotation={0.14663}
            moon3Scale={0.0001}
            moon4Path={"/Models/Moons/Titania.glb"}
            moon4OrbitRadius={0.8}
            moon4OrbitSpeed={0.88}
            moon4SpeedOfRotation={0.14663}
            moon4Scale={0.0001}
            moon5Path={"/Models/Moons/Oberon.glb"}
            moon5OrbitRadius={0.9}
            moon5OrbitSpeed={0.76}
            moon5SpeedOfRotation={0.14663}
            moon5Scale={0.0001}
          />
          <Planet
            modelPath="/Models/Planets/Neptune.glb"
            radius={15.5}
            speed={0.54}
            scale={0.0003}
            timeSpeed={timeSpeed}
            speedOfRotation={1.4925}
            moon1Path={"/Models/Moons/Triton.glb"}
            moon1OrbitRadius={0.5}
            moon1OrbitSpeed={2.25}
            moon1SpeedOfRotation={0.14663}
            moon1Scale={0.0001}
          />
          <Planet
            modelPath="/Models/Planets/Pluto.glb"
            radius={18}
            speed={0.47}
            scale={0.00007}
            timeSpeed={timeSpeed}
            speedOfRotation={0.1565}
            moon1Path={"/Models/Moons/Charon.glb"}
            moon1OrbitRadius={0.5}
            moon1OrbitSpeed={1.96}
            moon1SpeedOfRotation={0.14663}
            moon1Scale={0.0001}
          />

          <Controls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SolarSystem;

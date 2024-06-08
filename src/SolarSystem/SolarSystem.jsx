import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import Controls from "./Controls";
import Planet from "./Planet";

const SolarSystem = () => {
  const cameraRef = useRef();
  const timeSpeed = 0.01;

  return (
    <div className="SystemBox">
      <Canvas
        style={{ background: "#000714" }}
        camera={{ position: [0, -10, 5], rotation: [Math.PI / 4, 0, 0] }} // Начальное положение камеры
        orbitControls
      >
        <Suspense fallback={null}>
          <ambientLight intensity={6} />
          <pointLight position={[10, 10, 10]} ref={cameraRef} />
          <Planet
            modelPath="/Models/Sun.glb"
            radius={0}
            speed={0}
            scale={0.0006}
            timeSpeed={timeSpeed}
            speedOfRotation={0.0333}
          />

          <Planet
            modelPath="/Models/Mercury.glb"
            radius={0.45}
            speed={4.16}
            scale={0.0001}
            timeSpeed={timeSpeed}
            speedOfRotation={0.017}
          />
          <Planet
            modelPath="/Models/Venus.glb"
            radius={0.8}
            speed={1.61}
            scale={0.0002}
            timeSpeed={timeSpeed}
            speedOfRotation={0.004115}
          />
          {/* <Mars timeSpeed={timeSpeed} /> */}
          <Planet
            modelPath="/Models/Mars.glb"
            radius={1.8}
            speed={0.53}
            scale={0.0002}
            timeSpeed={timeSpeed}
            speedOfRotation={0.97}
          />
          <Planet
            modelPath="/Models/Earth.glb"
            radius={1.3}
            speed={1}
            scale={0.00026}
            timeSpeed={timeSpeed}
            speedOfRotation={1}
            moon1Path={"/Models/Moon.glb"}
            moon1OrbitRadius={0.2}
            moon1OrbitSpeed={13.36898}
            moon1SpeedOfRotation={0.14663}
            moon1Scale={0.00005}
          />
          <Planet
            modelPath="/Models/Jupiter.glb"
            radius={2.5}
            speed={0.086}
            scale={0.0005}
            timeSpeed={timeSpeed}
            speedOfRotation={2.2439}
          />
          <Planet
            modelPath="/Models/Saturn.glb"
            radius={3.5}
            speed={0.0339}
            scale={0.0003}
            timeSpeed={timeSpeed}
            speedOfRotation={2.2222}
          />
          <Planet
            modelPath="/Models/Uranus.glb"
            radius={4.4}
            speed={0.0119}
            scale={0.0003}
            timeSpeed={timeSpeed}
            speedOfRotation={1.3888}
          />
          <Planet
            modelPath="/Models/Neptune.glb"
            radius={5.2}
            speed={0.006068}
            scale={0.0003}
            timeSpeed={timeSpeed}
            speedOfRotation={1.4925}
          />
          <Planet
            modelPath="/Models/Pluto.glb"
            radius={5.9}
            speed={0.004048}
            scale={0.00007}
            timeSpeed={timeSpeed}
            speedOfRotation={0.1565}
          />
          <Controls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SolarSystem;

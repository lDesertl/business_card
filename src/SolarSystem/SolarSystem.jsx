import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGLTF } from "@react-three/drei";
import Sun from "./Sun";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";
import Pluto from "./Pluto";
import Controls from "./Controls";

const SolarSystem = () => {
  const cameraRef = useRef();
  const timeSpeed = 0.1;
  return (
    <div className="SystemBox">
      <Canvas
        style={{ background: "#000714" }}
        camera={{ position: [0, -7, 5], rotation: [Math.PI / 4, 0, 0] }} // Начальное положение камеры
        orbitControls
      >
        <Suspense fallback={null}>
          <ambientLight intensity={6} />
          <pointLight position={[10, 10, 10]} ref={cameraRef} />
          <Sun timeSpeed={timeSpeed} />
          <Mercury timeSpeed={timeSpeed} />
          <Venus timeSpeed={timeSpeed} />
          <Earth timeSpeed={timeSpeed} />
          <Mars timeSpeed={timeSpeed} />
          <Jupiter timeSpeed={timeSpeed} />
          <Saturn timeSpeed={timeSpeed} />
          <Uranus timeSpeed={timeSpeed} />
          <Neptune timeSpeed={timeSpeed} />
          <Pluto timeSpeed={timeSpeed} />
          <mesh>
            <torusGeometry args={[0.45, 0.01, 10, 100]} />
          </mesh>
          <mesh>
            <torusGeometry args={[0.8, 0.01, 10, 100]} />
          </mesh>
          <mesh>
            <torusGeometry args={[1.3, 0.01, 10, 100]} />
          </mesh>
          <mesh>
            <torusGeometry args={[1.8, 0.01, 10, 100]} />
          </mesh>
          <mesh>
            <torusGeometry args={[2.5, 0.01, 10, 100]} />
          </mesh>
          <mesh>
            <torusGeometry args={[3.5, 0.01, 10, 100]} />
          </mesh>
          <mesh>
            <torusGeometry args={[4.4, 0.01, 10, 100]} />
          </mesh>
          <mesh>
            <torusGeometry args={[5.2, 0.01, 10, 100]} />
          </mesh>
          <mesh>
            <torusGeometry args={[5.9, 0.007, 10, 100]} />
          </mesh>
          <Controls />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SolarSystem;

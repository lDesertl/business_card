import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../Styles/SolarSystem.scss";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Sun from "./Sun";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from "./Jupiter";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Neptune from "./Neptune";

const SolarSystem = () => {
  return (
    <div className="SystemBox">
      <Canvas style={{ background: "#000714" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={6} />
          <pointLight position={[10, 10, 10]} />
          <Sun />
          <Mercury />
          <Venus />
          <Earth />
          <Mars />
          <Jupiter />
          <Saturn />
          <Uranus />
          <Neptune />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SolarSystem;

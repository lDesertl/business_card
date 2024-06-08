import React, { useRef } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls }); // Расширяем OrbitControls

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const rotateSpeed = 0.05;

  useFrame(() => controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      mouseButtons={{ RIGHT: 0, MIDDLE: 1, LEFT: 0 }}
      rotateSpeed={rotateSpeed}
    />
  );
};

export default Controls;

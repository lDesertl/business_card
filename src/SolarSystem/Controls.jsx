import React, { useRef, useEffect, useState } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const rotateSpeed = 0.5;
  const zoomSpeed = 5;
  const mouseButtons = { RIGHT: 0, MIDDLE: 1, LEFT: 0 };

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      mouseButtons={mouseButtons}
      rotateSpeed={rotateSpeed}
      zoomSpeed={zoomSpeed}
      enablePan={false}
    />
  );
};

export default Controls;

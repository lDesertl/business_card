import React, { useRef, useEffect, useState } from "react";
import { extend, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { useGesture } from "react-use-gesture";
extend({ OrbitControls });

const PlanetControls = ({ selectedPlanet }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const rotateSpeed = 0.05;
  const zoomSpeed = 0.5;
  const mouseButtons = { RIGHT: 2, MIDDLE: 1, LEFT: 0 };
  const [distance, setDistance] = useState(4);

  useEffect(() => {
    const handleWheel = (event) => {
      setDistance((prevDistance) => {
        const newDistance = prevDistance - event.deltaY * 0.02 * -1;
        return Math.max(1, Math.min(100, newDistance)); // ограничение изменения z-позиции
      });
    };

    gl.domElement.addEventListener("wheel", handleWheel);
    return () => {
      gl.domElement.removeEventListener("wheel", handleWheel);
    };
  }, [gl.domElement]);

  useGesture(
    {
      onPinch: ({ delta }) => {
        setDistance((prevDistance) => {
          const newDistance = prevDistance + delta[0] * 0.02 * -1;
          return Math.max(1, Math.min(100, newDistance)); // ограничение изменения z-позиции
        });
      },
    },
    {
      domTarget: gl.domElement,
    }
  );

  useEffect(() => {
    controlsRef.current.update();
    if (!selectedPlanet) {
      const position = new THREE.Vector3(0, 0, 0); // Создаем объект типа THREE.Vector3
      const planetPosition = position;
      camera.position.lerp(
        planetPosition.clone().add(new THREE.Vector3(0, 0, 10)),
        0.05
      );
      controlsRef.current.target = planetPosition;
    }
  }, [selectedPlanet]);

  useFrame(() => {
    controlsRef.current.update();
    if (selectedPlanet) {
      const planetPosition = selectedPlanet.position;
      camera.position.lerp(
        planetPosition.clone().add(new THREE.Vector3(0, 0, distance)),
        0.05
      );
      controlsRef.current.target = planetPosition;
    }
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      mouseButtons={mouseButtons}
      enableRotate={false}
      enableZoom={false}
      ena
      rotateSpeed={rotateSpeed}
      zoomSpeed={zoomSpeed}
      enablePan={false}
    />
  );
};

export default PlanetControls;

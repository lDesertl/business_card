import React, { useMemo } from "react";
import * as THREE from "three";

const Stars = ({ count, r, r1 }) => {
  const stars = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = r + Math.random() * (r1 - r);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push([x, y, z]);
    }
    return positions;
  }, [count, r, r1]);

  return (
    <>
      {stars.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.02, 16, 16]} />
          <meshStandardMaterial emissive={"white"} emissiveIntensity={2} />
        </mesh>
      ))}
    </>
  );
};

export default Stars;

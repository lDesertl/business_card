import React, { useEffect } from "react";
import { useProgress } from "@react-three/drei";

const Loader = ({ setLoading }) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  }, [progress, setLoading]);

  return null;
};

export default Loader;

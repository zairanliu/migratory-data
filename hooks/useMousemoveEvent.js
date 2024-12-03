import { useEffect } from "react";

const useMousemoveEvent = (callback) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const relativeX = e.clientX / window.innerWidth;
      const relativeY = e.clientY / window.innerHeight;

      callback?.({
        x: relativeX,
        y: relativeY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default useMousemoveEvent;

import { useEffect } from "react";

const useMousemoveEvent = (callback) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      callback?.({
        x: e.clientX,
        y: e.clientY,
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

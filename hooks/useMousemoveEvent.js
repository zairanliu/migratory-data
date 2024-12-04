import { useEffect } from "react";

const DISTANCE_THRESHOLD = 0.1; // 5% of screen size

const getDistance = (pos1, pos2) => {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
};

const useMousemoveEvent = (callback) => {
  useEffect(() => {
    let lastPosition = null;

    const handleMouseMove = (e) => {
      const relativeX = e.clientX / window.innerWidth;
      const relativeY = e.clientY / window.innerHeight;

      const currentPosition = {
        x: relativeX,
        y: relativeY,
        timestamp: Date.now(),
      };

      savePosition(currentPosition);

      callback?.({
        x: relativeX,
        y: relativeY,
      });
    };

    const savePosition = (currentPosition) => {
      if (
        !lastPosition ||
        getDistance(lastPosition, currentPosition) >= DISTANCE_THRESHOLD
      ) {
        const saved = localStorage.getItem("mouseTrail");
        const positions = saved ? JSON.parse(saved) : [];
        positions.push(currentPosition);
        localStorage.setItem("mouseTrail", JSON.stringify(positions));
        lastPosition = currentPosition;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default useMousemoveEvent;

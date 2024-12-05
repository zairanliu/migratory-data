import { useEffect, useRef } from "react";
import useSyncInteractives from "@/hooks/useSyncInteractives";
const sketch = (p) => {
  let circleSize;
  const shrinkSpeed = 11.5;

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);

    p.noStroke();

    // Initialize size
    circleSize = p.width * 3; // Start with large circle
  };

  p.draw = () => {
    // Draw circle at center
    p.background("#fe6c00");
    p.fill(255);
    p.circle(p.width / 2, p.height / 2, circleSize);

    // Shrink circle
    if (circleSize > 0) {
      circleSize -= shrinkSpeed;
    }

    // Keep size at minimum 0
    circleSize = Math.max(0, circleSize);
  };
};

export default function CirclesAnimation() {
  const canvasRef = useRef(null);
  // useSyncInteractives();

  useEffect(() => {
    let p5Instance = null;

    const loadSketch = async () => {
      const p5 = await import("p5");
      p5Instance = new p5.default(sketch, canvasRef.current);
    };

    loadSketch();
    // Cleanup side effects
    return () => {
      if (p5Instance) {
        p5Instance.remove();
      }
    };
  }, []);

  return <div ref={canvasRef}></div>;
}

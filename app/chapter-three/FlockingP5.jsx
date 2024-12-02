import React, { useEffect, useRef } from "react";
import p5 from "p5";

const P5 = () => {
  const containerRef = useRef(null);
  const sketchRef = useRef(null);

  useEffect(() => {
    // Define the sketch
    const sketch = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(800, 800);
        canvas.parent(containerRef.current);
        p.background(220);
      };

      p.draw = () => {
        p.fill(255, 0, 0);
        p.ellipse(p.mouseX, p.mouseY, 10, 10);
      };
    };

    // Create p5 instance
    sketchRef.current = new p5(sketch);

    // Cleanup on unmount
    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove();
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default P5;

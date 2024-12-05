import React, { useEffect, useRef } from "react";
import useChannel from "@/hooks/useChannel";

export default function LiveMouse() {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const maxTrailLength = 200;
  let mouseX = 0;
  let mouseY = 0;

  useChannel((message) => {
    if (message.type === "mousemove") {
      const rect = canvasRef.current.getBoundingClientRect();
      mouseX = message.value.x * window.innerWidth - rect.left;
      mouseY = message.value.y * window.innerHeight;

      trailRef.current.push({ x: mouseX, y: mouseY });
      if (trailRef.current.length > maxTrailLength) {
        trailRef.current.shift();
      }
    }
  });

  useEffect(() => {
    let p5Instance = null;

    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.noStroke();
      };

      p.draw = () => {
        p.clear();
        if (trailRef.current.length > 1) {
          // p.beginShape();
          // p.noFill();
          trailRef.current.forEach((pos, i) => {
            const alpha = p.map(i, 0, trailRef.current.length - 1, 50, 255);
            p.fill(254, 108, 0, alpha);
            p.circle(pos.x, pos.y, 12);
          });
          // p.endShape();
        }

        p.fill(254, 108, 0);
        p.noStroke();
        p.circle(mouseX, mouseY, 12);
      };
    };

    const loadSketch = async () => {
      const p5 = await import("p5");
      p5Instance = new p5.default(sketch, canvasRef.current);
    };

    loadSketch();
    return () => p5Instance?.remove();
  }, []);

  return <div ref={canvasRef} className="absolute inset-0" />;
}

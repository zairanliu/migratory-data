import { useEffect, useRef } from "react";
const sketch = (p) => {
  let font;

  p.preload = () => {
    font = p.loadFont("/PPFraktionMono-Regular.ttf");
  };

  p.setup = () => {
    const mouseTrailData = JSON.parse(localStorage.getItem("mouseTrail"));

    p.createCanvas(window.innerWidth, window.innerHeight);
    // p.background(0);
    p.fill(255);
    p.textFont(font);
    p.textAlign(p.CENTER);
    p.noStroke();

    mouseTrailData.forEach(({ x, y, timestamp }) => {
      p.text(
        new Date(timestamp).toLocaleTimeString(),
        x * p.width,
        y * p.height - 10
      );
      p.circle(x * p.width, y * p.height, 10, 10);
    });
  };

  // p.draw = () => {
  //   p.background(0);

  //   if (mouseTrailData) {
  //     p.beginShape();
  //     mouseTrailData.forEach((pos) => {
  //       p.vertex(pos.x * p.width, pos.y * p.height);
  //     });
  //     p.endShape();
  //   }
  // };
};

export default function MouseTrail() {
  const canvasRef = useRef(null);

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

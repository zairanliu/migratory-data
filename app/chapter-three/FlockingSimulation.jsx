import React, { useEffect, useRef } from "react";
import useMousemoveEvent from "@/hooks/useMousemoveEvent";

const BOIDS_COUNT = 50;
const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 900;

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v) {
    return new Vector(this.x - v.x, this.y - v.y);
  }

  mult(n) {
    this.x *= n;
    this.y *= n;
    return this;
  }

  div(n) {
    this.x /= n;
    this.y /= n;
    return this;
  }

  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  normalize() {
    const m = this.mag();
    if (m !== 0) {
      this.div(m);
    }
    return this;
  }

  limit(max) {
    if (this.mag() > max) {
      this.normalize();
      this.mult(max);
    }
    return this;
  }

  static dist(v1, v2) {
    return Math.sqrt(
      (v1.x - v2.x) * (v1.x - v2.x) + (v1.y - v2.y) * (v1.y - v2.y)
    );
  }
}

class Boid {
  constructor(x, y, r = 3, isTight = false) {
    this.position = new Vector(x, y);
    this.velocity = new Vector(Math.random() * 2 - 1, Math.random() * 2 - 1);
    this.acceleration = new Vector(0, 0);
    this.r = r;
    this.maxspeed = (2.8 * r) / 3;
    this.maxforce = ((isTight ? 0.08 : 0.008) * r) / 3;
    this.isTight = isTight;
  }

  run(boids, ctx, mousePos) {
    this.flock(boids, mousePos);
    this.update();
    this.borders(ctx.canvas);
    this.render(ctx);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  flock(boids, mousePos) {
    const sep = this.separate(boids);
    const ali = this.align(boids);
    const coh = this.cohesion(boids);

    sep.mult(this.isTight ? 2.5 : 25);
    ali.mult(1.5);
    coh.mult(1.0);

    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);

    if (mousePos) {
      const mouse = new Vector(mousePos.x, mousePos.y);
      const dir = mouse.sub(this.position);
      dir.normalize();
      dir.mult(0.15);
      this.applyForce(dir);
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  seek(target) {
    const desired = target.sub(this.position);
    desired.normalize();
    desired.mult(this.maxspeed);
    const steer = desired.sub(this.velocity);
    steer.limit(this.maxforce);
    return steer;
  }

  render(ctx) {
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }

  borders(canvas) {
    // if (this.position.x < -this.r) this.position.x = canvas.width + this.r;
    // if (this.position.y < -this.r) this.position.y = canvas.height + this.r;
    // if (this.position.x > canvas.width + this.r) this.position.x = -this.r;
    // if (this.position.y > canvas.height + this.r) this.position.y = -this.r;
  }

  separate(boids) {
    // loose flock separation - 70
    //cohesive 20
    const desiredseparation = 20;
    const steer = new Vector(0, 0);
    let count = 0;

    for (const other of boids) {
      const d = Vector.dist(this.position, other.position);
      if (d > 0 && d < desiredseparation) {
        const diff = this.position.sub(other.position);
        diff.normalize();
        diff.div(d);
        steer.add(diff);
        count++;
      }
    }

    if (count > 0) {
      steer.div(count);
    }

    if (steer.mag() > 0) {
      steer.normalize();
      steer.mult(this.maxspeed);
      steer.sub(this.velocity);
      steer.limit(this.maxforce);
    }
    return steer;
  }

  align(boids) {
    const neighbordist = 100;
    const sum = new Vector(0, 0);
    let count = 0;

    for (const other of boids) {
      const d = Vector.dist(this.position, other.position);
      if (d > 0 && d < neighbordist) {
        sum.add(other.velocity);
        count++;
      }
    }

    if (count > 0) {
      sum.div(count);
      sum.normalize();
      sum.mult(this.maxspeed);
      const steer = sum.sub(this.velocity);
      steer.limit(this.maxforce);
      return steer;
    }
    return new Vector(0, 0);
  }

  cohesion(boids) {
    const neighbordist = 40;
    const sum = new Vector(0, 0);
    let count = 0;

    for (const other of boids) {
      const d = Vector.dist(this.position, other.position);
      if (d > 0 && d < neighbordist) {
        sum.add(other.position);
        count++;
      }
    }

    if (count > 0) {
      sum.div(count);
      return this.seek(sum);
    }
    return new Vector(0, 0);
  }
}

const FlockingSimulation = ({ isTight = false }) => {
  const canvasRef = useRef(null);
  const mousePosRef = useRef(null);
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const boids = [];
    const boidSize = (3 / 1200) * canvas.width;

    for (let i = 0; i < BOIDS_COUNT; i++) {
      boids.push(
        new Boid(canvas.width / 2, canvas.height / 2, boidSize, isTight)
      );
    }

    const animate = () => {
      // ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (mousePosRef.current) {
        const mouseX = mousePosRef.current.x * canvas.width;
        const mouseY = mousePosRef.current.y * canvas.height;

        for (const boid of boids) {
          boid.run(boids, ctx, {
            x: mouseX,
            y: mouseY,
          });
        }

        // draw a ball at the cursor
        // ctx.beginPath();
        // ctx.ellipse(mouseX, mouseY, 20, 20, 0, 0, Math.PI * 2);
        // ctx.fill();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isTight]);

  useMousemoveEvent((pos) => {
    const rect = canvasRef.current.getBoundingClientRect();
    mousePosRef.current = {
      x: pos.x - rect.left / window.innerWidth,
      y: pos.y,
    };
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="opacity-100 w-screen h-screen object-cover"
      />
    </div>
  );
};

export default FlockingSimulation;

"use client";

import { useState, useRef } from "react";
import useChannel from "@/hooks/useChannel";
import { motion } from "motion/react";
import { ReactLenis } from "lenis/react";
import DateCursor from "./DateCursor";
import ChapterOneStat from "./ChapterOneStat";

export default function ChapterOne() {
  const mouseRef = useRef(null);
  const [route, setRoute] = useState("/");

  useChannel((message) => {
    if (message.type === "route") {
      setRoute(message.value);
    }
    if (message.type === "mousemove") {
      if (mouseRef.current) {
        const mouseX = message.value.x * window.innerWidth;
        const mouseY = message.value.y * window.innerHeight;

        mouseRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }
  });

  return (
    <ReactLenis root>
      <DateCursor ref={mouseRef} />
      <motion.div
        animate={{
          opacity: route === "/chapter-one" ? 1 : 0,
        }}
      >
        <ChapterOneStat />
      </motion.div>
    </ReactLenis>
  );
}

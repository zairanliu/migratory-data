"use client";

import { useState } from "react";
import useChannel from "@/hooks/useChannel";
import { motion } from "motion/react";
import { ReactLenis } from "lenis/react";
import ChapterOneStat from "./ChapterOneStat";

export default function ChapterOne() {
  const [viewingRoute, setViewingRoute] = useState("/");
  useChannel((message) => {
    if (message.type === "route") {
      setViewingRoute(message.value);
    }
  });

  return (
    <ReactLenis root>
      <motion.div
        animate={{
          opacity: viewingRoute === "/chapter-one" ? 1 : 0,
        }}
      >
        <ChapterOneStat />
      </motion.div>
    </ReactLenis>
  );
}

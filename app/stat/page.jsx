"use client";

import { useState, useRef } from "react";
import useChannel from "@/hooks/useChannel";
import { ReactLenis } from "lenis/react";
import DateCursor from "./DateCursor";
import ChapterOneStat from "./ChapterOneStat";
import ChapterTwoStat from "./ChapterTwoStat";

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

  /**
   * Change this following array to add more pages
   * The key is the route (of the page its referencing) and the value is the component
   */
  const pages = {
    "/chapter-one": <ChapterOneStat />,
    "/chapter-two": <ChapterTwoStat />,
  };

  return (
    <ReactLenis root>
      <DateCursor ref={mouseRef} />

      {Object.keys(pages).map((page) => {
        return route === page ? pages[page] : null;
      })}
    </ReactLenis>
  );
}

"use client";

import { useState, useRef } from "react";
import useChannel from "@/hooks/useChannel";
import { ReactLenis } from "lenis/react";
import DateCursor from "./DateCursor";
import ChapterOneStat from "./ChapterOneStat";
import ChapterTwoStat from "./ChapterTwoStat";
import ChapterThreeStat from "./ChapterThreeStat";
import MeadowLark from "./MeadowLark";
import IndigoBunting from "./IndigoBunting";
import Veery from "./Veery";
import AboutStat from "./AboutStat";

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
    "/chapter-two/meadowlark": <MeadowLark />,
    "/chapter-two/indigobunting": <IndigoBunting />,
    "/chapter-two/veery": <Veery />,
    "/chapter-three": <ChapterThreeStat />,
    "/about": <AboutStat />,
  };

  return (
    <ReactLenis root>
      <DateCursor ref={mouseRef} />

      {Object.keys(pages).map((page) => {
        return route === page ? <div key={page}>{pages[page]}</div> : null;
      })}
    </ReactLenis>
  );
}

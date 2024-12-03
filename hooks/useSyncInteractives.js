"use client";

import { useRef, useEffect } from "react";
import useMousemoveEvent from "./useMousemoveEvent";
import useChannel from "./useChannel";
import throttle from "lodash-es/throttle";
import { useScroll, useMotionValueEvent } from "motion/react";
import { usePathname } from "next/navigation";

const useSyncInteractives = () => {
  const scrollTarget = useRef(null);
  const messageChannel = useChannel();
  const lastPathRef = useRef();
  const pathname = usePathname();

  useMousemoveEvent(
    throttle(({ x, y }) => {
      messageChannel.send({ type: "mousemove", value: { x, y } });
    }, 10)
  );

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
  });

  useMotionValueEvent(
    scrollYProgress,
    "change",
    throttle((latest) => {
      messageChannel.send({ type: "scroll", value: latest });
    }, 10)
  );

  useEffect(() => {
    if (pathname === lastPathRef.current) return;

    // send message when route changes
    lastPathRef.current = pathname;
    messageChannel.send({ type: "route", value: pathname });
    const interval = setInterval(() => {
      // keep updated with the latest pathname
      messageChannel.send({ type: "route", value: pathname });
    }, 1000);

    return () => clearTimeout(interval);
  }, [pathname]);

  return {
    scrollTarget,
    scrollYProgress,
  };
};

export default useSyncInteractives;

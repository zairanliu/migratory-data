import { useRef } from "react";
import useMousemoveEvent from "./useMousemoveEvent";
import useChannel from "./useChannel";
import throttle from "lodash-es/throttle";
import { useScroll, useMotionValueEvent } from "motion/react";

const useSyncInteractives = () => {
  const scrollTarget = useRef(null);
  const messageChannel = useChannel();

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

  return {
    scrollTarget,
    scrollYProgress,
  };
};

export default useSyncInteractives;

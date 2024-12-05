import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import useChannel from "@/hooks/useChannel";
import useSharedState from "@/hooks/useSharedState";

export default function MouseDetective() {
  const [hoveringItem] = useSharedState("hovering-item", null);
  const [showMouse, setShowMouse] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const mouseTimeoutRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useChannel((message) => {
    if (message.type === "mousemove") {
      setShowMouse(true);
      if (mouseTimeoutRef.current) clearTimeout(mouseTimeoutRef.current);
      mouseTimeoutRef.current = setTimeout(() => {
        setShowMouse(false);
      }, 1000);
    }

    if (message.type === "scroll") {
      setShowScroll(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setShowScroll(false);
      }, 1000);
    }
  });

  useEffect(() => {
    return () => {
      if (mouseTimeoutRef.current) clearTimeout(mouseTimeoutRef.current);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-base z-10 flex flex-col items-center">
      <AnimatePresence>
        {showMouse && (
          <motion.div
            key="mouse"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto"
          >
            mouse move detected
          </motion.div>
        )}
        {showScroll && (
          <motion.div
            key="scroll"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            scroll detected
          </motion.div>
        )}
        {hoveringItem !== null && (
          <motion.div
            key="hovering"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            hover detected
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

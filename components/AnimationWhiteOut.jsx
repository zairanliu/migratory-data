import { motion } from "motion/react";

const AnimationWhiteOut = ({ className, children }) => {
  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {children.split(" ").map((element, index) => {
        return (
          <div key={element + index} className="relative">
            <motion.div
              className="absolute left-0 right-0 top-1 bottom-1 bg-white"
              animate={{
                width: [0, "100%", "100%"],
                opacity: [1, 1, 0],
                transition: {
                  ease: "easeOut",
                  duration: 1.5,
                  delay: 0.05 + index * 0.2,
                },
              }}
            ></motion.div>
            <motion.div
              animate={{
                opacity: [0, 1],
                transition: {
                  ease: "easeOut",
                  duration: 1,
                  delay: 0.8 + index * 0.2,
                },
              }}
            >
              {element}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimationWhiteOut;

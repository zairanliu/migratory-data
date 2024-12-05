import React from "react";

const FlipCard = ({ front, back }) => {
  return (
    // Wrapper with perspective
    <div className="aspect-[6/9] [perspective:1000px]">
      {/* Card container */}
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute h-full w-full rounded overflow-hidden [backface-visibility:hidden]">
          <img
            src={front}
            alt="Front side"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Back */}
        <div className="absolute h-full w-full rounded overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={back}
            alt="Backside"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

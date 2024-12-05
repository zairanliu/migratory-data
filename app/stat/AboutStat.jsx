"use client";
import MouseTrail from "./MouseTrail";

export default function AboutStat() {
  const clearCanvas = () => {
    localStorage.setItem("mouseTrail", JSON.stringify([]));
  };

  return (
    <div
      className="bg-[#fe6c00] h-screen w-screen font-mono relative"
      onClick={clearCanvas}
    >
      <div className="fixed z-10 flex  w-screen left-8 bottom-8 max-w-80">
        <span>Tracking Data Saved</span>
      </div>
      <MouseTrail />
    </div>
  );
}

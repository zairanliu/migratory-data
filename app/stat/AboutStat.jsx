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
      <div className="fixed z-10 flex  w-screen h-screen items-center justify-center ">
        <span>ur trace</span>
      </div>
      <MouseTrail />
    </div>
  );
}

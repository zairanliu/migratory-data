"use client";

export default function ChapterTwoStat() {
  return (
    <div className="bg-[#fe6c00] h-screen w-screen font-mono relative ">
      <div className="fixed z-10 flex  w-screen h-screen items-center justify-center ">
        <span>mouse move detected</span>
      </div>

      <div className="absolute top-8 left-8 text-base">
        <p>&lt;video src="../video/bird-migration.mp4"&gt;</p>
        <p>&lt;p&gt;...&lt;/p&gt;</p>
        <p>&lt;p&gt;...&lt;/p&gt;</p>
      </div>
      <div className="flex flex-row justify-between items-end h-screen pb-20 px-10 font-light ">
        <div className="flex w-[300px] justify-between flex-row text-8xl">
          <p>&lt;</p>
          <p>&gt;</p>
        </div>
        <div className="flex flex-row  w-[300px] justify-between  text-8xl">
          <p>&lt;</p>
          <p>&gt;</p>
        </div>
        <div className="flex flex-row text-8xl  w-[300px] justify-between ">
          <p>&lt;</p>
          <p>&gt;</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-8">
        <p>User IP Detected:68.229.79.117</p>
      </div>
    </div>
  );
}

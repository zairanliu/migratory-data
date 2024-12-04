"use client";

export default function Veery() {
  return (
    <main>
      <div className="fixed z-10 flex  w-screen h-screen items-center justify-center font-mono text-white ">
        <span>mouse move detected</span>
      </div>
      <div className=" h-screen w-screen font-mono flex flex-row bg-[#653C1C]  text-white  ">
        <div className="w-1/3 bg-[#26180D]">
          <div className="absolute top-8 left-8 text-base ">
            <p>&lt;p&gt;...&lt;/p&gt;</p>
            <p>&lt;svg src="../migration-map.svg"&gt;</p>
          </div>
        </div>

        <div className="flex flex-row w-screen justify-between items-end h-screen pb-8 px-10 font-light   text-white">
          <div className="flex  w-[300px]  justify-between flex-row text-8xl">
            <img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
            ></img>
          </div>
          <div className="flex flex-row  w-[300px] justify-between  text-8xl">
            <img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
            ></img>
          </div>
          <div className="flex flex-row text-8xl w-[300px] justify-between ">
            <img
              src="https://asset.togusj.com/migratory-data/stat/black-frame.webp"
              alt="frame"
              className=""
            ></img>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 text-white">
          <p>User IP Detected:68.229.79.117</p>
        </div>
      </div>
    </main>
  );
}

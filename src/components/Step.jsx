import React from "react";
import { features } from "../data/dummy";

const Step = () => {
  return (
    <div className="px-5 lg:px-[72px] flex flex-col gap-y-4 mt-5">
      <h1 className="text-orange font-bold text-xl">3 STPES QUICK</h1>
      <h1 className="font-bold text-3xl">Claim Your Better Health</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols">
        {features.map((item, i) => {
          return (
          <div className="flex flex-col col-span-1 items-center">
            <div className="w-[400px] h-[200px]">
              <img src={item.image} alt="" className="w-[400px] h-[200px]"/>
            </div>
              <h1 className="font-bold text-[18px]">{item.title}</h1>
              <p className="text-[18px] text-text max-w-[300px] text-center">{item.desc}</p>
          </div>
          );
        })}
      </div>
    </div>
  )
}

export default Step
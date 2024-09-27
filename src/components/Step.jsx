import React from "react";
import { features } from "../data/dummy";

const Step = () => {
  return (
    <div className="">
      <h1 className="text-orange font-bold text-xl">3 STPES QUICK</h1>
      <h1 className="font-bold text-3xl">Claim Your Better Health</h1>
      <div className="flex flex-row gap-x-4 w-[40] h-[40] justify-center item-center h-screen">
        {features.map((item, i) => {
          return <div className="flex flex-col">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="text-center text-2xl tracking-wide h-screen">
              <h1 className="font-bold text-black">{item.title}</h1>
              <p>{item.desc}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Step
import React from "react";
import { features } from "../data/dummy";

const Step = () => {
  return (
    <div>
      <h1>3 STPES QUICK</h1>
      <h1>Claim Your Better Health</h1>
      {features.map((item, i)=>{
            return <div>
                  <div>
                        <img src="" alt="" />
                  </div>
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
            </div>
      })}
    </div>
  )
}

export default Step
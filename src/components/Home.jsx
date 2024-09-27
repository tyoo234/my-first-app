import React from "react";

const Home = () => {
  return <div id="home" className="w-full h-screen px-5 lg:px-[72px] ">
                  <div className="h-screen max-w-[700px] flex flex-col justify-center gap-y-4 leading-lose">
                        <h1 className="text-orange font-bold text-xl">GET A BETTER ADVICE</h1>
                        <h1 className="font-bold text-5xl">Let's Find a Best Doctor Around The World</h1>
                        <h1 className="text-text max-w-[500px]">We develop an app to allow you to improve your healt better and get a life you want to life</h1>
                        <div>
                              <button className="px-6 lg:px-8 py-2 bg-orange text-white outline-none hover:bg-gray-600 rounded-full">
                                    Learn More
                              </button>
                        </div>
                  </div>
            </div>
  
}

export default Home

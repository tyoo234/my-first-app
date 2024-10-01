import React, { useEffect, useState } from "react";
import { navLink } from "../data/dummy";
import logo from "../asset/logo.svg";
import { Link } from "react-scroll";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
      const [nav, setNav] = useState(false);
      const [scroll, setScroll] = useState(false);
      useEffect(() => {
            const handScroll = () => {
                  if(window.scrollY > 0){
                        setScroll(true);
                  }else{
                        setScroll(false);
                  }
            };
            window.addEventListener('scroll', handScroll);
      },          []);

      return (
            <div className="flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed top-0">
                  <div className="w-[103px] h-[25px]">
                        <img src={logo} alt="" className="w-full h-full object-contain" />
                  </div>
                  <ul className="hidden md:flex">
                        <li className="flex gap-x-4">
                              {navLink.map((item) => {
                                    return (
                                          <Link to={item.id}
                                                key={item.id}
                                                className="hover:text-orange text-sm md:text-md cursor-pointer">
                                                {item.name}
                                          </Link>
                                    );
                              })
                              }
                        </li>
                  </ul>
                  <div className="flex items-center">
                        <button className="px-6 lg:px-8 py-2 bg-white outline-none hover:bg-orange hover:text-white rounded-full">
                              Sign In
                        </button>
                        <IoIosMenu
                              className="text-2xl block md:hidden"
                              onClick={() => setNav((prev) => !prev)} />
                  </div>
                  <div
                        className={`${ 
                              nav ? "right-0" : "-right-[98%]"
                        } flex flex-col gap-4 pt-5 px-5 md:hidden absolute top-0 w-full h-screen bg-white`}>

                        <IoMdClose 
                              className="cursor-pointer text-2xl" 
                              onClick={() => setNav((prev) => !prev)} 
                        />
                        <ul className="">
                              <li className="flex gap-y-4 flex-col">
                                    {navLink.map((item) => {
                                          return (
                                                <Link to={item.id}
                                                      key={item.id}
                                                      className="hover:text-orange text-sm md:text-md border-b cursor-pointer py-2">
                                                      {item.name}
                                                </Link>
                                          );
                                    })
                                    }
                              </li>
                        </ul>
                  </div>
            </div>
      );
};

export default Navbar;
import React, { useEffect, useState } from "react";
import { navLink } from "../data/dummy";
import logo from "../asset/logo.svg";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
      const [nav, setNav] = useState(false);
      const [scroll, setScroll] = useState(false);
      useEffect(() => {
            const handleScroll = () => {
                  if (window.scrollY > 0) {
                        setScroll(true);
                  } else {
                        setScroll(false);
                  }
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return (
            <div className={`${scroll ? "-top-20"  : "top-0"} flex justify-between items-center px-5 lg:px-[72px] h-[80px] w-full fixed `}>
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
                        <AiOutlineMenu
                              className="text-2xl block md:hidden"
                              onClick={() => setNav((prev) => !prev)} />
                  </div>
                  <div
                        className={`${nav ? "right-0" : "-right-[98%]"
                              } flex flex-col gap-4 pt-5 px-5 md:hidden absolute top-0 w-full h-screen bg-white`}>

                        <AiOutlineClose
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
import React from "react";
import { navLink } from "../data/dummy";
import logo from "../asset/logo.svg";
import { Link } from "react-scroll";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
      return (
            <div className="flex px-5 lg:px-[72px] h-[80px] justify-between items-center w-full fixed top-0">
                  <div className="w-[103px] h-[25px]">
                        <img src={logo} alt="" className="w-full h-full object-contain"/>
                  </div>
                  <ul className="hidden md:flex">
                        <li className="flex gap-x-4">
                              {navLink.map((item) => {
                                    return (
                                    <Link to={item.id} 
                                                key={item.id} 
                                                className="hover:text-orange text-sm md:text-md">
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
                              <IoIosMenu className="text-2xl blok md:hidden"/>
                  </div>
                  <div>
                  <IoMdClose />
                  <ul className="flex md:hidden absolute top-0 right-0 w-full h-screen bg-white">
                        <li className="flex gap-x-4">
                              {navLink.map((item) => {
                                    return (
                                    <Link to={item.id} 
                                                key={item.id} 
                                                className="hover:text-orange text-sm md:text-md">
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
import React from "react";
import { navLink } from "../data/dummy";
import logo from "../asset/logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
      return (
      <div className="flex" justify-between items-center w-full fixed top-0>
            <div>
                  <img src={logo} alt="" />
            </div>
            <ul>
                  <li>
                        {navLink.map((item) => {
                              return <Link to={item.id} key={item.id}>
                                    {item.name}
                              </Link>;
                        })
                        }
                  </li>
            </ul>
            <div>
                  <button className="px-6 lg:px-8 py-2 bg-white outline-none 
                                                      hover:bg-orange hover:text-white rounded-full">
                        Sign In
                  </button>
            </div>
      </div>
      );
};

export default Navbar;
import React, { useState } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Institution", path: "/institution" },
    { name: "Jobs", path: "/jobs" },
    { name: "Drive", path: "/drive" },
    { name: "Interview", path: "/interview" },
  ];

  return (
    <nav className="bg-white text-white h-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <div className="flex-shrink-0">
            <img className="h-8 w-20" src="/talismaLogo.png" alt="Brand Logo" />
          </div>

          <div className="flex-grow flex justify-center">
            <ul className="flex space-x-10">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <Link
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium text-[#5B656F] hover:font-bold rounded-md ${
                      currentPath === item.path ? "font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* Underline */}
                  {currentPath === item.path && (
                    <span className="absolute bottom-[-12px] left-0 w-full h-[3px] bg-blue-600 mt-5"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <button className="bg-white p-2 rounded-full hover:bg-gray-600">
              <BellIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

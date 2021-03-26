import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function navigation() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  let menuMask;
  if (showMenu) {
    menu = (
      <div className="fixed  bg-black opacity-90 w-4/5 h-full top-0 left-0 z-50 shadow">
        <span className=" font-bold  mt-10 text-red-50"> Menu</span>
        <ul>
          <Link to="/">
            <li
              className=" mt-10 border-gray-600 border-opacity-10 border-b-2 mb-3 text-blue-500 block"
              onClick={() => setShowMenu(false)}
            >
              Home
            </li>
          </Link>
          <Link to="/about">
            <li
              className=" border-gray-600 border-opacity-10 border-b-2 mb-3 text-blue-500 block"
              onClick={() => setShowMenu(false)}
            >
              About
            </li>
          </Link>
          <Link to="/contact">
            <li
              className=" text-blue-500 block"
              onClick={() => setShowMenu(false)}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    );
    menuMask = (
      <div
        className=" bg-black fixed opacity-40 top-0 left-0 w-full h-full"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }
  return (
    <nav>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setShowMenu(!showMenu)}
        className=" cursor-pointer"
      />

      {menuMask}

      {menu}
    </nav>
  );
}

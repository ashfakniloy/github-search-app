import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-gray-800 shadow-lg">
      <div className="flex justify-between items-center container mx-auto px-4 py-4 text-slate-100">
        <div className="flex items-center gap-1">
          <FaGithub className=" text-3xl" />
          <Link to="/" className="text-2xl font-bold">
            Github Search
          </Link>
        </div>

        <div
          className="md:hidden text-2xl hover:text-slate-400 duration-200"
          onClick={() => setToggle(!toggle)}
        >
          <FaBars className={!toggle ? "block" : "hidden"} />
          <FaTimes className={toggle ? "block" : "hidden"} />
        </div>

        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-slate-400 duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-slate-400 duration-200">
            About
          </Link>
        </div>
      </div>

      <div
        className={
          toggle
            ? "flex flex-col md:hidden items-center py-6 text-slate-100 gap-6 font-medium"
            : "hidden"
        }
      >
        <Link
          to="/"
          className="hover:text-slate-400 duration-200"
          onClick={() => setToggle(!toggle)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-slate-400 duration-200"
          onClick={() => setToggle(!toggle)}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;

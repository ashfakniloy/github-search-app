import React, { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-gray-800 shadow-lg">
      <div className="flex justify-between items-center container mx-auto px-4 py-4 text-slate-100">
        <div className="flex items-center">
          <FaGithub className="inline mr-2 text-3xl" />
          <Link to="/" className="text-2xl font-bold">
            Github Search
          </Link>
        </div>

        {!toggle ? (
          <FaBars
            className="md:hidden text-2xl hover:text-slate-400 duration-200"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <FaTimes
            className="md:hidden text-2xl hover:text-slate-400 duration-200"
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-slate-400 duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-slate-400 duration-200">
            About
          </Link>
        </div>
      </div>
      {toggle && (
        <div className="flex flex-col md:hidden items-center py-6 text-slate-100 gap-6 font-medium">
          <Link to="/" className="hover:text-slate-400 duration-200">
            Home
          </Link>
          <Link to="/about" className="hover:text-slate-400 duration-200">
            About
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;

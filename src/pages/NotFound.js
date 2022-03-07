import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-slate-100 gap-8 mt-52">
      <div className="flex text-7xl font-bold gap-4">
        <FaExclamationTriangle className="fill-red-600" /> 404
      </div>
      <h1 className="text-4xl font-bold">Page Not Found!</h1>
      <button className="bg-blue-600 hover:bg-blue-800 duration-200 flex gap-2 items-center text-xl font-semibold px-6 py-4 rounded-lg uppercase">
        <FaHome className="" />
        <Link to="/">Back To Home</Link>
      </button>
    </div>
  );
};

export default NotFound;

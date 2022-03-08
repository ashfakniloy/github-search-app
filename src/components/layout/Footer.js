import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800">
      <div className="flex flex-col items-center py-10 px-5 gap-3">
        <div className="text-4xl text-gray-700 flex items-center gap-0.5 font-bold ">
          <FaGithubSquare />
          <h1>Github Search </h1>
        </div>
        <p className="text-gray-300 text-center text-sm">
          Copyright &copy;{currentYear} Github Search. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

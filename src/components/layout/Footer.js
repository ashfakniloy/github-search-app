import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800">
      <div className="flex flex-col items-center py-10 px-5 gap-3">
        <FaGithubSquare className="text-7xl text-slate-400" />
        <p className="text-slate-100 text-center text-sm">
          Copyright &copy;{currentYear} Github Search. All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;

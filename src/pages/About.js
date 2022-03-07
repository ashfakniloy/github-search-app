import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 my-24">
      <h1 className="text-5xl font-medium text-slate-100">Github Search</h1>
      <p className="mt-4 text-slate-200">
        A react app for searching github profiles and see profile details
      </p>

      <div className="text-slate-300 mt-3 text-sm">
        <p>
          <span className="text-slate-400 mr-1">Version:</span> 1.0.0
        </p>
        <p>
          <span className="text-slate-400 mr-1">Developed By:</span> Ashfak
          Ahmed Niloy
        </p>
        <p>
          <span className="text-slate-400 mr-1">Email:</span>
          ashfakniloy@gmail.com
        </p>
      </div>

      <p className="mt-10 text-slate-200 hover:text-slate-400 duration-200">
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
};

export default About;

import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="flex items-center gap-4 p-4  rounded-xl shadow-lg">
      <div className="rounded-full">
        <img src={avatar_url} alt="" className="rounded-full w-14" />
      </div>
      <div className="">
        <Link
          to={`/user/${login}`}
          className="text-slate-400 hover:text-slate-100 duration-200"
        >
          <p className="text-slate-100">{login}</p>
          <p className="text-xs  ">View profile</p>
        </Link>
      </div>
    </div>
  );
}

export default UserItem;

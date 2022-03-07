import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaCodepen, FaStore, FaUsers, FaUserFriends } from "react-icons/fa";
import { getUserAndRepos } from "../fetaures/github/githubSlice";
import RepoList from "../components/reops/RepoList";

function User() {
  const { user, loading, repos } = useSelector((state) => state.users);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAndRepos(params.login));
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return (
      <h2 className="text-4xl font-bold text-center text-slate-100 my-80 ">
        Loading...
      </h2>
    );
  } else {
    return (
      <div className="mx-4 my-14 md:container md:mx-auto md:px-4 text-slate-100">
        <div className="mb-4">
          <Link to="/" className="active:text-slate-300">
            {"<"} Back to search
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-0">
          <div className="relative mb-6 md:mb-0">
            <img
              src={avatar_url}
              alt=""
              width={300}
              className="rounded-xl opacity-75"
            />
            {/* <div className="absolute text-white bottom-5 md:bottom-60 md:mb-3 2xl:mb-0 lg:bottom-8 left-8"> */}
            <div className="absolute text-white left-6 top-64 md:top-44 lg:top-64">
              {/* <h1 className="text-lg font-bold">{name}</h1> */}
              <p className="text-lg font-bold">{login}</p>
            </div>
          </div>
          <div className="col-span-2">
            <span className="text-3xl font-bold mr-6">{name}</span>
            <span className="bg-gray-700 text-red-400 text-xs font-semibold px-2.5 py-0.5 rounded-xl mr-2">
              {type}
            </span>
            {hireable && (
              <span className="bg-gray-700 text-blue-400 text-xs font-semibold px-2.5 py-0.5 rounded-xl">
                Hireable
              </span>
            )}
            <p className="mt-3">{bio}</p>
            <a href={html_url} target="_blank" rel="noreferrer">
              <button className="mt-8 px-4 py-3 border border-slate-100 hover:bg-gray-700 duration-200 rounded-lg uppercase">
                visit github profile
              </button>
            </a>
            <div className="flex flex-col lg:flex-row lg:items-center my-8 shadow-md rounded-lg">
              <div className="flex-1">
                <div className="px-6 py-4">
                  <p className="text-slate-400">Location</p>
                  {location ? (
                    <p className="font-semibold">{location}</p>
                  ) : (
                    <p>___</p>
                  )}
                </div>
              </div>
              <div className="flex-1 border-y lg:border-x lg:border-y-0 border-gray-700">
                <div className="px-6 py-4 ">
                  <p className="text-slate-400">Website</p>
                  {blog ? (
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold"
                    >
                      {blog}
                    </a>
                  ) : (
                    <p>___</p>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="px-6 py-4">
                  <p className="text-slate-400">Twitter</p>
                  {twitter_username ? (
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold"
                    >
                      {twitter_username}
                    </a>
                  ) : (
                    <p>___</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center my-8 shadow-md rounded-lg">
          <div className=" flex-1">
            <div className="flex justify-between items-center px-6 py-4">
              <div className="">
                <p className="text-slate-400">Followers</p>
                {followers ? (
                  <p className="text-2xl font-bold">{followers}</p>
                ) : (
                  <p>___</p>
                )}
              </div>
              <FaUsers className="text-4xl fill-slate-400" />
            </div>
          </div>
          <div className=" flex-1 border-y lg:border-x lg:border-y-0 border-gray-700">
            <div className="flex justify-between items-center px-6 py-4">
              <div className="">
                <p className="text-slate-400">Following</p>
                {following ? (
                  <p className="text-2xl font-bold">{following}</p>
                ) : (
                  <p>___</p>
                )}
              </div>
              <FaUserFriends className="text-4xl fill-slate-400" />
            </div>
          </div>
          <div className=" flex-1 border-b lg:border-r lg:border-y-0 border-gray-700">
            <div className="flex justify-between items-center px-6 py-4">
              <div className="">
                <p className="text-slate-400">Public Repos</p>
                {public_repos ? (
                  <p className="text-2xl font-bold">{public_repos}</p>
                ) : (
                  <p>___</p>
                )}
              </div>
              <FaCodepen className="text-4xl fill-slate-400" />
            </div>
          </div>
          <div className=" flex-1 ">
            <div className="flex justify-between items-center px-6 py-4">
              <div className="">
                <p className="text-slate-400">Public Gists</p>
                {public_gists ? (
                  <p className="text-2xl font-bold">{public_gists}</p>
                ) : (
                  <p>___</p>
                )}
              </div>
              <FaStore className="text-4xl fill-slate-400" />
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    );
  }
}

export default User;

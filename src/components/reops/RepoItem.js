import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    watchers_count,
    open_issues,
    stargazers_count,
  } = repo;
  return (
    <div className="break-all mb-2 px-5 py-5 bg-gray-900 hover:bg-gray-900 duration-200 rounded-md">
      <a href={html_url} target="_blank" rel="noreferrer">
        <FaLink className="inline mr-2" /> {name}
      </a>
      <p className="text-xs mt-2 text-slate-300">{description}</p>
      <div className="flex gap-2 mt-2">
        <div className="flex items-center  bg-gray-800 text-blue-400 text-xs  px-1.5 h-5 rounded-full">
          <FaEye className="mr-1" /> {watchers_count}
        </div>
        <div className="flex items-center  bg-gray-800 text-orange-400 text-xs  px-1.5 h-5 rounded-full">
          <FaStar className="mr-1" /> {stargazers_count}
        </div>
        <div className="flex items-center  bg-gray-800 text-red-400 text-xs  px-1.5 h-5 rounded-full">
          <FaInfo className="mr-1" /> {open_issues}
        </div>
        <div className="flex items-center  bg-gray-800 text-yellow-400 text-xs  px-1.5 h-5 rounded-full">
          <FaUtensils className="mr-1" />
          {forks}
        </div>
      </div>
    </div>
  );
};

export default RepoItem;

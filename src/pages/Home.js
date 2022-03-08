import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  const { text } = useSelector((state) => state.users);

  return (
    <div className="mt-32 mb-10">
      <UserSearch />
      {!text ? (
        <div className="flex justify-center mt-40">
          <FaGithubAlt className="text-9xl scale-150 text-gray-700" />
        </div>
      ) : (
        ""
      )}

      <UserResults />
    </div>
  );
};

export default Home;

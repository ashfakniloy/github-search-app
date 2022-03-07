import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  return (
    <div className="mt-32 mb-10">
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default Home;

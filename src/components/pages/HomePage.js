import React from "react";
import Users from "../users/Users";
import Search from "../users/Search";

const HomePage = () => {
  return (
    <div>
      <div>
        <Search />
        <Users />
      </div>
    </div>
  );
};

export default HomePage;

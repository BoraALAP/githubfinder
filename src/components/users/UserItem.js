import React from "react";
import {Link} from 'react-router-dom'

const UserItem = ({ info }) => {
  return (
    <div className="card text-center">
      <Link to={`user/${info.login}`}>
        <img
          src={info.avatar_url}
          alt={info.login}
          className="round-img"
          style={{ width: "60px" }}
        />
        <div>
          <h3>{info.login}</h3>
          <button className="btn btn-dark btn-sm my-1"> More </button>
        </div>
      </Link>
    </div>
  );
};

export default UserItem;

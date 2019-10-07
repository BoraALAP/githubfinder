import React, {useContext, useEffect} from "react";
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner'
import githubContext from "../../context/github/githubContext";

const Users = () => {
  const {loading, users, loadAll}  = useContext(githubContext)

  useEffect(() => {
    loadAll()
    // eslint-disable-next-line
  }, [])
  
  if (loading) {
    return <Spinner /> 
  } else 
  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} info={user}/>
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr))",
  gridGap: "20px"
};

export default Users;

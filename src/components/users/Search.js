import React, { useState, useContext } from "react";
import githubContext from "../../context/github/githubContext";
import alertContext from "../../context/alert/alertContext";

const Search = () => {
  const [value, setValue] = useState({ text: "" });
  const {searchUsers, searched, clearUsers} = useContext(githubContext)
  const { setAlert } = useContext(alertContext)

  const Submit = e => {
    e.preventDefault();
    if (value.text === "") {
      setAlert("Please Enter a Value", "light");
    } else {
      searchUsers(value.text);
      setValue({ text: "" });
    }
  };
  return (
    <div>
      <form action="" className="form">
        <input
          type="text"
          name="text"
          value={value.text}
          onChange={e => setValue({ [e.target.name]: e.target.value })}
          placeholder="Search Users..."
          id=""
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          onClick={Submit}
        />
        
      </form>

      {searched && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear Search
        </button>
      )}
    </div>
  );
};

export default Search;

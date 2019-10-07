import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import githubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const GithubContext = useContext(githubContext)
  const { getUser, user, loading, searched, getUserRepos, repos } = GithubContext;
  
  useEffect(() => {
    
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;
  

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Link to="/" className="btn btn-light">
            {searched ? `Back to Seach` : `Back to Home`}
          </Link>
          <div>
            Hirable:{" "}
            {hireable ? (
              <i className="fas fa-check text-success" />
            ) : (
              <i className="fas fa-times-circle text-danger" />
            )}
          </div>
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                alt=""
                className="round-img"
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div className="all-center">
              {bio && (
                <div>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </div>
              )}
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <div>
                      <strong>Username</strong>: {login}
                    </div>
                  )}
                  {company && (
                    <div>
                      <strong>Company</strong>: {company}
                    </div>
                  )}
                  {blog && (
                    <div>
                      <strong>Website</strong>: {blog}
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">
              Public Repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gist: {public_gists}</div>
          </div>
          <Repos repos={repos}/>
        </div>

        
      )}
    </div>
  );
};

export default User;

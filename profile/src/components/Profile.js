import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/index";
import { getRepos } from "../store/index";
import "../App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { MdStar } from "react-icons/md";

export default () => {
  const dispatch = useDispatch();
  const profileData = useSelector((appState) => appState.profile);
  const repos = useSelector((appState) => appState.repos);
  useEffect(() => {
    dispatch(getProfile());
    dispatch(getRepos());
  }, []);
  return (
    <div>
      <div className="subNav">
            <p>Overview</p>
            <p>Repositories</p>
            <p>Project</p>
            <p>Packages</p>
            
        </div>
        <hr></hr>
    <div className="profileSection">
      <div className="user-info">
        <img className="profile" src={profileData.avatar_url} />
        <span>{profileData.statuses_url}</span>
        <div id="wholeName">{profileData.name} </div>
        <span id="loginName">{profileData.login}</span>
        <div>
          <button id="editProfButton">Edit Profile</button>
        </div>
        <span>{profileData.followers} followers</span> <span>&middot; </span>
        <span>{profileData.following} following</span> <span>&middot; </span>
        
        <span><MdStar />{profileData.starred}</span>
        <div id="located">{profileData.location}</div>
        <span id="emailadd">{profileData.email}</span>
      </div>

      <div className="repoSide">
        <div className="filter">
          <input
            id="find"
            type="text"
            placeholder="Find a repository..."
          ></input>
          <select id="type">
            <option>Type: All</option>
            <option>All</option>
            <option>Publc</option>
            <option>Private</option>
            <option>Sources</option>
            <option>Forks</option>
            <option>Archived</option>
            <option>Mirrors</option>
          </select>
          <select id="language">
            <option>Language: All</option>
            <option>All</option>
            <option>Javascript</option>
            <option>HTML</option>
          </select>
          <button id="new">New</button>
        </div>

        {repos.map((reposData, i) => (
          <div className="singleRepo" key={"reposData" + i}>
            <hr></hr>
            <p id="firstLine">
              <a className="codeRepository" href={reposData.html_url}>
                {reposData.name}
              </a>
              <button id="star">Star</button>
            </p>

            <p id="secondLine">
              {reposData.language} Updated {reposData.updated_at}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../store/index";
import "../App.css";

export default () => {
  const dispatch = useDispatch();
  // const reposData = useSelector((appState) => appState.repos);
  useEffect(() => {
    dispatch(getRepos());
  }, []);
  // return (
    // <div className="repoSide"> 
    //     <div className="subNav">
    //         <p>Overview</p>
    //         <p>Repositories</p>
    //         <p>Project</p>
    //         <p>Packages</p>
            
    //     </div>

    //     <div className="filter">
    //         <input id="find" type='text' placeholder="Find a repository..."></input>
    //         <select id="type">
    //             <option>Type: All</option>
    //             <option>All</option>
    //             <option>Publc</option>
    //             <option>Private</option>
    //             <option>Sources</option>
    //             <option>Forks</option>
    //             <option>Archived</option>
    //             <option>Mirrors</option>
    //         </select>
    //         <select id="language">
    //             <option>Language: All</option>
    //             <option>All</option>
    //             <option>Javascript</option>
    //             <option>HTML</option>
    //         </select>
    //         <button id="new">New</button>
    //     </div>

    //    {repos.map((reposData, i) => (
    //        <div className="singleRepo" key={'reposData' + i}>
    //            <p id="firstLine"><a href={reposData.html_url}>{reposData.name}</a>
    //            <button id="star">Star</button></p>
    //            <p id="secondLine">{reposData.language} {reposData.updated_at}</p>
    //        </div>
    //    ))}
    // </div>
   

};

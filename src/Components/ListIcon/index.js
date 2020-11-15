import React from "react";
import "./style.css";
import GithubIcon from "../Icons/GithubIcon";
import GoogleIcon from "../Icons/GoogleIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import TwitterIcon from "../Icons/TwitterIcon";

export default function ListIcon() {
  return (
    <div className="list-div">
      <ul className="list">
        <li className="item">
          <GoogleIcon className="_icon" />
        </li>
        <li className="item">
          <TwitterIcon className="_icon" />
        </li>
        <li className="item">
          <LinkedinIcon className="_icon" />
        </li>
        <li className="item">
          <GithubIcon className="_icon" />
        </li>
      </ul>
      <div className="line_div"></div>
    </div>
  );
}

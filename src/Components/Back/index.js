import React from "react";

import back from "../../assets/arrow_back_ios_24px.png";
import "./style.css";
export default function Back({ onClick }) {
  return (
    <div className="back_div" onClick={onClick}>
      <img className="icon" src={back} alt="back" />
      <div className="back">Back</div>
    </div>
  );
}

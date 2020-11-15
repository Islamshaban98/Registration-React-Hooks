import React from "react";

import "./style.css";
import circle from "../../assets/circle.png";
import vector from "../../assets/Vector.png";
import group from "../../assets/Group.png";
import whiteLogo from "../../assets/whiteLogo.png";

import Form from "./Form";
import Quote from "../../Components/Quote";
import Logo from "../../Components/Logo";
import Twoquote from "../../Components/Twoquote";

export default function SignUpIndex({ handelLogin }) {
  return (
    <div className="index_div">
      <div className="left_div">
        <div className="layer">
          <Logo logo={whiteLogo} />
          <img className="group" src={group} alt="" />
          <Twoquote className="quote" />
          <Quote className="Quote1" />
        </div>
        <img className="vector" src={vector} alt="" />
        <img className="circle" src={circle} alt="" />
      </div>
      <Form handelLogin={handelLogin} />
    </div>
  );
}

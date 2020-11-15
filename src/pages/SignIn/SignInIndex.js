import React from "react";

import "./style.css";
import Form from "./Form";
import Quote from "../../Components/Quote";
import Logo from "../../Components/Logo";
import blueLogo from "../../assets/blueLogo.png";
import Superscene from "../../assets/superscene.png";
import Twoquote from "../../Components/Twoquote";

export default function SignInIndex(props) {
  const { handelLogin } = props;
  return (
    <div className="outer-div">
      <div className="righ">
        <Logo logo={blueLogo} className="blueLogo" />
        <Twoquote className="quoteSymbol" />
        <Quote className="Quote2" />
        <img src={Superscene} alt="" className="Superscene" />
      </div>
      <Form handelLogin={handelLogin} />
    </div>
  );
}

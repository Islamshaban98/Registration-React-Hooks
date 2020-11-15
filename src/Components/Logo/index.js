import React from "react";

import "./style.css";
export default function Logo({ logo, className }) {
  return <img class="logo" src={logo} alt="" className={className} />;
}

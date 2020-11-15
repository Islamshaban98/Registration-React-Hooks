import React from "react";
import "./style.css";

import EyeIcon from "../Icons/EyeIcon";

export default function Input(props) {
  const {
    id,
    placeholder,
    name,
    type,
    lable,
    value,
    handleChange,
    toggleShow,
    error,
  } = props;
  return (
    <div className="input_div">
      <label className="label" htmlFor={id}>
        {lable}
      </label>
      <input
        className={`input ${error && "error-text"}`}
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <div onClick={toggleShow}>
        <EyeIcon
          className={`${
            type === "password" || type === "text" ? "eye" : "hiddenSvg"
          }`}
        />
      </div>
      {error && <div className="error-div">{error}</div>}
    </div>
  );
}

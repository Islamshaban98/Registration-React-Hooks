import React from "react";
import "./style.css";
export default function Checkbox(props) {
  const { type, id, label, name, checked, handleChange } = props;
  return (
    <div className="check_div">
      <input
        className="check_input"
        checked={checked}
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
      />
      <label htmlFor={id} className="check_text">
        {label}
      </label>
    </div>
  );
}

import React from "react";

import "./style.css";

export default function Quote({ className }) {
  return (
    <div className="quote_div">
      <div className={`parag ${className}`}>
        I always observe the people who pass by when I ride an escalator. I'll
        never see most of them again, so I imagine a lot of things about their
        lives... about the day ahead of them.
      </div>
      <p className={`writer ${className}`}>Hideo Kojima</p>
    </div>
  );
}

import React from "react";
import style from "./TipComponenet.module.css";
const TipComponent = () => {
  return (
    <div className="relative">
      <div></div>
      <div className={`${style.container} absolute`}>Hello</div>
    </div>
  );
};

export default TipComponent;

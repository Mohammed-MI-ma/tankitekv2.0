import React from "react";
import style from "./ActionButton.module.css";
import arrow from "../../assets/images/svg/arrow.svg";
import ComponentWithHoverEffect from "../utils/ComponentWithHoverEffect";
const ActionButton = () => {
  return (
    <div className="w-[160px] h-[50px]">
      <div className="relative">
        <ComponentWithHoverEffect>
          <div
            className={`${style.outerButton} shadow-lg flex justify-around items-center `}
            style={{ fontFamily: "Primary-bold" }}
          >
            <p>انضم إلى المجتمع</p>
            <img
              src={arrow}
              style={{
                borderRadius: "50px",
                width: "30px",
              }}
            ></img>
          </div>
          <div
            className={style.innerButton}
            style={{ fontFamily: "Primary-bold" }}
          ></div>
        </ComponentWithHoverEffect>
      </div>
    </div>
  );
};

export default ActionButton;

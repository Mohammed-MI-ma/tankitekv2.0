import React from "react";
import CenteredFlexComponent from "../utils/CenteredFlexComponent";
import ComponentWithHoverEffect from "../utils/ComponentWithHoverEffect";

const ButtonOpenMore = () => {
  return (
    <div
      className="absolute shadow-lg"
      style={{
        left: "50%",
        transform: "translate(-25px)",
        fontFamily: "Primary-Regular",
        textAlign: "center",
        color: "white",
      }}
    >
      <div className="relative">
        <CenteredFlexComponent
          className="absolute"
          style={{
            background: "#061C18",
            maxWidth: "50px",
            borderBottomLeftRadius: "35px",
            borderBottomRightRadius: "35px",
            fontSize: "10px",
            padding: "10px",
            zIndex: "2",
          }}
        >
          <ComponentWithHoverEffect>
            <p>افتح الحزم المميزة </p>
          </ComponentWithHoverEffect>
        </CenteredFlexComponent>{" "}
        <div
          className="absolute"
          style={{
            background: "black",
            top: "5px",
            maxWidth: "50px",
            borderBottomLeftRadius: "35px",
            borderBottomRightRadius: "35px",
            fontSize: "10px",
            padding: "10px",
            zIndex: "0",
          }}
        >
          <ComponentWithHoverEffect>
            <p>افتح الحزم المميزة </p>
          </ComponentWithHoverEffect>
        </div>
      </div>
    </div>
  );
};

export default ButtonOpenMore;

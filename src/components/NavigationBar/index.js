import React from "react";
import { Link } from "react-router-dom";

import CenteredFlexComponent from "../utils/CenteredFlexComponent";

import style from "./navigationBar.module.css";

import logoPortefeuille from "../../assets/images/svg/Logo.svg";
import NavbarActionsButtons from "./NavbarActionsButtons";

const NavigationBar = () => {
  return (
    <nav style={{ background: "var(--color-primary)" }} className="shadow-lg">
      <CenteredFlexComponent
        className={`w-full flex-col ${style.navbarStyle} `}
        style={{ background: "var(--color-primary)" }}
      >
        <div
          className={`${style.navbarInnerStyle} w-full flex items-center justify-between mt-5 `}
        >
          <div className={`${style.navBar_container} flex`}>
            <CenteredFlexComponent className={`gap-3`}>
              <NavbarActionsButtons />
            </CenteredFlexComponent>
          </div>
          <div className={`cursor-pointer`}>
            <Link to="/">
              <div className={`flex justify-start relative flex-col }`}>
                <img
                  src={logoPortefeuille}
                  width={200}
                  alt="logo Portefeuille"
                />
              </div>
            </Link>
          </div>
        </div>
      </CenteredFlexComponent>
    </nav>
  );
};

export default NavigationBar;

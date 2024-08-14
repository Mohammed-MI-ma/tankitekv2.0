import React from "react";
import { Button, Space } from "antd";

import style from "./NavbarActionsButtons.module.css";
import CenteredFlexComponent from "../../utils/CenteredFlexComponent";

const NavbarActionsButtons = () => {
  const fontFamilyMedium = null;

  return (
    <Space>
      {!true ? (
        <></>
      ) : (
        <CenteredFlexComponent className={style.actionButtonsOnMode}>
          <Button
            type="link"
            style={{
              fontFamily: "Primary-Regular",
              fontSize: "0.95rem",
            }}
          >
            الرئيسية
          </Button>
          <Button
            type="link"
            style={{
              fontFamily: "Primary-Regular",
              fontSize: "0.95rem",
            }}
          >
            الرئيسية
          </Button>{" "}
          <Button
            type="link"
            style={{
              fontFamily: "Primary-Regular",
              fontSize: "0.95rem",
            }}
          >
            عرض
          </Button>
          <Button
            type="link"
            style={{
              fontFamily: "Primary-Bold",
              fontSize: "0.95rem",
              textDecoration: "underline",
            }}
          >
            الرئيسية
          </Button>
        </CenteredFlexComponent>
      )}
    </Space>
  );
};

export default NavbarActionsButtons;

import React from "react";
import style from "./Loader.module.css";
const Loader = () => {
  return (
    <div
      className="h-[100vh] w-full flex justify-center items-center"
      style={{
        color: "var(--color-theme)",
      }}
    >
      <div className={style.sk_cube_grid}>
        <div className={`${style.sk_cube} ${style.sk_cube1}`} />
        <div className={`${style.sk_cube} ${style.sk_cube2}`} />
        <div className={`${style.sk_cube} ${style.sk_cube3}`} />
        <div className={`${style.sk_cube} ${style.sk_cube4}`} />
        <div className={`${style.sk_cube} ${style.sk_cube5}`} />
        <div className={`${style.sk_cube} ${style.sk_cube6}`} />
        <div className={`${style.sk_cube} ${style.sk_cube7}`} />
        <div className={`${style.sk_cube} ${style.sk_cube8}`} />
        <div className={`${style.sk_cube} ${style.sk_cube9}`} />
      </div>
    </div>
  );
};

export default Loader;

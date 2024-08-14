//REACT
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { General_Assets } from "./config.dev";

//SEO
import { Helmet } from "react-helmet";

//LOADERS 4 FONTS- 4 NECESSARY_IMAGES
import { loadFonts, loadImages } from "./services";

//FontsConfig
import { FontsConfig } from "./fontsConfig";

//Components
import NavigationBar from "./components/NavigationBar";

//Styling
import style from "./App.module.css";

import arEG from "antd/lib/locale/ar_EG";
import { ConfigProvider } from "antd";

//Routes
import { routes } from "./routes";

//Framer_Motion
import { AnimatePresence } from "framer-motion";
import ComponentWithHoverEffect from "./components/utils/ComponentWithHoverEffect";

function App() {
  //Hooks
  const [appIsReady, setAppIsReady] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        await Promise.all([loadFonts(FontsConfig)]);
        switch (location.pathname) {
          case "/":
            break;
          default:
            break;
        }
        setAppIsReady(true);
      } catch (error) {}
    }
    fetchData();
  }, [location.pathname]);
  return (
    <ConfigProvider
      locale={arEG}
      theme={{
        token: {
          colorLink: "white",
          colorLinkActive: "var(--color-shade1)",
          colorLinkHover: "var(--color-shade2)",
        },
      }}
    >
      <div className={style.wrapper}>
        <header className={"shadow-lg"} style={{}}>
          <NavigationBar />
        </header>
        <AnimatePresence mode="wait">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Routes>
        </AnimatePresence>{" "}
        <div
          className="fixed shadow-lg"
          style={{
            zIndex: 100001,

            right: "-50px",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "center",
            top: "50vh",
            background: "#088772",
            fontFamily: "Primary-Bold",
            color: "white",
          }}
        >
          <div
            className="relative"
            style={{
              width: "100px",
              height: "100px",
            }}
          >
            {" "}
            <div
              style={{
                width: "100px",
                height: "100px",
                textAlign: "right",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                paddingRight: "52px",

                background: "#088772",

                zIndex: 100001,
              }}
              className="absolute shadow-lg"
            >
              <ComponentWithHoverEffect>
                <p className="w-[50px]"> أحتاج مساعدة</p>{" "}
              </ComponentWithHoverEffect>
            </div>{" "}
            <div
              style={{
                width: "100px",
                height: "100px",
                textAlign: "right",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 100000,
                background: "#061C18",
                borderRadius: "50px",
                right: "10px",
              }}
              className="absolute shadow-lg"
            >
              أحتاج مساعدة
            </div>{" "}
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;

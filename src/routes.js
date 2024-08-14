// routes.js
import React from "react";
import CustomSuspense from "./components/CustomSuspense";
import ActionButton from "./components/ActionButton";
import wallet from "./assets/images/svg/wallet.svg";
import ButtonOpenMore from "./components/ButtonOpenMore";
import zallij from "./assets/images/svg/zallij.png";
import HorizontalScroll from "./components/HorizontalScroll";
import { Avatar, Button } from "antd";
import {
  AiFillAlert,
  AiFillLike,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMenu,
  AiFillFacebook,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

import avatar from "./assets/images/png/avatar.png";
import WhatsNewComponent from "./components/WhatsNewComponent";
export const routes = [
  {
    path: "/",
    element: (
      <CustomSuspense id="landingPage">
        <div className="relative">
          <div
            className="flex w-full items-center justify-center shadow-lg"
            style={{
              borderBottomRightRadius: "90px",
              borderBottomLeftRadius: "90px",
              height: "75vh",
              minHeight: "464px",
              overflowY: "hidden",
              backgroundSize: "200px 150px,100px 100px",
              background: `url(${zallij}) -254px -67px no-repeat, url(${zallij}) 100% 100% no-repeat, linear-gradient(90deg,var(--color-primary) 100%,rgba(236,246,244,1) 72%,var(--color-primary) 74%, rgba(217,235,232,1) 77%,var(--color-primary) 100%)`,
            }}
          >
            <div>
              <div
                className="absolute w-[160px] h-[400px] "
                style={{
                  left: 0,
                  top: 0,
                  transform: "translateX(106px)",
                }}
              >
                <div className="w-full h-full relative">
                  <div
                    className="absolute w-[160px] h-[400px] shadow-lg"
                    style={{
                      left: 0,
                      top: 0,
                      borderRadius: "17px",
                      background:
                        "linear-gradient(to bottom, #000000 1%, #1D2221 20%, #1D2221 100%)",
                      zIndex: 2,
                    }}
                  >
                    <div
                      className="h-[40%] text-white flex justify-around items-start flex-col"
                      style={{ fontFamily: "Primary-Regular" }}
                    >
                      <div className="flex">
                        <div className="text-[#AAAAAA] flex justify-end  items-center ">
                          <Button type="link">
                            <AiOutlineMenu />
                          </Button>
                        </div>
                        <header
                          className="text-[#AAAAAA] flex justify-end p-5 items-center w-full"
                          style={{ fontSize: "10px" }}
                        >
                          <h1>حصريات مجانية </h1> <AiFillAlert />
                        </header>
                      </div>
                      <div
                        dir="rtl"
                        style={{
                          width: "100%",
                          padding: "10px",
                        }}
                      >
                        <small
                          style={{
                            borderRadius: "17px",
                            backgroundColor: "#62AEA2",
                            padding: "5px",
                            boxShadow: " 10px 10px 20px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          اضطرابات
                        </small>
                      </div>{" "}
                      <main
                        style={{
                          fontFamily: "Primary-Bold",
                          fontSize: "11px",
                          textAlign: "center",
                        }}
                      >
                        <h1>
                          حدث غريب أحدث اضطرابات في مدرسة داخلية إسلامية منذ
                          عودة إحدى الطالبات. ما الذي يحدث حقا؟
                        </h1>
                      </main>
                    </div>
                    <div
                      className="h-[60%] bg-white shadow-lg relative"
                      style={{
                        borderRadius: "17px",
                        padding: "10px",
                      }}
                    >
                      <header
                        className="flex justify-around items-center"
                        style={{
                          fontFamily: "Primary-Regular",
                          textAlign: "right",
                        }}
                      >
                        <div
                          className="flex justify-between items-center w-[77px]"
                          style={{
                            borderRadius: "17px",
                            fontFamily: "Primary-Regular",
                            background: "#083F36",
                            fontSize: "10px",
                            color: "white",
                            padding: "5px",
                          }}
                        >
                          <Avatar
                            src={avatar}
                            style={{ width: "50px", height: "auto" }}
                          ></Avatar>
                          <p>فاطمة الزهراء</p>
                        </div>
                        <div
                          className="rounded p-1"
                          style={{ fontSize: "8px" }}
                        >
                          منذ ساعتين
                        </div>{" "}
                        <div
                          style={{ fontSize: "8px" }}
                          className="flex items-center justify-center w-full"
                        >
                          <h1>300</h1>
                          <AiFillLike />
                        </div>
                      </header>
                      <main
                        style={{
                          fontFamily: "Primary-Bold",
                          fontSize: "11px",
                          textAlign: "center",
                        }}
                      >
                        <h1>
                          حدث غريب أحدث اضطرابات في مدرسة داخلية إسلامية منذ
                          عودة إحدى الطالبات. ما الذي يحدث حقا؟
                        </h1>
                        <h2
                          style={{
                            fontFamily: "Primary-Light",
                            fontSize: "11px",
                            textAlign: "center",
                          }}
                        >
                          مشاهدة فيلم الرعب Munkar 2024 مترجم بجودة 1080p WEB-DL
                          مشاهدة اون لاين مباشرة و
                        </h2>
                      </main>
                      <Button
                        style={{
                          fontFamily: "Primary-Regular",
                          position: "absolute",
                          bottom: "10px",
                          width: "calc( 100% - 20px)",
                          borderRadius: "17px",
                          background: "#0B5C4F",
                          color: "white",
                        }}
                      >
                        عرض المزيد
                      </Button>
                    </div>
                  </div>{" "}
                  <div
                    className="absolute w-[160px] h-[256px] shadow-lg"
                    style={{
                      left: 0,
                      top: 0,
                      transform: "translate(10px,-10px)",
                      borderRadius: "17px",
                      background: "#099981",
                      zIndex: 1,
                    }}
                  ></div>{" "}
                  <div
                    className="absolute w-[160px] h-[256px] shadow-lg"
                    style={{
                      left: 0,
                      top: 0,
                      transform: "translate(20px,-20px)",
                      borderRadius: "17px",
                      background: "#083F36",
                      zIndex: 0,
                    }}
                  ></div>
                  <Button
                    shape="circle"
                    className="absolute"
                    style={{
                      top: "50%",
                      left: "0px",
                      transform: "translateX(-50px)",
                      zIndex: "3",
                    }}
                  >
                    <AiOutlineArrowLeft />
                  </Button>{" "}
                  <Button
                    className="absolute"
                    shape="circle"
                    style={{
                      top: "50%",
                      right: "0px",
                      transform: "translateX(50px)",
                      zIndex: "3",
                      boxShadow: " 10px 10px 20px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <AiOutlineArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <div
              style={{
                fontSize: "96px",
                fontFamily: "Primary-Regular",
                marginTop: "40px",
                color: "white",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                height: "100%",
                justifyContent: "center",
              }}
            >
              {" "}
              <p
                style={{
                  fontSize: "1rem",
                  width: "100%",
                  textAlign: "right",
                  color: "white",
                }}
              >
                ألف معلومة على مدار الساعة، 7 أيام في الأسبوع
              </p>
              <div className="relative">
                <img
                  src={wallet}
                  style={{
                    position: "absolute",
                    zIndex: 0,
                    top: "-50px",
                  }}
                  alt="wallet"
                />
                <div className="relative">
                  <h1
                    style={{
                      letterSpacing: "-5px",
                      zIndex: 100,
                      position: "relative",
                    }}
                  >
                    المِحْفَظَة الإجتماعية
                  </h1>
                  <div
                    className="w-[100px] h-[20px] absolute"
                    style={{
                      zIndex: "50000",
                      fontSize: "12px",
                      right: "-50px",
                      textAlign: "right",
                      backgroundColor: "#083F36",
                      color: "white",
                      width: "116px",
                      height: "30px",
                      borderRadius: "5px",
                    }}
                  >
                    <div className="relative w-full">
                      <div style={{ backgroundColor: "#099981" }}>
                        <div
                          style={{
                            width: "0",
                            height: "0",
                            position: "absolute",
                            borderLeft: "13px solid transparent",
                            borderRight: "13px solid transparent",
                            borderTop: "20px solid #083F36",
                            bottom: "-5px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <div style={{ backgroundColor: "#083F36" }}>
                        {" "}
                        برنامج البطالة، هل هو قريب جداً؟
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: "1rem",

                  color: "white",
                  textAlign: "center",
                  zIndex: 100,
                  position: "relative",
                }}
              >
                مكان تجد فيه كل احتياجاتك المتعلقة بالرعاية الاجتماعية في مكان
                واحد، وابحث عن حلول لمشاكلك
              </p>{" "}
              <ActionButton />
              <p
                style={{
                  fontSize: "1rem",
                  width: "initial",
                  color: "white",
                  textAlign: "center",
                }}
              >
                الجميع هنا يتحدث عن مواضيع ساخنة قد تهمك حول الحماية الاجتماعية
              </p>{" "}
              <p
                style={{
                  fontSize: "1rem",
                  width: "initial",
                  color: "white",
                  textAlign: "center",
                  marginBottom: "200px",
                }}
              >
                التأمين الصحي الإلزامي / السجل الوطني للسكان / السجل الاجتماعي
                الموحد
              </p>
              <div
                style={{
                  position: "absolute",
                  fontSize: "1rem",
                  width: "98vw",
                  color: "white",
                  textAlign: "center",
                  bottom: "50px",
                  height: "60px",
                }}
              >
                <HorizontalScroll />
              </div>
            </div>
          </div>
          <ButtonOpenMore />
        </div>
        <div
          className="h-[100vh] flex justify-start flex-col items-center"
          style={{ fontSize: "20px", color: "#4A4A4A", paddingTop: "72px" }}
        >
          <h1 style={{ fontFamily: "Primary-Regular", marginBottom: "60px" }}>
            احتفظ بجميع معلوماتك الاجتماعية في مكان واحد، دون مزيد من التأخير
          </h1>
          <main>
            <div
              class="grid grid-cols-4 grid-rows-2 gap-10 pr-10"
              style={{ borderRight: "3px solid #083F36" }}
            >
              <WhatsNewComponent /> <WhatsNewComponent />
              <WhatsNewComponent />
              <WhatsNewComponent />
              <WhatsNewComponent />
              <WhatsNewComponent /> <WhatsNewComponent /> <WhatsNewComponent />
            </div>
          </main>
        </div>
        <div
          className="h-[100vh] flex justify-start flex-col items-center"
          style={{
            fontSize: "70px",
            background: "#061C18",
            color: "white",
            minHeight: "500px",
            paddingTop: "72px",
            textAlign: "right",

            fontFamily: "Primary-Regular",
          }}
        >
          <div className="w-[70vw] flex">
            <div
              className="w-[50%] h-full flex justify-center items-center shadow-lg m-3"
              style={{ background: "#051210", borderRadius: "17px" }}
            ></div>
            <div className="w-[50%] h-full m-3">
              <h1 style={{ letterSpacing: "2px" }}>
                خطوة<br></br> جريئة
              </h1>
              <p style={{ fontSize: "20px" }}>
                قررنا أن نتخذ خطوة جريئة لمساعدة جميع المغاربة. بدأنا بجمع جميع
                المعلومات المفيدة التي يمكن أن تساعدهم، من نصائح تعليمية إلى
                إرشادات حول خدمات الحماية الاجتماعية المحلية. ثم أنشأنا منصة
                إلكترونية يمكن لأي شخص الوصول إليها بسهولة
              </p>
              <footer>
                <Button type="text">
                  <AiFillInstagram size="40px" color="white" />
                </Button>
                <Button type="text">
                  <AiOutlineTwitter size="40px" color="white" />
                </Button>{" "}
                <Button type="text">
                  <AiFillFacebook size="40px" color="white" />
                </Button>
                <Button type="text">
                  <FaTiktok size="40px" color="white" />
                </Button>
              </footer>
            </div>
          </div>
        </div>
      </CustomSuspense>
    ),
  },
];

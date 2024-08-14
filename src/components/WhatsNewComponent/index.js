import React from "react";

const WhatsNewComponent = () => {
  return (
    <div className="flex flex-col items-end" style={{ maxWidth: "150px" }}>
      <div className="w-[50px] h-[50px]">
        <div
          className="w-[50px] h-[50px] bg-white absolute"
          style={{ borderRadius: "50px", zIndex: 1 }}
        ></div>
        <div
          className="w-[50px] h-[50px] absolute"
          style={{
            background: "#088772",
            borderRadius: "50px",
            zIndex: 0,

            transform: "translateX(5px)",
          }}
        ></div>
      </div>
      <div
        style={{
          fontSize: "14px",
          fontFamily: "Primary-Regular",
          textAlign: "right",
        }}
      >
        حدث غريب أحدث اضطرابات{" "}
      </div>
      <div
        style={{
          fontSize: "11px",
          fontFamily: "Primary-Regular",
          textAlign: "right",
        }}
      >
        مباشرة وتحميل مباشرمشاهدة فيلم الرعب Munkar 202
      </div>
    </div>
  );
};

export default WhatsNewComponent;

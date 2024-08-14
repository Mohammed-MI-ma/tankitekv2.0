import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./horizontalScroll.module.css";
import { FaBloggerB } from "react-icons/fa";

import avatar from "../../assets/images/png/avatar.png";
export const partners = [
  {
    id: 1,
    title: "مباشرمشاهدة",
    icon: "",
    description:
      " Munkar 2024 مترجم بجودة 1080p WEB-DL مشاهدة اون لاين مباشرة وتحميل مباشرمشاهدة فيلم الرع ...",
  },
  {
    id: 1,
    title: "مباشرمشاهدة",
    icon: "",
    description:
      " Munkar 2024 مترجم بجودة 1080p WEB-DL مشاهدة اون لاين مباشرة وتحميل مباشرمشاهدة فيلم الرع ...",
  },
  {
    id: 1,
    title: "مباشرمشاهدة",
    icon: "",
    description:
      " Munkar 2024 مترجم بجودة 1080p WEB-DL مشاهدة اون لاين مباشرة وتحميل مباشرمشاهدة فيلم الرع ...",
  },
  {
    id: 1,
    title: "مباشرمشاهدة",
    icon: "",
    description:
      " Munkar 2024 مترجم بجودة 1080p WEB-DL مشاهدة اون لاين مباشرة وتحميل مباشرمشاهدة فيلم الرع ...",
  },
  {
    id: 1,
    title: "مباشرمشاهدة",
    icon: "",
    description:
      " Munkar 2024 مترجم بجودة 1080p WEB-DL مشاهدة اون لاين مباشرة وتحميل مباشرمشاهدة فيلم الرع ...",
  },
  {
    id: 2,
    title: "COIFFURE FEMME",
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 3,
    title: "HAMAM",

    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 4,
    title: "INSTITUT DE BEAUTÉ",
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
  {
    id: 5,
    title: "INSTITUT DE BEAUTÉ",
    icon: "",
    description:
      " Envie de changer de tête ou simplement de rafraîchir votre coupe? Vous avez besoin ...",
  },
];

const HorizontalScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      className={styles.horizontalScrollContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <motion.button
          className={styles.scrollButton}
          onClick={() => scroll("left")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❮
        </motion.button>{" "}
        <div className="flex items-center">
          <h1> مقالات مميزة ونصائح من خبرائنا</h1>
          <FaBloggerB />
        </div>
        <motion.button
          className={styles.scrollButton}
          onClick={() => scroll("right")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ❯
        </motion.button>
      </div>
      <div className={styles.scrollableContent} ref={scrollRef}>
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: partner.id * 0.1 }}
          >
            <div className="relative shadow-lg" style={{ minWidth: "250px" }}>
              <div className={`${styles.item} relative `} style={{ zIndex: 1 }}>
                <img style={{ width: "20px" }} src={avatar} />
                <div
                  style={{
                    maxWidth: "230px",
                    background: "#061C18",
                    borderRadius: "5px",
                  }}
                >
                  <h1 style={{ fontFamily: null }}> {partner?.title}</h1>
                  <p style={{ fontFamily: null, textTransform: "none" }}>
                    {partner?.description}
                  </p>
                </div>
              </div>{" "}
              <div
                className={`${styles.item} absolute  bg-black w-[90%] h-full`}
                style={{ zIndex: 0, left: "-5px", top: "-5px" }}
              >
                <div style={{ maxWidth: "230px" }}>ss</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default HorizontalScroll;

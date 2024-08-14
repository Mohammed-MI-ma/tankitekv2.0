import React from "react";
import { motion } from "framer-motion";

const ComponentWithHoverEffect = ({ children, id, className, style }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.5 },
      }}
      transition={{ type: "spring", stiffness: 50 }}
      whileTap={{ scale: 0.905 }}
      id={id}
      className={className}
      style={{ cursor: "pointer", ...style }}
    >
      {children}
    </motion.div>
  );
};

export default ComponentWithHoverEffect;

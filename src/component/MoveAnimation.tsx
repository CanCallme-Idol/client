import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MoveAnimation({
  images,
  idx,
  imageVariants,
  imgStyle,
  side,
}: {
  images: any;
  idx: number;
  imageVariants: any;
  imgStyle: any;
  side?: boolean;
}) {
  return (
    <AnimatePresence>
      <motion.img
        key={images[idx]}
        src={images[idx]}
        alt={`Image ${idx + 1}`}
        variants={imageVariants}
        initial={{
          opacity: 0,
          y: side ? "0%" : "-100%",
          x: side ? "-100%" : "0%",
        }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: side ? "0%" : "100%", x: side ? "100%" : "0%" }}
        transition={{ duration: 1 }}
        style={{
          position: "fixed",
          ...imgStyle,
        }}
      />
    </AnimatePresence>
  );
}

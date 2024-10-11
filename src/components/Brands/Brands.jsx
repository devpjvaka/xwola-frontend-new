import React from "react";
import Brand1 from "../../assets/brands/arenase.png";
import Brand2 from "../../assets/brands/phl.png";
import Brand3 from "../../assets/brands/itopup.png";
import Brand4 from "../../assets/brands/pj.png";
import Brand5 from "../../assets/brands/eaufladen.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animation";

const Brands = () => {
  return (
    <>
      <div className="container py-14">
        <div className="flex flex-wrap justify-center lg:justify-between gap-6">
          <motion.img
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            src={Brand1}
            alt="brand"
            className="w-[150px]"
          />
          <motion.img
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            src={Brand2}
            alt="brand"
            className="w-[150px]"
          />
          <motion.img
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView={"animate"}
            src={Brand3}
            alt="brand"
            className="w-[150px]"
          />
          <motion.img
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView={"animate"}
            src={Brand4}
            alt="brand"
            className="w-[150px]"
          />
          <motion.img
            variants={SlideUp(1.0)}
            initial="initial"
            whileInView={"animate"}
            src={Brand5}
            alt="brand"
            className="w-[150px]"
          />
        </div>
      </div>
    </>
  );
};

export default Brands;

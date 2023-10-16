import React from "react";
import Box from "./Box";
import "./style/ListBoxes.css";
import Car from "./../image/car.png";
import Phone from "./../image/phone.png";
import HotDog from "./../image/hotdog.png";
import Sneaker from "./../image/sneaker.png";
import TShirt from "./../image/tshirt2.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ListBoxes() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.ul
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {[0].map((index) => (
        <div className="list">
          <motion.div key={index} className="item" variants={item}>
            <Link to="/sneaker">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Box image={Sneaker} name="Nike Dunk low" />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div key={index} className="item" variants={item}>
            <Link to="/tshirt">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Box image={TShirt} name="T-Shirt" />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div key={index} className="item" variants={item}>
            <Link to="/car">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Box image={Car} name="Car" />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div key={index} className="item" variants={item}>
            <Link to="/phone">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Box image={Phone} name="Vintage Phone" />
              </motion.div>
            </Link>
          </motion.div>
          <motion.div key={index} className="item" variants={item}>
            <Link to="/hotdog">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Box image={HotDog} name="American Hot Dog" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      ))}
    </motion.ul>
  );
}

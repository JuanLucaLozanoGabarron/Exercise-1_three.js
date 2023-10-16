import React from "react";
import ListBoxes from "../components/ListBoxes";
import Header from "../components/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 20,
        }}
      >
        <Header />
      </motion.div>

      <ListBoxes />
    </div>
  );
}

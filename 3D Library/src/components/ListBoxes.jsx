import React from "react";
import Box from "./Box";
import "./style/ListBoxes.css";
import Car from "./../image/car.png";
import Phone from "./../image/phone.png";

import { Link } from "react-router-dom";

export default function ListBoxes() {
  return (
    <div className="list">
      <Link to="/dog">
        <Box image={Car} name="Golden Retriever" />
      </Link>
      <Link to="/car">
        <Box image={Car} name="Car" />
      </Link>
      <Link to="/phone">
        <Box image={Phone} name="Vintage Phone" />
      </Link>
      <Box image={Car} name="Human Skull" />
    </div>
  );
}

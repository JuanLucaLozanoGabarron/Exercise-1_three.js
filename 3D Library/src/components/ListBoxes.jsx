import React from "react";
import Box from "./Box";
import "./style/ListBoxes.css";
import Car from "./../image/car.png";
import Phone from "./../image/phone.png";
import HotDog from "./../image/hotdog.png";
import Sneaker from "./../image/sneaker.png";

import { Link } from "react-router-dom";

export default function ListBoxes() {
  return (
    <div className="list">
      <Link to="/sneaker">
        <Box image={Sneaker} name="Nike Dunk low" />
      </Link>
      <Link to="/sneaker">
        <Box image={Sneaker} name="Nike Dunk low" />
      </Link>
      <Link to="/car">
        <Box image={Car} name="Car" />
      </Link>
      <Link to="/phone">
        <Box image={Phone} name="Vintage Phone" />
      </Link>
      <Link to="/hotdog">
        <Box image={HotDog} name="American Hot Dog" />
      </Link>
    </div>
  );
}

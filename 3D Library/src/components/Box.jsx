import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Skull from "../../public/Skull";
import "./style/Box.css";

export default function Box(props) {
  return (
    <div className="box">
      <div className="3D-image">
        <img src={props.image} alt="" />
      </div>
      <div className="title">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

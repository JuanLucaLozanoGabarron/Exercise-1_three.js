import React from "react";
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

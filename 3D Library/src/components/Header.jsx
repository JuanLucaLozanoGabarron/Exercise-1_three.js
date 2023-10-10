import React from "react";
import "./style/Header.css";
import logo from "../image/logo.png"


export default function Header() {
  return (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  );
}

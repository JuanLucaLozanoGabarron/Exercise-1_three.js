import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SneakerObject from "../../public/SneakerObject";
import { Link } from "react-router-dom";
import "./style/routes.css";

export default function Sneaker() {
  return (
    <div>
      <Link to="/">
        <div className="backButton">
          <p>Go back</p>
        </div>
      </Link>

      <Canvas
        camera={{ position: [0, 0, 400], fov: 100 }}
        style={{
          height: "100vh",
          backgroundImage: 'url("../src/image/background2.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={3} />
          <directionalLight intensity={5} />
          <SneakerObject />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

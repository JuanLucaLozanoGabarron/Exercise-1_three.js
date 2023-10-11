import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TshirtObject from "../../public/TshirtObject";
import { Link } from "react-router-dom";
import "./style/routes.css";

export default function TShirt() {
  return (
    <div>
      <Link to="/">
        <div className="backButton">
          <p>Go back</p>
        </div>
      </Link>

      <Canvas
        camera={{ position: [0, 160, 180], fov: 100 }}
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
          <TshirtObject />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

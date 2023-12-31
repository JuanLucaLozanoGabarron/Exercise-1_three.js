/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 sneaker.glb
Author: Aquateknica (https://sketchfab.com/aquateknica)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/sneaker-4cc5b5a2fd54454182f14c5e80782287
Title: Sneaker
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/sneaker.glb");
  return (
    <group {...props} dispose={null} scale={1}>
      <group
        position={[-9.51, -48.3, 57.82]}
        rotation={[-Math.PI, Math.PI / 2, 0]}
      >
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.material_0}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.material_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/sneaker.glb");

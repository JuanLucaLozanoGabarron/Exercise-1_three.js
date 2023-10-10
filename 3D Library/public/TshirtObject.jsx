import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tshirt.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.Cotton_Gabardine_FRONT_2673} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.PT_FABRIC_FRONT_32035} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Cotton_Gabardine_FRONT_2673_0} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Cotton_Gabardine_FRONT_2673_1} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Cotton_Gabardine_FRONT_2673_2} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.Rib_1X1_319gsm_FRONT_2664} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.Rib_1X1_319gsm_FRONT_2664_0} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.Cotton_Gabardine_FRONT_2673_3} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.Cotton_Gabardine_FRONT_2673_4} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.Cotton_Gabardine_FRONT_2673_5} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.Cotton_Gabardine_FRONT_2673_6} />
    </group>
  )
}

useGLTF.preload('/tshirt.glb')

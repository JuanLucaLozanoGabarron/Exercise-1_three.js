import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/phone.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube_Material_0.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[2.55, 8.67, 1.7]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube002_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube002_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[0.06, 8.67, 1.7]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube003_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube003_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-2.52, 8.67, 1.7]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube004_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube004_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[2.55, 7.57, 3.88]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube005_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube005_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[0.06, 7.57, 3.88]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube006_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube006_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-2.52, 7.57, 3.88]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube007_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube007_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[2.55, 6.43, 6.11]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube008_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube008_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[0.06, 6.43, 6.11]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube009_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube009_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-2.52, 6.43, 6.11]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube010_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube010_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[0.06, 5.41, 8.02]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube011_Material002_0.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube011_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[2.55, 9.81, -0.47]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube015_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube015_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[0.06, 9.81, -0.47]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube016_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube016_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <group position={[-2.52, 9.81, -0.47]} rotation={[-1.09, 0, 0]} scale={100}>
        <mesh geometry={nodes.Cube017_M_Button_0.geometry} material={materials.M_Button} />
        <mesh geometry={nodes.Cube017_Material001_0.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.Cube001_Material_0.geometry} material={materials.Material} position={[0, 14.36, -10.4]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube012_Material_0.geometry} material={materials.Material} position={[-8.84, 1.32, -4.52]} rotation={[-Math.PI / 2, 0, -0.03]} scale={100} />
      <mesh geometry={nodes.Cube013_Material_0.geometry} material={materials.Material} position={[-13.5, 9.95, -10.3]} rotation={[-Math.PI / 2, -0.05, -0.03]} scale={100} />
      <mesh geometry={nodes.Cube014_Material001_0.geometry} material={materials['Material.001']} position={[6.36, 1.25, -17.45]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
      <mesh geometry={nodes.BezierCircle_Material_0.geometry} material={materials.Material} position={[-9.27, 1.3, -4.61]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube018_Material002_0.geometry} material={materials['Material.002']} position={[-2.52, 9.81, -0.47]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube019_Material002_0.geometry} material={materials['Material.002']} position={[0.05, 9.81, -0.47]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube020_Material002_0.geometry} material={materials['Material.002']} position={[2.54, 9.81, -0.47]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube021_Material002_0.geometry} material={materials['Material.002']} position={[-2.52, 8.67, 1.7]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube022_Material002_0.geometry} material={materials['Material.002']} position={[0.05, 8.67, 1.7]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube023_Material002_0.geometry} material={materials['Material.002']} position={[2.54, 8.67, 1.7]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube024_Material002_0.geometry} material={materials['Material.002']} position={[-2.52, 7.57, 3.89]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube025_Material002_0.geometry} material={materials['Material.002']} position={[0.05, 7.57, 3.89]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube026_Material002_0.geometry} material={materials['Material.002']} position={[2.54, 7.57, 3.89]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube027_Material002_0.geometry} material={materials['Material.002']} position={[-2.52, 6.41, 6.1]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube028_Material002_0.geometry} material={materials['Material.002']} position={[0.05, 6.41, 6.1]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Cube029_Material002_0.geometry} material={materials['Material.002']} position={[2.54, 6.41, 6.1]} rotation={[-1.09, 0, 0]} scale={100} />
      <mesh geometry={nodes.Plane_Material002_0.geometry} material={materials['Material.002']} position={[11.26, 7.48, -9.04]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane001_Material002_0.geometry} material={materials['Material.002']} position={[7.81, 7.92, -9.04]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane002_Material002_0.geometry} material={materials['Material.002']} position={[10.18, 7.62, -8.23]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane003_Material002_0.geometry} material={materials['Material.002']} position={[8.73, 7.8, -8.23]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane004_Material002_0.geometry} material={materials['Material.002']} position={[10.18, 7.62, -12.44]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane005_Material002_0.geometry} material={materials['Material.002']} position={[8.73, 7.8, -12.44]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane006_Material002_0.geometry} material={materials['Material.002']} position={[11.26, 7.48, -11.5]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane007_Material002_0.geometry} material={materials['Material.002']} position={[7.81, 7.92, -11.5]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane008_Material002_0.geometry} material={materials['Material.002']} position={[11.62, 7.43, -10.29]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
      <mesh geometry={nodes.Plane009_Material002_0.geometry} material={materials['Material.002']} position={[7.47, 7.96, -10.29]} rotation={[Math.PI / 2, -0.13, -Math.PI]} scale={[40.58, 40.58, 100]} />
    </group>
  )
}

useGLTF.preload('/phone.glb')

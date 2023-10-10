import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/car.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[40.51, 74.48, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.car_body_body_0.geometry} material={materials.body} />
        <mesh geometry={nodes.car_body_rubber_0.geometry} material={materials.rubber} />
        <mesh geometry={nodes.car_body_glass_0.geometry} material={materials.glass} />
      </group>
      <group position={[60.95, 50.96, 72.08]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.door_left_body_0.geometry} material={materials.body} />
        <mesh geometry={nodes.door_left_rubber_0.geometry} material={materials.rubber} />
        <mesh geometry={nodes.door_left_interior_0.geometry} material={materials.interior} />
      </group>
      <group position={[55.23, 73.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.interior_01_interior_0.geometry} material={materials.interior} />
        <mesh geometry={nodes.interior_01_chrome_0.geometry} material={materials.chrome} />
      </group>
      <group position={[-25.66, 75.44, 30.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.interior_00_interior_0.geometry} material={materials.interior} />
        <mesh geometry={nodes.interior_00_chrome_0.geometry} material={materials.chrome} />
      </group>
      <group position={[60.96, 52.35, -71.88]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.door_right_body_0.geometry} material={materials.body} />
        <mesh geometry={nodes.door_right_rubber_0.geometry} material={materials.rubber} />
        <mesh geometry={nodes.door_right_interior_0.geometry} material={materials.interior} />
      </group>
      <group position={[-6.27, 101.33, -57.27]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.glass_02_body_0.geometry} material={materials.body} />
        <mesh geometry={nodes.glass_02_glass_0.geometry} material={materials.glass} />
      </group>
      <group position={[-5.87, 101.29, 57.08]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.glass_03_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.glass_03_body_0.geometry} material={materials.body} />
      </group>
      <group position={[34.56, 137.34, 11.04]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.04, -0.07, 16.3]} rotation={[0, 0, -1.92]}>
          <mesh geometry={nodes.chest_top_chest_0.geometry} material={materials.chest} position={[21.35, -41.94, -2.12]} />
        </group>
        <mesh geometry={nodes.chest_base_chest_0.geometry} material={materials.chest} />
      </group>
      <group position={[54.77, -2.07, -284.31]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0.01, 0.08, 199.33]}>
          <mesh geometry={nodes.vintage_lantern_glass_7_lantern_wall_glass_1_0.geometry} material={materials.lantern_wall_glass_1} position={[0.24, -7.28, 149.23]} />
          <mesh geometry={nodes.vintage_lantern_7_lantern_wall_base_1_0.geometry} material={materials.lantern_wall_base_1} />
        </group>
        <mesh geometry={nodes.vintage_lantern_7_base_lantern_wall_base_2_0.geometry} material={materials.lantern_wall_base_2} />
      </group>
      <mesh geometry={nodes.hood_body_0.geometry} material={materials.body} position={[-82.97, 75.29, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.rear_bumper_body_0.geometry} material={materials.body} position={[196.33, 31.6, -0.16]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.viper_01_body_0.geometry} material={materials.body} position={[-35.74, 94, 7.39]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.viper_02_body_0.geometry} material={materials.body} position={[-34.36, 93.07, -32.95]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.front_bumper_body_0.geometry} material={materials.body} position={[-114.74, 31.89, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.number_plate_number_0.geometry} material={materials.number} position={[-122.79, 32.21, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.bottom_body_0.geometry} material={materials.body} position={[42.38, 36.24, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.wheel_00_wheels_0.geometry} material={materials.wheels} position={[-71.9, 25.34, 62.76]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.wheel_01_wheels_0.geometry} material={materials.wheels} position={[130.14, 25.34, 62.56]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.wheel_02_wheels_0.geometry} material={materials.wheels} position={[130.14, 25.34, -59.22]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.wheel_03_wheels_0.geometry} material={materials.wheels} position={[-71.26, 25.34, -59.22]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.back_door_body_0.geometry} material={materials.body} position={[178.28, 63.44, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.lights_00_lights_0.geometry} material={materials.lights} position={[-113.31, 58.24, -52.91]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.railings_body_0.geometry} material={materials.body} position={[61.6, 132.74, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.logo_01_body_0.geometry} material={materials.body} position={[-118.59, 66.19, 0.49]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.lights_01_lights_0.geometry} material={materials.lights} position={[-111.18, 42.63, 56.29]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.lights_02_lights_0.geometry} material={materials.lights} position={[-111.18, 42.63, -56.29]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.lights_03_lights_0.geometry} material={materials.lights} position={[-95.61, 63.4, 66.67]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.lights_04_lights_0.geometry} material={materials.lights} position={[-95.61, 63.4, -66.67]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.lights_05_lights_0.geometry} material={materials.lights} position={[193.92, 54.7, 54.23]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.glass_01_glass_0.geometry} material={materials.glass} position={[32.16, 101.39, -57.63]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.glass_00_glass_0.geometry} material={materials.glass} position={[32.16, 101.39, 57.63]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.wheel_004_wheels_0.geometry} material={materials.wheels} position={[82.19, 145.06, 16.24]} rotation={[Math.PI, 0, 0]} />
      <mesh geometry={nodes.wheel_005_wheels_0.geometry} material={materials.wheels} position={[82.19, 151.17, -18.52]} rotation={[2.62, 0, 0]} />
      <mesh geometry={nodes.shadowplane_shadow_0.geometry} material={materials.shadow} position={[38.85, 0, 0.61]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/car.glb')

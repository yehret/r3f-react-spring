/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { animated, useSpring } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

import { Candy } from './Candy';

export default function Cannon(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('./models/cannon-mobile/model.gltf');

  const { cannonScale, candyZ, candyOpacity } = useSpring({
    from: {
      cannonScale: 1,
      candyZ: 0,
      candyOpacity: 0,
    },
    to: [
      {
        cannonScale: 1.5,
        candyOpacity: 1,
      },
      {
        cannonScale: 1,
        candyZ: -4,
        candyOpacity: 0,
      },
    ],
    config: {
      mass: 5,
      tension: 400,
      friction: 50,
    },
    loop: true,
    //  pause: true,
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh
          geometry={nodes.cannonMobile_8angles_1.geometry}
          material={nodes.cannonMobile_8angles_1.material}
        />
        <mesh
          geometry={nodes.cannonMobile_8angles_2.geometry}
          material={nodes.cannonMobile_8angles_2.material}
        />
        <group position={[-0.22, 0.13, 0.26]}>
          <mesh
            geometry={nodes.wheel_backLeft_1.geometry}
            material={nodes.wheel_backLeft_1.material}
          />
          <mesh
            geometry={nodes.wheel_backLeft_2.geometry}
            material={nodes.wheel_backLeft_2.material}
          />
        </group>
        <group position={[0.22, 0.13, 0.26]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            geometry={nodes.wheel_backLeft_1.geometry}
            material={nodes.wheel_backLeft_1.material}
          />
          <mesh
            geometry={nodes.wheel_backLeft_2.geometry}
            material={nodes.wheel_backLeft_2.material}
          />
        </group>
        <group position={[-0.22, 0.13, -0.2]}>
          <mesh
            geometry={nodes.wheel_backLeft_1.geometry}
            material={nodes.wheel_backLeft_1.material}
          />
          <mesh
            geometry={nodes.wheel_backLeft_2.geometry}
            material={nodes.wheel_backLeft_2.material}
          />
        </group>
        <group position={[0.22, 0.13, -0.2]} rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            geometry={nodes.wheel_backLeft_1.geometry}
            material={nodes.wheel_backLeft_1.material}
          />
          <mesh
            geometry={nodes.wheel_backLeft_2.geometry}
            material={nodes.wheel_backLeft_2.material}
          />
        </group>
        <animated.mesh
          scale-x={cannonScale}
          scale-y={cannonScale}
          scale-z={cannonScale}
          geometry={nodes.barrel_2.geometry}
          material={nodes.barrel_2.material}
          position={[0, 0.45, -0.07]}
        />
      </group>
      <animated.group position-z={candyZ}>
        <Candy
          rotation-y={Math.PI / 2}
          position={[0, 0.45, -0.2]}
          scale={[0.6, 0.6, 0.6]}
          opacity={candyOpacity}
        />
      </animated.group>
    </group>
  );
}

useGLTF.preload('./models/cannon-mobile/model.gltf');

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei';
import React from 'react';

export function FerrisWheel(props) {
  const { nodes, materials } = useGLTF('./models/ferris-wheel/model.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['ferris_wheel-Mesh'].geometry} material={materials._cabin_green} />
      <mesh
        geometry={nodes['ferris_wheel-Mesh_1'].geometry}
        material={materials.ferris_wheel_white}
      />
      <mesh
        geometry={nodes['ferris_wheel-Mesh_2'].geometry}
        material={materials.ferris_wheel_red}
      />
      <mesh
        geometry={nodes['ferris_wheel-Mesh_3'].geometry}
        material={materials.ferris_wheel_yellow}
      />
      {/* Legs */}
      <mesh
        geometry={nodes['ferris_wheel-Mesh_4'].geometry}
        material={materials.ferris_wheel_legs_red}
      />
      <mesh
        geometry={nodes['ferris_wheel-Mesh_5'].geometry}
        material={materials.ferris_wheel_blue}
      />
      <mesh
        geometry={nodes['ferris_wheel-Mesh_6'].geometry}
        material={materials.ferris_wheel_orange}
      />
      <mesh geometry={nodes['ferris_wheel-Mesh_7'].geometry} material={materials.cabin_red} />
      <mesh geometry={nodes['ferris_wheel-Mesh_8'].geometry} material={materials.cabin_blue} />
      <mesh geometry={nodes['ferris_wheel-Mesh_9'].geometry} material={materials.cabin_orange} />
    </group>
  );
}

useGLTF.preload('./models/ferris-wheel/model.gltf');

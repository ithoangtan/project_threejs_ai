/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/hoodie.glb
Author: Virtual Pandora (https://sketchfab.com/virtualpandora)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hoodie-97611a53e3b846f69e0655b210f72b2f
Title: Hoodie
*/

import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

import state from '../store'

export default function Hoodie(props) {
  const snap = useSnapshot(state)

  const { nodes, materials } = useGLTF('/hoodie.glb')

  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  useFrame((state, delta) => easing.dampC(materials.Knit_Fleece_Terry_FRONT_1944906.color, snap.color, 0.25, delta))
  useFrame((state, delta) => easing.dampC(materials.Rib_wide_FRONT_1944924.color, snap.color, 0.25, delta))

  const stateString = JSON.stringify(snap)

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} key={stateString}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.BTN_FABRIC_FRONT_1944972} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Holes_FRONT_1944945} />
        <mesh
          material-roughness={1}
          castShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Knit_Fleece_Terry_FRONT_1944906}
        >
          {snap.isFullTexture && <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />}

          {snap.isLogoTexture && (
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              map-anisotropy={16}
              depthTest={false}
              depthWrite={true}
            />
          )}
        </mesh>
        <mesh geometry={nodes.Object_5.geometry} material={materials.Knit_Fleece_Terry_FRONT_1944906} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Material125269} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Material2501413} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Material2501423} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Rib_wide_FRONT_1944924} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Straps_FRONT_1944954} />
      </group>
    </group>
  )
}

useGLTF.preload('/hoodie.glb')

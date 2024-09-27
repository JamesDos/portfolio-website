import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Mesh } from "three";
import * as THREE from 'three';


const MeshComponent = () => {
  const cubeMesh = useRef<THREE.Group>(null)
  const gltf = useLoader(GLTFLoader, "/models/rubiks_cube/scene.gltf")

  useFrame(() => {
    if (cubeMesh.current) {
      cubeMesh.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={cubeMesh}>
      <primitive 
        object={gltf.scene} 
        scale={0.3} 
        rotation={[Math.PI / 4, 0, Math.PI / 4]}
        position={[0.35, 0, -0.4]}
        />  
    </group>

  )
}

export const RubiksCube = () => {
  return (
    <div className='flex justify-center items-center h-[25rem] bg-clip-text'>
      <Canvas className='h-2xl w-2xl'>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  )
}
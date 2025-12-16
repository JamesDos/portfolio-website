import { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { Mesh } from "three";
import * as THREE from 'three';


const MeshComponent = () => {
  const cubeMesh = useRef<THREE.Group>(null)
  const gltf = useLoader(GLTFLoader, "/models/rubiks_cube/scene.gltf")

  useEffect(() => {
    if (gltf.scene) {
      // Compute the bounding box of the model
      const box = new THREE.Box3().setFromObject(gltf.scene);

      // Compute the center of the box
      const center = new THREE.Vector3();
      box.getCenter(center);

      // Reposition the model to ensure its center is at the origin
      gltf.scene.position.sub(center);  // Translate the model so the center is at (0,0,0)
    }
  }, [gltf]);

  useFrame(() => {
    if (cubeMesh.current) {
      cubeMesh.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={cubeMesh}>
      <primitive 
        object={gltf.scene} 
        scale={0.4} 
        rotation={[Math.PI / 4, 0, (35.26 * Math.PI) / 180]}
        // position={[0.4, 0, -0.45]}
        />  
    </group>

  )
}

export const RubiksCube = () => {
  return (
    <div className='flex justify-center items-center h-[30vh] md:h-[55vh] bg-clip-text p-0 m-0'>
      <Canvas 
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, 5] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  )
}
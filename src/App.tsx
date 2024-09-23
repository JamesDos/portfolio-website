import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, Suspense } from "react";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { RubiksCube } from "./components/Rubiks/rubiks";



const App = () => {

  return (
    <main>
      <RubiksCube/>
    </main>
  )
}

export default App

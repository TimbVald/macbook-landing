"use client"
import { Environment, Lightformer } from '@react-three/drei'
import React from 'react'


const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            intensity={10}
            form="rect"
            scale={10}
            rotation-y={Math.PI / 2}
            position={[10, 5, -5]}
          />
          <Lightformer
            intensity={10}
            form="rect"
            scale={10}
            rotation-y={Math.PI / 2}
            position={[10, 0, 1]}
          />
        </group>
      </Environment>
      <spotlight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotlight
        position={[0, -25, 10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotlight
        position={[0, 15, 5]}
        angle={0.15}
        decay={0.1}
        intensity={Math.PI * 0.2}
      />
    </group>
  )
}

export default StudioLights

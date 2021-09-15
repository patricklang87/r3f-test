import React, { useRef } from 'react';


export default function Terrain({GROUND_HEIGHT}) {
  const terrain = useRef();
    
  // useFrame(() => {
  //   terrain.current.position.z += .4;
  // });

  return (
    <mesh
      receiveShadow
      visible
      position={[0, GROUND_HEIGHT, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={terrain}
    >
      <circleBufferGeometry attach="geometry" args={[100, 36]} />
      <meshStandardMaterial
        attach="material"
        color="#FC913A"
        roughness={1}
        metalness={0}
      />
    </mesh>
  )
}

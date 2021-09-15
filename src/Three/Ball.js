import React, { useRef } from 'react';
import {useThree} from 'react-three-fiber';

export default function Ball({position, setTargetFocus, color, setHovered, setCurrentInfo, setChangingFocus }) {

  const ball = useRef();


  const handleClick = () => {
    setCurrentInfo({ color: color, position: position });
    setTargetFocus(position);
    setChangingFocus(true);
    setTimeout(() => setChangingFocus(false), 750);
  }

    return (
        <mesh ref={ball}
          onClick={handleClick}
          onPointerOver={(e) => setHovered(ball)}
          onPointerOut={(e) => setHovered(null)}
          visible
          emissive={{r: 1, g: 1, b: 1}}
          userData={{test: "hello"}}
          position={position}
          castShadow
        >
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color={color}
          roughness={0.1}
          metalness={0.1}
          castShadow
          />
      </mesh>
    )
}

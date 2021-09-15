//check out discoverthreejs.com
// https://digitalsynopsis.com/design/minimal-web-color-palettes-combination-hex-code/

import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import './App.css';
import { EffectComposer, Outline } from '@react-three/postprocessing';
import Terrain from './Three/Terrain';
import Balls from './Three/Balls';
import KeyLight from './Three/KeyLight';
import CameraControls from './Three/CameraControls';
import InfoBox from './Components/InfoBox';

function App() {
  const [targetFocus, setTargetFocus] = useState([0, 0, 0]);
  const [hovered, setHovered] = useState(null);
  const selected = hovered ? [hovered] : undefined;
  const [currentInfo, setCurrentInfo] = useState(null);
  const [changingFocus, setChangingFocus] = useState(false);

  return (
    <>
      {(currentInfo) && <InfoBox currentInfo={currentInfo} setCurrentInfo={setCurrentInfo} />}
      <Canvas
        shadowMap
        colorManagement
        style={{background: '#FF4E50'}}
        >
        <CameraControls targetFocus={targetFocus} changingFocus={changingFocus} setChangingFocus={setChangingFocus} />
        <ambientLight intensity={0.2} />
        <directionalLight 
          intensity={1}
          position={[0, 15, 10]}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <pointLight intensity={0.6} position={[10, 0, -2]} color="FC913A" />
        <fog attach="fog" args={["#FF4E50", 30, 70]} />
        <KeyLight position={[-2 , 2, 3]} />
        <Terrain GROUND_HEIGHT={-1} />
        <Balls
          setTargetFocus={setTargetFocus}
          setChangingFocus={setChangingFocus}
          setHovered={setHovered}
          setCurrentInfo={setCurrentInfo} />
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            selection={selected} visibleEdgeColor="#F9D423"
            edgeStrength={50}
            x-ray="false"
          />
        </EffectComposer>
      </Canvas>
    </>
  );
}

export default App;

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree, useFrame } from 'react-three-fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';
extend({OrbitControls});

export default function CameraControls({targetFocus, changingFocus, setChangingFocus}) {
    const {
        camera,
        gl: { domElement }
    } = useThree();
    const controls = useRef();

    useFrame((state) => {
        controls.current.update()   
    });

    let [x, y, z] = targetFocus;
    const vec = new THREE.Vector3(x, y, z);
    useFrame(() => {
        controls.current.target.lerp(vec, 0.1);
    });

    useFrame(() => {
        let xDir = (camera.position.x > x) ? 1 : -1 ;
        let yDir = (camera.position.y > y) ? 1 : -1 ;
        let zDir = (camera.position.z > z) ? 1 : -1 ;
        const camPosVec = new THREE.Vector3(x + (xDir * 4), y + 4, z + (zDir * 4));
        if (changingFocus) camera.position.lerp(camPosVec, 0.1);
    });


    return (
        <orbitControls
            enabled={true}
            ref={controls}
            args={[camera, domElement]}
            enableZoom={true}
            autoRotate={true}
            autoRotateSpeed={1}
            enableDamping={true}
            // maxAzimuthAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
            // minAzimuthAngle={-Math.PI / 4}
            minPolarAngle={-Math.PI}
        />
    )
}





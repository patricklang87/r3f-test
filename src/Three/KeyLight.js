import React from 'react'

export default function KeyLight({position}) {
    return (
        <rectAreaLight
            castShadow
            width={3}
            height={3}
            color={'white'}
            intensity={1}
            position={position}
            lookAt={[0, 0, 0]}
            penumbra={1}
        />
    )
}

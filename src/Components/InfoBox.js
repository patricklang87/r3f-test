import React from 'react'

export default function InfoBox({ currentInfo, setCurrentInfo }) {

    const color = currentInfo.color;
    const position = currentInfo.position;

    return (
        <div
            className="InfoBox"
            onClick={() => {setCurrentInfo(null)}}
            style={{backgroundColor: color}}
        >
            <p><strong>Selection</strong></p>
            <p>Color: {color}</p>
            <p>X: {position[0]}</p> 
            <p>Y: {position[1]}</p>
            <p>Z: {position[2]}</p>
        </div>
    )
}

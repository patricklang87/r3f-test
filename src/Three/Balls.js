import React, { useState, useEffect } from 'react';
import Ball from './Ball';

export default function Balls({setTargetFocus, setHovered, setCurrentInfo, setChangingFocus}) {
    const [balls, setBalls] = useState([]);

    const valuePos = () => {
        let num = Math.random();
        if (num > .5) return 1;
        else return -1;
    }
    
    useEffect(() => {
        let ballsAr = [];
        let numberBalls = Math.floor(Math.random() * 9) + 10;
    
        for (let x = 0; x < numberBalls; x++) {
                let position = [];
                position.push(Math.random() * 10 * valuePos());
                position.push(Math.random() * 15);
                position.push(Math.random() * 10 * valuePos());
                console.log(position);
                let hue = Math.floor(Math.random() * 360);
                let color = `hsl(${hue}, 100%, 50%)`;
                ballsAr.push(
                    <Ball
                        position={position} setTargetFocus={setTargetFocus}
                        color={color}
                        setHovered={setHovered}
                        setCurrentInfo={setCurrentInfo}
                        setChangingFocus={setChangingFocus}
                    />
                );
            }
            setBalls(ballsAr);
        }, [setTargetFocus]);
    


    return (
        <>
            {balls}
        </>
    )
}

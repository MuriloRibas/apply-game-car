import React, { useState, useEffect } from 'react'
import environment from '../../assets/gifs/CENARIO_anima.gif'
import { DivAlignEnv, ImgCar, ImgEnv } from './styles';
import CarComponent from '../car/index';

export default function EnvironmentComponent() {

    const [carPosition, setCarPosition] = useState(1) // POSIÇÕES (ESQUERDA, MEIO, DIREITA): 1 - 2 - 3 |||| 2 - 40 - 70

    const handleKeyPress = code => {
        switch(code) {
            case 37: 
                console.log('ARROW LEFT');
                if (carPosition === 1) {
                    break
                }
                setCarPosition(carPosition - 1);
                break;
            case 39: 
                console.log('ARROW RIGHT');
                if (carPosition === 3) {
                    break
                }
                setCarPosition(carPosition + 1);
                break;
            default:
                return 1;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", (key) => handleKeyPress(key.keyCode));
    })
    
    return (
        <DivAlignEnv>
            <ImgEnv src={environment} />
            <CarComponent 
                position={carPosition === 1 ? 5 : (carPosition === 2 ? 40 : 70)}
            />

        </DivAlignEnv>
    )
}

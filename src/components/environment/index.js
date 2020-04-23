import React, { useState, useEffect } from 'react'
import environment from '../../assets/gifs/CENARIO_anima.gif'
import { DivAlignEnv, ImgEnv } from './styles';
import CarComponent from '../car/index';

export default function EnvironmentComponent() {

    const [carPosition, setCarPosition] = useState(1) // POSIÇÕES (ESQUERDA, MEIO, DIREITA): 1 - 2 - 3 |||| 2 - 40 - 70

    const checkKeyAndPosition = (key, notPosition) => {
        console.log('KEY: ', key)
        if (carPosition === notPosition) {
            return false;
        }
        return true
    }

    const handleKeyPress = e => {
        switch(e.keyCode) {
            case 37: 
                if ( checkKeyAndPosition(e.key, 1) === false ) {
                    break;
                }
                setCarPosition(carPosition - 1);
                break;
            case 39: 
                if ( checkKeyAndPosition(e.key, 3) === false ) {
                    break;
                }
                setCarPosition(carPosition + 1);
                break;
            case 65: 
                if ( checkKeyAndPosition(e.key, 1) === false ) {
                    break;
                }
                setCarPosition(1)
                break;
            case 83: 
                if ( checkKeyAndPosition(e.key, 2) === false ) {
                    break;
                }
                setCarPosition(2)
                break;
            case 68:
                if ( checkKeyAndPosition(e.key, 3) === false ) {
                    break;
                }
                setCarPosition(3)
                break;
            default:
                return 2;
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", (e) => handleKeyPress(e));
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

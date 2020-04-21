import React from 'react'
import environment from '../../assets/gifs/CENARIO_anima.gif'
import car from '../../assets/imgs/CARRO.png';
import { DivAlignEnv, ImgCar } from './styles';

export default function EnvironmentComponent() {
    return (
        <DivAlignEnv>
            <img src={environment} />
            <ImgCar src={car} />

        </DivAlignEnv>
    )
}

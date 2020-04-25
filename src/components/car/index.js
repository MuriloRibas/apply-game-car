import React from 'react'
import { ImgCar } from './styles'
import car from '../../assets/imgs/CARRO.png';

export default function CarComponent(props) {
    return (
        <ImgCar
            src={car} 
            left={props.position}
        />
    )
}

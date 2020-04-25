import React from 'react'
import { DivRock } from './styles';

export default function RockComponent(props) {
    return (
        <DivRock
            left={props.position}
            speed={props.speed}
        />
    )
}

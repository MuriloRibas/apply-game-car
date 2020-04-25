import React from 'react'
import { DivTimerContent } from './styles';

export default function TimerComponent(props) {
    return (
        <DivTimerContent>
            {props.children}
        </DivTimerContent>
    )
}

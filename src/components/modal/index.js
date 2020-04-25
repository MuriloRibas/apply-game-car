import React from 'react'
import { DivWithModalContent } from './styles';

export default function ModalComponent(props) {
    return (
        <DivWithModalContent>
            {props.children}
        </DivWithModalContent>
    )
}

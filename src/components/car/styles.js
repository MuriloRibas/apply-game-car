import styled from 'styled-components'

export const ImgCar = styled.img`
    position: absolute;
    bottom: 0;
    left: ${props => props.position + '%'};
    width: 200px;
    transition: left 2s;

    @media (max-width: 1100px ) {
    }
`
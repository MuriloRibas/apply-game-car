import styled from 'styled-components'

export const ImgCar = styled.img`
    position: absolute;
    bottom: 0;
    left: ${props => props.left + '%'};
    width: 200px;
    transition: left 1s;
z-index: 3;
    @media (max-width: 1100px ) {
    }
`
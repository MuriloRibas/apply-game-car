import styled, { keyframes } from 'styled-components'

const animationRockLeft = keyframes`
    0% {
        top: 52.5%;
        left: 39%;
    }
    25% { 
        top: 55%;
        left: 37.5%;
    }
    50% {
        top: 60%;
        left: 33.5%;
    }
    75: {
        top: 65%;
        left: 28.5%;

        width: 125px;
        height: 75px;
    }
    99% { 
        top: 75%;
        left: 18%;
        width: 150px;
        height: 100px;
     }
     100% { 
        opacity: 0;
        width: 175px;
        height: 125px;
     }
`

const animationRockMiddle = keyframes`
    0% {
        top: 52.5%;
    }
    25% { 
        top: 55%;
    }
    50% {
        top: 60%;
    }
    75: {
        top: 65%;
        width: 125px;
        height: 75;
    }
    99% { 
        top: 75%;
        width: 150px;
        height: 100px;
     }
     100% { 
        opacity: 0;
        width: 175px;
        height: 125px;
     }
`
const animationRockRight = keyframes`
    0% {
        top: 52.5%;
        left: 56%;
    }
    25% { 
        top: 55%;
        left: 58.5%;
    }
    50% {
        top: 60%;
        left: 62.5%;
        width: 100px;
    }
    75: {
        top: 65%;
        left: 69%;
        width: 125px;
        height: 100px;
    }
    99%: {
        top: 75%;
        left: 76%;
        width: 150px;
        height: 125px;
    }
    100% { 
        opacity: 0;
        top: 75%;
        left: 76%;
        width: 175px;
        height: 125px;
     }
`
export const DivRock = styled.div`
    width: 50px;
    height: 50px;
    /* background: linear-gradient(135deg, rgba(61,61,61,1) 23%, rgba(42,42,42,1) 78%); */
    background-color: grey;
    position: absolute;
    /* clip-path: polygon(44% 63%, 50% 74%, 61% 63%, 78% 71%, 84% 100%, 32% 100%, 3% 100%, 8% 72%, 24% 52%); */
    clip-path: polygon(10% 100%, 14% 86%, 29% 79%, 34% 85%, 42% 78%, 51% 77%, 57% 60%, 67% 62%, 71% 68%, 72% 80%, 76% 86%, 77% 94%, 89% 98%);clip-path: polygon(10% 100%, 14% 86%, 29% 79%, 34% 85%, 42% 78%, 51% 77%, 57% 60%, 67% 62%, 71% 68%, 72% 80%, 76% 86%, 77% 94%, 89% 98%, 88% 100%);
    left: ${props => props.left + '%'};
    top: 50%;
    animation: ${props => props.left === 35 ? animationRockLeft: (props.left === 45 ? animationRockMiddle : animationRockRight )} ${props => props.speed + 's'} ease-in forwards;
     z-index: 2;
`

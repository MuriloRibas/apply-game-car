import styled from 'styled-components'

export const DivAlignContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: white;
    background: linear-gradient(90deg, var(--color-secondary), var(--color-secondary-light));
    z-index: -1;
    h2, input {
        z-index: 4;
    }
`

export const DivGrass = styled.div`
    width: ${props => props.width};
    height: 450px;
    position: absolute;
    z-index: 1;
    /* top: ${props => props.top}; */
    bottom: ${props => props.bottom};

    left: ${props => props.left};
    background-color: white;
    ${({ isFirst }) => isFirst === true ?
        `
            clip-path: polygon(14% 86%, 14% 80%, 23% 80%, 23% 86%, 31% 86%, 31% 100%, 0 100%, 0 93%, 7% 93%, 7% 86%);
            background-color: green;
        `
        :
        `
            clip-path: polygon(27% 71%, 27% 80%, 36% 80%, 36% 89%, 47% 89%, 47% 100%, 0 100%, 0 80%, 11% 80%, 11% 71%);
            background-color: #5fce50;
        `
    }
    
`

export const DivFlower = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    right: calc(220px - 75px);
    bottom: 20%;
    clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
    width: 150px;
    height: 150px;
    background: rgba(121,9,37,1);
    z-index: 2;
`
export const DivBodyFlower = styled.div`
    position: absolute;
    right: calc(220px - 10px);

    bottom: 0;
    height: 150px;
    width: 20px;
    background-color: grey;
    z-index: 1;
`

export const DivGround= styled.div`
    width: 100vw;
    height: 200px;
    background-color: whitesmoke;
    position: absolute;
    bottom: 0;
    background-color: #5c5c5c;
    border-top: 4px dashed white;
`

export const ButtonStyled = styled.button`
    background-color: var(--color-primary);
    color: white;
    padding: 15px;
    margin-top: 25px;
    z-index: 4;
    &:hover {
        cursor: pointer;
        background-color: var(--color-secondary);
    }
`
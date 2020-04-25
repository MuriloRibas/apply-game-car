import styled from 'styled-components'

export const DivWithModalContent = styled.div`
    position: absolute;
    left: 25%;
    top: 10%;
    width: 50%;
    height: 150px;
    z-index: 999;
    color: var(--color-text-secondary);
    background-color: var(--color-secondary);
    border: 2px solid white;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    h2 {
        color: white;
    }
`
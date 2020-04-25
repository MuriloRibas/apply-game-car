import styled from 'styled-components'

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
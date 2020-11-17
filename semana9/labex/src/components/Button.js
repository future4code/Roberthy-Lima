import styled from 'styled-components'

export const Button = styled.button `
    color: #BD0F32;
    background-color: transparent;
    border: 1px solid #BD0F32;
    border-radius: 2px;
    font-size: 1.5rem;
    padding: 2px 10px;

    &:hover{
        transition: 1s;
        cursor: pointer;
        color: white;
        border: 1px solid white;
    }
    &:focus{
        outline: 0 !important;
    }
`
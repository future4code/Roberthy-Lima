import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

export default function TripCard() {
    return (
        <CardContainer>
            <h3>Viagem para marte</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            <TripInfo>
                <p>Duração:</p>
                <p>Duração:</p>
                <p>Duração:</p>
                <Button>Aplicar para viagem</Button>
            </TripInfo>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    margin: 5vh auto;
    width: 80vw;
    height: 25vh;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    &:hover{
        transition: all 0.8s ease-in-out;
        cursor: pointer;
        transform: scale(1.03);
    }
    h3 {
        margin: 5px 5px;
    }
    p {
        margin-left: 5px;
    }
    Button {
        font-size: 1rem;
        border-radius: 5px;

        &:hover{
            color: blue;
            border-color: blue;
        }
    }
`

const TripInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
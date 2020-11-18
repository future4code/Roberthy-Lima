import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Modal from 'react-modal'
import './Modal.css'

export default function TripCard() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <CardContainer>
            <h3>Viagem para marte</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            <TripInfo>
                <p>Duração:</p>
                <p>Duração:</p>
                <p>Duração:</p>
                <Button onClick={() => setModalIsOpen(!modalIsOpen)}>Aplicar para viagem</Button>

                <Modal
                        closeTimeoutMS={1500} 
                        isOpen={modalIsOpen} 
                        onRequestClose={() => { setModalIsOpen(!modalIsOpen)}}
                        style={
                            {    
                                overlay: {
                                    background: '23,67,88,0.5',
                                    
                                },
                                content: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(#2E4057, #151D28)',
                                    color: 'white',
                                    margin: 'auto',
                                    width: '30vw',
                                }
                            }
                            
                        }>
                         
                            <StyledInput placeholder='Nome'/>

                            <StyledInput placeholder='Idade'/>

                            <StyledInput placeholder='Por que deveriamos aceitar você na viagem?'/>

                            <StyledInput placeholder='Profissão'/>

                            <StyledInput placeholder='País'/>

                            <Button>Enviar aplicação</Button>
                            


                        </Modal>
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

const StyledInput = styled.input`
    border: none;
    margin: 1.6rem;
    width: 100%;
    height: 5vh;
    outline: none;
    background-color: transparent;
    color: white;
    border-bottom: 2px solid silver;
`
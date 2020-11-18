import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TripCard from './TripCard'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { Button } from './Button'
import Modal from 'react-modal'
import './Modal.css'

export default function EditTrips() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useProtectedPage()
    
    return (
        <Container>
            <h2>Lista de viagens</h2>
            <Button onClick={() => setModalIsOpen(!modalIsOpen)} style={{color : "blue", border : "1px solid blue"}}>Criar nova viagem</Button>

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
                        

                        <StyledInput placeholder='Planeta destino'/>
                        

                        <StyledInput placeholder='Data da viagem'/>
                    

                        <StyledInput placeholder='Descrição'/>
                       

                        <StyledInput placeholder='Duração da viagem (em dias)'/>
                        
                        <Button> Criar viagem </Button>

                        </Modal>

           <TripList>
               <TripContainer>
               <h4>Trip.Name</h4><Button>Excluir</Button>
               </TripContainer>
               
               <TripContainer>
               <h4>Trip.Name</h4><Button>Excluir</Button>
               </TripContainer>

               <TripContainer>
               <h4>Trip.Name</h4><Button>Excluir</Button>
               </TripContainer>

               <TripContainer>
               <h4>Trip.Name</h4><Button>Excluir</Button>
               </TripContainer>

               <TripContainer>
               <h4>Trip.Name</h4><Button>Excluir</Button>
               </TripContainer>

           </TripList>

        </Container>
    )
}


const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    Button {
        &:hover{
            color: blue;
            border-color: blue;
        }
    }
`

const TripList = styled.div `
    margin: 1.3rem;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 100%;

`

const TripContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    font-size: 1.1rem;
    padding: 1.1rem;
    border: 1px solid black;
    Button {
        margin: 1.1rem;
        font-size: 1.1rem;
        &:hover{
            color: blue;
            border-color: blue;
        }
    }

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
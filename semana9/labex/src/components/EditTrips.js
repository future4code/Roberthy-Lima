import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { Button } from './Button'
import Modal from 'react-modal'
import './Modal.css'

export default function EditTrips() {

    const [name, setName] = useState('');
    const [planet, setPlanet] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');

    const [trips, setTrips] = useState([]);

    const token = localStorage.getItem("token")

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handlePlanet = (event) => {
        setPlanet(event.target.value);
    }

    const handleDate = (event) => {
        setDate(event.target.value);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleDuration = (event) => {
        setDuration(Number(event.target.value));
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)

    useProtectedPage()

    useEffect(() => {
        getTrips();
    }, [])


    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberthy-lima/trips")
        .then((res) => {
            setTrips(res.data.trips);
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const getTripDetails = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberthy-lima/trip/:{id}",
        {
            headers: {
                auth : token
            }
        }
        )
        .then((res) => {
            console.log(res)
        })
    }


    const createTrip = () => {
        const body = {
            "name": name,
            "planet": planet,
            "date": date,
            "description": description,
            "durationInDays": duration
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberthy-lima/trips", 
        body,
        {
            headers: {
                auth : token
            }
        }
        )
        .then((res) => {
            setModalIsOpen(!modalIsOpen);
            setName("");
            setPlanet("");
            setDate("");
            setDescription("");
            setDuration("");
            alert("Viagem criada com sucesso!");
            getTrips();
        })
        .catch((err) => {
            console.log(err.message)
            alert("Preencha todos os campos!")
        })
    }

    const renderedTrips = trips.map((trip) => {
        return (
            <TripContainer>
               <h4 key={trip.id}>{trip.name}</h4><Button onClick={getTripDetails} key={trip.id}>Ver detalhes</Button>
            </TripContainer>
        )
    })
    
    return (

        <Container>
            <h2>Lista de viagens</h2>
            <Button onClick={() => setModalIsOpen(!modalIsOpen)} style={{color : "blue", border : "1px solid blue"}}>Criar nova viagem</Button>

            <Modal
                        closeTimeoutMS={1000} 
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
        
                                
                            
                        <StyledInput onChange={handleName} value={name} placeholder='Nome'/>
                        

                        <StyledInput onChange={handlePlanet} value={planet} placeholder='Planeta destino'/>
                        

                        <StyledInput onChange={handleDate} value={date} placeholder='Data da viagem'/>
                    

                        <StyledInput onChange={handleDescription} value={description} placeholder='Descrição'/>
                       

                        <StyledInput onChange={handleDuration} value={duration} placeholder='Duração da viagem (em dias)'/>
                        
                        <Button onClick={createTrip}> Criar viagem </Button>

                        

                        </Modal>

           <TripList>
                {renderedTrips}
           </TripList>

        </Container>
    )
}


const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &:hover {
        cursor: default;
    }
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
    width: 40vw;
    height: 100%;

`

const TripContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    font-size: 1.1rem;
    padding: 1.1rem;
    border: 1px solid black;
        h4 {
            margin-left: 1.1rem;
        }
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
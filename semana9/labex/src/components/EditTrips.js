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
    const [tripId, setTripId] = useState('');
    const [tripDetails, setTripDetails] = useState([])
    const [detailsInfo, setDetailsInfo] = useState(false)
    const [candidates, setCandidates] = useState([])
    

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
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberthy-lima/trip/${tripId}`,
        {
            headers: {
                auth : token
            }
        }
        )
        .then((res) => {
            setTripDetails(res.data)
            setCandidates(res.data.trip.candidates)
            console.log(tripDetails)
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

    const renderedCandidates = candidates.map((candidate) => {
        return (
            <p>Nome: {candidate.name}  Idade: {candidate.age} País: {candidate.country}<br></br>
            <h5>Texto de aplicação</h5>
            <p>{candidate.applicationText}</p>
            </p>
        )
    })

    const renderedTrips = trips.map((trip) => {
        return (
            <TripContainer onMouseOver={() => { getTripId(trip.id); getTripDetails(); }}>
               <h4 key={trip.id}>{trip.name}</h4>
                {detailsInfo? <Button  onClick={() => { getTripId(trip.id); getTripDetails(); setDetailsInfo(!detailsInfo)}} key={trip.id}>Fechar</Button> :
                 <Button onMouseOver={() => { getTripId(trip.id); getTripDetails(); }}  onClick={() => { getTripId(trip.id); getTripDetails(); setDetailsInfo(!detailsInfo)}} key={trip.id}>Ver detalhes</Button>}
            </TripContainer>
            
        )
    })

    const getTripId = (key) => {
        if (detailsInfo === false) {
            setTripId (key)
        } else {
        }
    }
    
    return (

        <Container>
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

                {detailsInfo?
                <TripDetailsContainer>
                    <h3>Detalhes da viagem</h3>
                    <p>Nome: {tripDetails.trip.name}</p>
                    <p>Planeta: {tripDetails.trip.planet}</p>
                    <p>Data: {tripDetails.trip.date}</p>
                    <p>Duração: {tripDetails.trip.durationInDays} Dias</p>
                    <p>Desrição: {tripDetails.trip.description}</p>
                    <h4>Lista de candidatos:</h4>
                    {renderedCandidates}
                </TripDetailsContainer>
               
                :
                <p></p>    
            }
        </Container>
    )
}


const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: default;
    }
    h2 {
        margin: 1.1rem;
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

const TripDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 1.1rem;
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
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Modal from 'react-modal'
import axios from 'axios'
import './Modal.css'

export default function TripCard() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [reason, setReason] = useState('');
    const [profession, setProfession] = useState('');
    const [country, setCountry] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleAge = (event) => {
        setAge(Number(event.target.value));
    }

    const handleReason = (event) => {
        setReason(event.target.value);
    }

    const handleProfession = (event) => {
        setProfession(event.target.value);
    }

    const handleCountry = (event) => {
        setCountry(event.target.value);
    }


    
    useEffect(() => {
        getTrips();
    }, [])


    const [trips, setTrips] = useState([]);
    const [tripId, setTripId] = useState('');
    

    
    const getTrips = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberthy-lima/trips")
        .then((res) => {
            setTrips(res.data.trips);
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    const applyToTrip = () => {
        const body = {
            "name": name,
            "age": age,
            "applicationText": reason,
            "profession": profession,
            "country": country
        }

        axios.post (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberthy-lima/trips/${tripId}/apply`,
        body)
        .then((res) => {
            setName("")
            setAge("");
            setReason("");
            setProfession("");
            setCountry("");
            alert("Aplicação enviada!")
            setModalIsOpen(!modalIsOpen);
        })
        .catch((err) => {
            console.log(err.message)
        })

    }


    const getTripId = (key) => {
        setTripId(key);
    }

    const renderedTrips = trips.map((trip) => {
        return (
        <CardContainer>
            <h3 key={trip.id}>{trip.name}</h3>
            <p key={trip.id}>{trip.description}</p>
            <TripInfo>
                <p key={trip.id}>Planeta: {trip.planet}</p>
                <p key={trip.id}>Duração: {trip.durationInDays} Dias</p>
                <p key={trip.id}>Data: {trip.date}</p>
                <Button key={trip.id} onClick={() => { setModalIsOpen(!modalIsOpen); getTripId(trip.id)}}>Aplicar para viagem</Button>
                </TripInfo>
         </CardContainer>

        )
    })



    return (
        <div>
            {renderedTrips}
            <Modal
        closeTimeoutMS={800} 
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

            <StyledInput onChange={handleAge} value={age} placeholder='Idade'/>

            <StyledInput onChange={handleReason} value={reason} placeholder='Por que deveriamos aceitar você na viagem?'/>

            <StyledInput onChange={handleProfession} value ={profession} placeholder='Profissão'/>

            <StyledInput onChange={handleCountry} value={country} placeholder='País'/>

            <Button onClick={applyToTrip}>Enviar aplicação</Button>
            


        </Modal>
        </div>
        
    )
}

const CardContainer = styled.div`
    margin: 5vh auto;
    width: 80vw;
    height: 25vh;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &:hover{
        transition: all 0.1s ease-in-out;
        transform: scale(1.001);
        border: 1px solid darkblue;
        cursor: default;
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
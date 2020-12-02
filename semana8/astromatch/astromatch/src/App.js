import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header';
import Person from './components/Person';

export default function App() {

  const [name, setName] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [bio, setBio] = useState([]);
  const [id, setId] = useState([]);
  const [matches, setMatches] = useState([]);


  // useEffect(() => {
  //   getProfile()
  // })

  const getProfile = () => {
    
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:roberthy/person")
    .then(res => {
      setName(res.data.profile.name)
      setBio(res.data.profile.bio)
      setPhoto(res.data.profile.photo)
      setId(res.data.profile.id)
      console.log(res.data) 
    })
    doMatch()
  }

  const doMatch = () => {
    const body = {
      "id" : "{id}",
      "choice" : true
    }
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:roberthy/choose-person", body)
    .then(res => {
      console.log("its a match")
    })
  }

  const showMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:roberthy/matches")
    .then(res => {
    //  setMatches(res.data.profile.name)
    console.log(res.data.matches.id)
    })
    return (
      <p>{matches}</p>
    )
  }

  return (
    <div className='container'>

      <div className='peopleCard'>
        <img className='avatar' src={photo}/>
      </div>

      <div className='description-container'>
      <h4>{name}</h4>
      <p>{bio}</p>

      <button onClick={getProfile}> Deslike </button>
      <button key={id} onClick={getProfile}> Like </button>
      </div>

      <button onClick={showMatches}>Ver Matches</button>

      
    </div>
  )
}

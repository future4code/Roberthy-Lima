import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import TripDetails from './components/TripDetails'
import CreateTripPage from './components/CreateTripPage'
import './App.css'

export default function App() {
  return (
      <Router>
        <Navbar/>
        
        <Switch>
          <Route exact path='/'>
            <Homepage/>
          </Route>

          <Route exact path='/viagens'>
            <TripDetails/>
          </Route>

          <Route exact path='/criar-viagens'>
            <CreateTripPage/>
          </Route>

        </Switch>

        <Footer/>

      </Router>

  
  )
}

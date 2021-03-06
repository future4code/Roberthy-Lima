import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import TripDetails from './components/TripDetails'
import EditTrips from './components/EditTrips'
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

          <Route exact path='/editar-viagens'>
            <EditTrips/>
          </Route>

        </Switch>

        <Footer/>

      </Router>

  
  )
}

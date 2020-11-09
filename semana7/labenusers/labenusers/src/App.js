import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/Register';
import Users from './components/Users'
import './App.css'
import axios from 'axios'


class App extends React.Component {
  state = {
        users: {},
        usersValue: ''
    }

  render () {
    return (
      <Router>
        <nav>

        <Link to='/Register'>
          <button>Cadastro de usuários</button>
        </Link>

        <Link to='/Users'>
          <button>Ver usuários cadastrados</button>
        </Link>

        </nav>
       
        <Switch>
          <Route path="/Users">
            <Users/>
          </Route>

          <Route path='/Register'>
            <Register/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
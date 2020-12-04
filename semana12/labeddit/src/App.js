import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Feed from './components/Feed'
import PostDetails from './components/PostDetails'


export default function App() {


  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path='/feed'>
          <Feed />
        </Route>
        <Route exact path ='/'>
         <LoginPage/>
          
        </Route>
        <Route exact path ='/register'>
          <RegisterPage/>
        </Route>
        <Route exact path ='/feed/:id'>
          <PostDetails/>
        </Route>
      

      </Switch>
    </Router>
  )
}

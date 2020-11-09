import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreatePlaylist from './components/CreatePlaylist';
import MyPlaylists from './components/MyPlaylists';
import PlaylistDetails from './components/PlaylistDetails';

export default class App extends Component {
  state = {

  }

  render() {
    return (
      <Router>
        
        <Navbar/>
        

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/CreatePlaylist">
            <CreatePlaylist />
          </Route>
          <Route path="/MyPlaylists">
            <MyPlaylists/>
          </Route>
          <Route path="/PlaylistDetails">
            <PlaylistDetails/>
          </Route>
        </Switch>
      
    </Router>
    )
  }
}



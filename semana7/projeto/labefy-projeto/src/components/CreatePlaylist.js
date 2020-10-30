import React from "react";
import axios from "axios";
import styled from 'styled-components'

class App extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  };


  createPlaylist = () => {
    const body = {
      name: this.state.playlistValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "Roberthy-Lima-Dumont"
          }
        }
      )
      .then((res) => {
        this.setState({ playlistValue: "" });
        alert('Playlist criada com sucesso!')
      })
      .catch((error) => {
        alert('Erro ao criar playlist!')
        console.log(error.message);
      });
  };

  onChangePlaylistValue = (event) => {
    this.setState({ playlistValue: event.target.value });
  };

  render() {
    

    return (
      <Wrapper>
        <div>
          <input className='mt-4'
            placeholder="Nome da Playlist"
            value={this.state.playlistValue}
            onChange={this.onChangePlaylistValue}
          />
          <button onClick={this.createPlaylist}>Criar Playlist</button>
        </div>
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
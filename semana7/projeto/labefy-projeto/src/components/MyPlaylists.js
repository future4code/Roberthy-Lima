import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom'



export default class MyPlaylists extends Component {
    state = {
        playlists: [],
        playlistValue: "",
        playlistId: ""
      };

      
    
      componentDidMount = () => {
        this.getAllPlaylists();
      };
    
     getAllPlaylists = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
              headers: {
                Authorization: "Roberthy-Lima-Dumont"
              }
            }
          )
          .then((resposta) => {
            this.setState({ playlists: resposta.data.result.list });
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

      getPlaylistId = (id) => {
          this.setState({ playlistId: id})
      }

      deletePlaylist = (playlistId) => {
        axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,{
              headers: {
                  Authorization: "Roberthy-Lima-Dumont"
              }
          }
            )
          .then((response) => {
            alert("Playlists deletada com sucesso!");
            this.getAllPlaylists();
          })
          .catch((error) => {
            console.log(error.message);
            alert('Erro ao deletar playlist!')
          });
      };
    

    render() {
        const renderedPlaylists = this.state.playlists.map((playlist) => {
            return ( 
            <Playlist>

            <p className='mt-2 mr-2' key={playlist.id}>{playlist.name}</p>
            <Link onClick={() => this.getPlaylistId(playlist.id)} to={`/PlaylistDetails/${playlist.id}`}>
            <PlaylistBtn>
                Adicionar Música
            </PlaylistBtn>
            </Link>
            <Link to={`/PlaylistDetails/${playlist.id}`}>
            <PlaylistBtn>
                Ver detalhes
            </PlaylistBtn>
            </Link>
            <button type="button" class="btn" onClick={() => this.deletePlaylist(playlist.id)}>
            <i className="fas fa-trash cursor-pointer"></i>
            </button>

            </Playlist>
            )
          });

        return  (
           
            <Wrapper>
                <h2>Playlists salvas: </h2>
                {renderedPlaylists}
            </Wrapper>
        )
    }
}



const Wrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Playlist = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    border: 1px solid black;
    width: 100vw;
    margin: 1.1rem;
    
`

const PlaylistBtn = styled.button `
    background-color: green;
    color: white;
    border: 1px solid lightgreen;
    border-radius: 5px;
    &:hover {
        text-decoration: underline;
    }

`
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

class Register extends React.Component {
    state = {
        users: [],
        nameValue: '',
        emailValue: ''
    }

    createUser = () => {
        const body = {
          name: this.state.nameValue,
          email: this.state.emailValue,

        };
    
        axios
          .post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,
            {
              headers: {
                Authorization: "Roberthy-Lima-Dumont"
              }
            }
          )
          .then((res) => {
            this.setState({ nameValue: "" });
            this.setState({ emailValue: '' })
            alert("Usuário criado com sucesso!")
          })
          .catch((error) => {
            alert("Falha ao criar usuario!")
            console.log(error.message);
          });
      };

      onChangeNameValue = (event) => {
          this.setState({ nameValue: event.target.value })
      }
      
      onChangeEmailValue = (event) => {
          this.setState({ emailValue: event.target.value })
      }
    render () {
       
        return (
            <Main>
                <Input placeholder='nome'
                value={this.state.nameValue}
                onChange={this.onChangeNameValue}
                />
                <Input placeholder='email'
                value={this.state.emailValue}
                onChange={this.onChangeEmailValue}
                />

                <Btn onClick={this.createUser}>Cadastrar</Btn>
            </Main>
        )
    }
}

export default Register

const Main = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Input = styled.input`
    margin: 0.5rem auto;
    padding: 0.3rem;
`

const Btn = styled.button `
    background-color: blue;
    color: white;
    border-radius: 5px;
    margin: auto;
`
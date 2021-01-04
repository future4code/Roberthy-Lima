import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


export default function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const history = useHistory()

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleUsername= (event) => {
        setUsername(event.target.value)
        
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        register()
        
    }

   

    const register = () => {
        const body = {
          email: email,
          password: password,
          username: username,
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
            body
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            setPassword("");
            setEmail("");
            history.push("/feed")
          })
          .catch((err) => {
            alert('Preencha os campos corretamente!')
          });
      };

    return (
        <Container>
            <StyledForm onSubmit={handleSubmission}>

            <TextField className='styled-input' 
                    required
                    label="Nome de usuário"
                    variant="outlined"                
                    name="usuario"
                    value={username}
                    onChange={handleUsername} />

                <TextField className='styled-input' 
                    required
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmail} />
                <TextField className='styled-input' 
                    required
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword} />

                <Button 
                    className='styled-button'
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Criar conta
                </Button>
            </StyledForm>

            <Button 
                    className='styled-button'
                    color="primary"
                    onClick={() => {history.push("/")}}
                >
                    Voltar para tela de Login
                </Button>
        </Container>
    )
}


const Container = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 15vh;
    justify-content: center;
    align-items: center;
    .styled-button{
        margin: 1.2rem;
        width: 25vw;
    }
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    .styled-input{
        margin: 1.2rem;
        width: 25vw;
    }
    
`

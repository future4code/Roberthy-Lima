import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import {Link, Router, useHistory} from 'react-router-dom'
import { Button } from './Button'
import axios from 'axios'
import './Modal.css'

Modal.setAppElement('#root')

export default function Navbar() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState(localStorage.getItem("token"))

    const history = useHistory();

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            login()
        }
    }


    const login = () => {
        const body = {
          email: email,
          password: password
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberthy-lima/login",
            body
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            setToken(localStorage.getItem("token"))
            setModalIsOpen(!modalIsOpen);
            setPassword("");
            setEmail("");
          })
          .catch((err) => {
            alert('Conta inválida!')
          });
      };

      const logout = () => {
          localStorage.removeItem("token");
          setToken(localStorage.getItem("token"));
          history.push("/")
      }

    return (
        <NavWrapper>
            <Link to='/'>
            <Logo src='https://www.flaticon.com/svg/static/icons/svg/1356/1356479.svg'/>
            </Link>
            <ul>
                <li>
                    <Link to='/' className='navbar-link'>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to='/viagens' className='navbar-link'>
                        Ver viagens
                    </Link>
                </li>
                <li>{!token
                ?
                    <Link className='navbar-link'>
                    </Link>
                    : <Link to='/editar-viagens'className='navbar-link'>
                        Editar viagens
                    </Link>

                    }
                </li>
                <li>
                    {!token
                    ? <Button onClick={() => setModalIsOpen(!modalIsOpen)}>
                        Login
                    </Button>
                    :
                    <Button onClick={logout}>
                    Logout
                </Button>}
                    
                        <Modal
                        closeTimeoutMS={600} 
                        isOpen={modalIsOpen} 
                        onRequestClose={() => { setModalIsOpen(!modalIsOpen); setEmail(""); setPassword("")}}
                        style={
                            {    
                                overlay: {
                                    background: '23,67,88,0.5',
                                    
                                },
                                content: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(#2E4057, #151D28)',
                                    color: 'white',
                                    margin: 'auto',
                                    width: '30vw',
                                }
                            }
                            
                        }
                        >
                            <ModalImg src='https://www.flaticon.com/svg/static/icons/svg/3049/3049498.svg'/>
                    

                            <StyledInput value={email} onChange={handleEmail} onKeyPress={handleKeyPress} placeholder="E-mail">
                                
                            </StyledInput>

                            <StyledInput type='password' value={password} onChange={handlePassword} onKeyPress={handleKeyPress} placeholder="Senha">
                                
                            </StyledInput>


                            <Button type='submit' onClick={login}>
                                Fazer Login
                            </Button>
                            
                        </Modal>
                </li>
            </ul>
        </NavWrapper>
       
    )
}


const NavWrapper = styled.div`
    display: flex;
    background-color: #2E4057;
    justify-content: space-between;
    width: 100vw;
    
    .navbar-link{
        font-size: 1.3rem;
        text-decoration: none;
        color: white;
        font-family: Arial, Helvetica, sans-serif;

        &:hover{
        text-decoration: underline;
     }
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: right;
        margin: 2vh 5vw;
        
    }
    li{
        list-style: none;
        margin: auto 10px;
        color: white;
    }    
    
`

const Logo = styled.img`
    width: 60px;
    padding: 1.2rem 3rem;
`

const StyledInput = styled.input`
    border: none;
    margin: 1.6rem;
    width: 100%;
    height: 5vh;
    outline: none;
    background-color: transparent;
    color: white;
    border-bottom: 2px solid silver;

`

const ModalImg = styled.img`
    width: 150px;
    margin-bottom: 5vh;
`
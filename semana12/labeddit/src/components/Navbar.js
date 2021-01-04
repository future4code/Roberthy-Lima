import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

    
export default function Navbar() {

    const [token, setToken] = useState(localStorage.getItem("token"))

    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    return (
        <NavContainer>
            <StyledList>
               
            <li>
            <Link className="navbar-link" to="/feed">
                Ver feed
            </Link>
        </li>
    
                
                {/* <li>{!token
                ?
                <Link  className="navbar-link" to="/">
                Fazer login
            </Link>
            :
            <Link onClick={() => {localStorage.removeItem("token"); setToken(localStorage.getItem("token"))}} className="navbar-link" to="/">
                Fazer logout
            </Link>
            }
                    
                </li> */}
            </StyledList>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    display: flex;
    background-image: linear-gradient( #0A141F , #19324D);
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
`

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    margin: 1.2rem;
    color: white;

    .navbar-link {
        align-self: flex-start;
        color: white;
        text-decoration: none;
        margin: 1.2rem;
        font-size: 1.2rem;
        &:hover{
            text-decoration: underline;
        }
    }
`
import React from 'react'
import styled from 'styled-components'
import {Link, Router} from 'react-router-dom'
import { Button } from './Button'

export default function Navbar() {
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
                <li>
                    <Link className='navbar-link'>
                    </Link>
                </li>
                <li>
                    <Button>
                        Login
                    </Button>
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

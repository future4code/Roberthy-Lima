import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../music.svg'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <NavLogo src={logo} alt='Página Inicial' className="navbar-brand"/>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/CreatePlaylist' className='nav-link'>
                            Criar Playlist
                        </Link>
                    </li>
                    <li className='nav-item ml-5'>
                    <Link to='/MyPlaylists' className='nav-link'>
                        Ver minhas playlists
                    </Link>
                    </li>
                </ul>
            

            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
    background: green;
    .nav-link{
        color: white !important;
        font-size: 1.1rem;
        text-transform: capitalize;
        &:hover {
            text-decoration:underline;
            cursor: pointer;
        }
    }
`

const NavLogo = styled.img `
    height: 10vh;
    width: 5vw;
`
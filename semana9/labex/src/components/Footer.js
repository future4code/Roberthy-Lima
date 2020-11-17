import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrapper>
            <SocialMedias>
                <Logo src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/1200px-Instagram.svg.png'/>
                <Logo src='https://upload.wikimedia.org/wikipedia/pt/thumb/3/3d/Twitter_logo_2012.svg/594px-Twitter_logo_2012.svg.png'/>
                <Logo src='https://iconape.com/wp-content/files/yd/117914/svg/Facebook_f_logo__2019_.svg'/>
            </SocialMedias>
            <ul>
                <li>
                    Sobre nos
                </li>
            </ul>
            <ul>
                <li>
                    Contato
                </li>
            </ul>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div `
    background-image: linear-gradient(#2E4057, #151D28);

    width: 100vw;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;

    ul {
    }

    li {
        list-style: none;
        color: white;
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }

`

const SocialMedias = styled.div`
    display: flex;
`

const Logo = styled.img`
    width: 80px;
    height: 80px;
    &:hover{
        cursor: pointer;
    }
`
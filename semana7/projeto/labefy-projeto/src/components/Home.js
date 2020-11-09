import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import Img from '../listening.jpg'

export default function Home() {
    return (
        <Wrapper>
        <DivImg>
            <img src={Img}/>
            <h1 className='text-capitalize text-align-center mt-3'>Seja bem vindo!</h1>
        </DivImg>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

`

const DivImg = styled.div `
    text-align: center;
    padding: 4rem;
    
`



import React from 'react'
import styled from 'styled-components';

export default function Homepage() {
    return (
        <Container>
            <h3>Ao infinito, e além!</h3>
        </Container>
    )
}



const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://i.pinimg.com/originals/4a/ba/f3/4abaf352645fd2142ed6555f789e0a2e.jpg');
    background-position: center;
    background-size: cover;
    height: 80vh;
    margin: 2vh auto;
    h3{
        color: white;
    }
    
`

const Img = styled.img `

    margin: 5vh auto;
    width: 60%;    
`

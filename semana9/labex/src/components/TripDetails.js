import React from 'react'
import styled from 'styled-components'
import TripCard from './TripCard'

export default function TripDetails() {
    return (
        <Container>
            <TripCard/>
        </Container>
    )
}

const Container = styled.div`
    overflow: hidden;
`
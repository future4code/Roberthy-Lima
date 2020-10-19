
import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="card-pequeno">
            <p>Email: {props.email}</p>
            <p>Endereço: {props.endereco}</p>
        </div>

    )

}



export default CardPequeno;
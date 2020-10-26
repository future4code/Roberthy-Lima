import React from 'react';
import './Etapa3.css';

function Etapa3() {
  return (
    <main>
        <div className="form">
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input></input>
        </div>

        <div className="form">
            <p>6. Você fez algum curso complementar?</p>
                <select className="cursoComplementar">
                    <option value="emIncompleto">Não</option>
                    <option value="emCompleto">Tecnologo</option>
                    <option value="esIncompleto">Ingles</option>
                    <option value="esCompleto">Informatica</option>
                </select>
        </div>
    </main>
  );
}

export default Etapa3;

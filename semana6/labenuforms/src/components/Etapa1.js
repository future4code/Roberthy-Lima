import React from 'react';
import './Etapa1.css';

function Etapa1() {
  return (
    <main>
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      
        <div className="form">
            <p>1. Qual o seu nome?</p>
            <input></input>
        </div>

        <div className="form">
            <p>2. Qual sua idade?</p>
            <input></input>
        </div>

        <div className="form">
            <p>3. Qual seu email?</p>
            <input></input>
        </div>

        <div className="form">
            <p>4. Qual a sua escolaridade?</p>
                <select className="escolaridade">
                    <option value="emIncompleto">Ensino Médio Incompleto</option>
                    <option value="emCompleto">Ensino Médio Incompleto</option>
                    <option value="esIncompleto">Ensino Superior Incompleto</option>
                    <option value="esCompleto">Ensino Superior Completo</option>
                </select>
        </div>
      
    </main>
  );
}

export default Etapa1;

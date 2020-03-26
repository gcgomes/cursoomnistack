import React from "react";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={ logoImg } alt="Be the Hero"/>

          <h1>Descreva o cado detalhadamento para encontrar um herói para resolver isso.</h1>
          <p></p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Título do caso"/>
          <textarea type="text" placeholder="Descrição"/>
          <input type="text" placeholder="Valor em reais"/>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
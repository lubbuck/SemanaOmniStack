import React from 'react';
import { Link } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="be the hero" />

        <form action="">
          <h1>Faça seu logon</h1>
          <input type="text" name="" id="" placeholder="Sua Id" />
          <button className="button" type="submit">Entrar</button>
          <Link to="/register">
            <FiLogIn size={16} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="heroes" />
    </div>
  );
}
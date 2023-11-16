import React from 'react';
import './App.css';
import DadosPessoais from './comp';
import './comp/index.css';



export default function App(){ 
  return(
    <div className='App'>
    <h1> Dados Pessoais</h1>
        <DadosPessoais nome = {"Jaque"} idade={"19 anos"} email={"jaque@gmail.com"} telefone={"9999-9999"} />
    </div>

  );
  }


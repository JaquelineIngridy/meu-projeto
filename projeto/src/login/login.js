import React from "react";
import "./login.css";

export default function Login(props){

    function mostrarMensagem(){
        alert("O nome do Usuario ou senha esta inválido");
    }

    return(

            <div>
                <form className="form">
                        <div className="usuario">
                            
                            <input type="texto" name="username" placeholder="Email"></input>
                        </div>
                        <div className="senha">
                            
                            <input type="password" name="senha" placeholder="Senha"></input>
                        </div>
                        <button className="botao" onClick={()=> mostrarMensagem()}>Entrar</button>
                        <p className="esqueceu">Esqueceu a senha? <a target="_blank" href="http://google.com"> Click aqui</a></p>
                        <p id="props">{props.mostrar} Seja Bem-Vindo!</p>
                </form> 
        </div>
    );
}
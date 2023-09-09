import './App.css';
import './componentes/Header.css';




function App() {
  return (
    <div className="bg_filmes">
      <header className="App-header">
        <div class ="row">

          <div className="img">
            <img src="atv/src/componentes/img/logo.png"/>
            
          </div>
        </div>

      </header>
      <div id="caixa_login" 
       class="col-4 offset-4">
      <h1 class="text-white">Entrar</h1>
        <br />
        <form>
          <input
          type ="e-mail"
          class="form-control form-control-lg"
          placeholder="e-mail ou cpf"
          />
          <br />
          <input 
          type="password"
          class="form-control form-control-lg"
          placeholder="senha"
          />
          <br />
          <button class="btn btn-block btn-danger">Entrar
          </button>
          
           
            <div class="col text-right">
              <a href="#" 
              class="text-muted">
                Precisa de ajuda?
              </a>
  
            </div>
          
  
        </form>
        </div>
        

    </div>
  );
}

export default App;

import image from './componentes/img/image.jpeg';
import './componentes/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} width='250px' height='250px'/>
        
        <h1>
          João da Silva
        </h1>
        <h3>Endereço: Rua das Flores, 123</h3>
        <h3>Cidade: São Paulo, SP</h3>
        <h3>Telefone: (11) 1234-5678</h3>
        <h3>E-mail:  joao.silva@email.com</h3>

        <h2>Objetivo Profissional: </h2>
        <h3>Busco oportunidades desafiadoras em uma empresa que valorize a inovação e o trabalho em equipe.</h3>

        <h2>Formação Acadêmica:</h2>
        <h3>Graduação em Engenharia Mecânica</h3>
        <h3> Universidade Federal de São Paulo</h3>
        <h3>Conclusão em 2018</h3>

        <h2>Experiência Profissional:</h2>
        <h3>Engenheiro de Produção</h3>
        <h3>Empresa: ABC Indústria Ltda.</h3>
        <h3>Período: Janeiro de 2019 até 2021</h3>


      </header>
    </div>
  );
}

export default App;

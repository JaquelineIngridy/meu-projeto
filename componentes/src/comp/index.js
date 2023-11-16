export default function DadosPessoais(props){
    return(
    <div class="dados">
        <p>Seja bem-vindo </p>
        <p>Aqui estão seus dados!</p>
        <p>Nome: {props.nome} </p>
        <p>Idade: {props.idade} </p>
        <p>Email: {props.email} </p>
        <p>telefone: {props.telefone} </p>
    </div>
    )
}

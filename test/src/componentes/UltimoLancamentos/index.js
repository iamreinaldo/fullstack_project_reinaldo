import { livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Titulo"
import cardRecomenda from "../cardRecomenda"
import imagemLivro from "../../imagens/livro2.png" 
import styled from "styled-components"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`


const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
return(
    <UltimosLancamentosContainer>
        <Titulo cor="#EB9B00" 
        tamanhoFonte="36px" > Últimos Lançamentos </Titulo>
        <NovosLivrosContainer>
            {livros.map(livro =>(
            <img src = {livro.src}/>
            ))}
        </NovosLivrosContainer>
        <cardRecomenda>
            titulo="Talvez você se interesse por..."
            subtitulo="Angular 11"
            descricao="Construindo uma aplicacao com plataforma Google"
            img = {imagemLivro}
        </cardRecomenda>
    </UltimosLancamentosContainer>

)

}

export default UltimosLancamentos
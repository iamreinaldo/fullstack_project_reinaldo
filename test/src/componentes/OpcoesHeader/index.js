import styled from 'styled-components'


const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const IconOpcoes = styled.ul`
  display: flex;
`
const TextoOpcoes = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-height: 120px;
`


function OpcoesHeader(){
    return(
        <IconOpcoes>
          { textOpcoes.map((texto) => (
          <TextoOpcoes><p>{texto}</p></TextoOpcoes>  
          )) }
        </IconOpcoes> 
    )
}

export default OpcoesHeader
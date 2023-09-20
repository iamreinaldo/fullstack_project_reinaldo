import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import styled from 'styled-components';
import UltimosLancamentos from './componentes/UltimoLancamentos';

const AppConteiner = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`


function App() {
  return (
    <AppConteiner>
      <Header/>
      <Pesquisa />
      <UltimosLancamentos />
    </AppConteiner>
  );
}

export default App

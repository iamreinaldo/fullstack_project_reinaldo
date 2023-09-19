import './estilo.css'
import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import Icones from '../Icones'

function Header(){
    return (
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <Icones/>
      </header>
    )
}

export default Header
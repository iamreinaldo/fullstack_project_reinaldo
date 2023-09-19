import logo from '../../imagens/logo.svg'
import './estilo.css'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><b>ALURA</b>books</p>     
      </div>
    )
}

export default Logo


//className='logo-img'
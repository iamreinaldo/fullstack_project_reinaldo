import styled from 'styled-components'
import logo from '../../imagens/logo.svg'


const LogoConteiner = styled.div`
    display: flex;
    font-size: 45px;
`

const LogoImage = styled.img`
    margin-right: 15px;
`

function Logo() {
    return (
        <LogoConteiner>
            <LogoImage src={logo} alt='logo' />
            <p><b>ALURA</b>books</p>     
      </LogoConteiner>
    )
}

export default Logo


//className='logo-img'
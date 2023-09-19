import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import Icones from '../Icones'
import styled from 'styled-components'


const HeaderConteiner = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header(){
    return (
        <HeaderConteiner>
            <Logo/>
            <OpcoesHeader/>
            <Icones/>
      </HeaderConteiner>
    )
}

export default Header
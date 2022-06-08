import { Button, Main, Logo } from './InitialPage-style'
import { Container } from '../Container/Container'
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'

function InitialPage() {

    let navigate = useNavigate();

    return (
        <Container>
            <Main>
                <Logo>
                    <img src={logo} />
                </Logo>
                <img src='https://rachacuca.com.br/static/hangman/hangman-game-og-share.png' />
                <Button onClick={() => navigate('/modo')}>
                    Vamos jogar!
                </Button>
            </Main>
        </Container>
    )
}

export default InitialPage;
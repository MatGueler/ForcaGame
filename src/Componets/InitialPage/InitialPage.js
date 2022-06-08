import { Button, Main } from './InitialPage-style'
import { Container } from '../Container/Container'
import { useNavigate } from 'react-router-dom'

function InitialPage() {

    let navigate = useNavigate();

    return (
        <Container>
            <Main>
                <img src='https://rachacuca.com.br/static/hangman/hangman-game-og-share.png' />
                <Button onClick={() => navigate('/modo')}>
                    Vamos jogar!
                </Button>
            </Main>
        </Container>
    )
}

export default InitialPage;
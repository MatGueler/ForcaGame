import { Container } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { Main, Button } from './Mode-style'



function Mode() {

    let navigate = useNavigate();

    const modes =
        [
            { type: 'Fácil', color: 'green' },
            { type: 'Médio', color: 'orange' },
            { type: 'Difícil', color: 'red' }
        ]

    return (
        <Container>
            <Main>
                <h1>DIFICULDADE</h1>
                {modes.map((item, index) => <Button key={index} color={item.color} onClick={() => navigate('/game')}>
                    {item.type}
                </Button>)}
            </Main>
        </Container>
    )
}

export default Mode;
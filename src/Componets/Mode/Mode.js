import { Container } from "../Container/Container";
import { useNavigate } from "react-router-dom";
import { Main, Button } from './Mode-style'
import { useContext } from "react";
import WordContext from "../Contexts/WordContext";

function Nivel(setWord, navigate, item) {

    if (item.type === 'Fácil') {
        setWord('PORTA')
    }
    if (item.type === 'Médio') {
        setWord('PROFETA')
    }
    if (item.type === 'Difícil') {
        setWord('KIWI')
    }

    navigate('/game')
    console.log(item.type)
}

function Mode() {

    let navigate = useNavigate();

    const { setWord } = useContext(WordContext)

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
                {modes.map((item, index) => <Button key={index} color={item.color} onClick={() => Nivel(setWord, navigate, item)}>
                    {item.type}
                </Button>)}
            </Main>
        </Container>
    )
}

export default Mode;
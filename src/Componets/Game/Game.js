import { Container } from "../Container/Container";
import { Main, Life, Keyboard, Button, Word } from './Game-style'
import { FaHeart } from 'react-icons/fa';

function Verification({ item, word }) {

    let verification = 0;

    for (let counter = 0; counter < word.length; counter++) {
        if (word[counter] === item) {
            verification += 1;
            console.log(item)
        }
    }

    if (verification === 0) {
        console.log('naotem')
    }
}

function Game() {

    const word = 'AREIA'

    const alphabet =
        [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"
        ]

    function AddLetter() {

        let result = ''

        for (let counter = 0; counter < word.length; counter++) {
            result += `_ `
        }

        return (
            result
        )
    }

    return (
        <Container>
            <Main>
                <Life>
                    <FaHeart color='red' />
                    <FaHeart color='red' />
                    <FaHeart color='red' />
                    <FaHeart color='red' />
                    <FaHeart color='red' />
                </Life>
                <Word>
                    <AddLetter />
                </Word>
                <Keyboard>
                    {alphabet.map((item, index) => <Button key={index} onClick={() => Verification({ item, word })}>{item}</Button>)}
                </Keyboard>
            </Main>
        </Container>
    )
}

export default Game;
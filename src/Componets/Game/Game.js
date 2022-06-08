import { Container } from "../Container/Container";
import { Main, Back, Life, Heart, Keyboard, Button, Word, Answer, Chosen, Background, Reload } from './Game-style'
import { FaHeartBroken } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';
import { useContext, useEffect, useState } from "react";
import WordContext from "../Contexts/WordContext";
import { useNavigate } from "react-router-dom";

function Verification({ item, word, wordsChosen, setWordsChosen, pontuation, setPontuation, death, setDeath, lost, setLost }) {

    let verification = 0;

    let point = pontuation;

    let err = death;

    let verificationLetter = 0

    for (let counter = 0; counter < wordsChosen.length; counter++) {
        if (item === wordsChosen[counter]) {
            verificationLetter += 1;
        }
    }
    if (verificationLetter === 0) {
        for (let counter = 0; counter < word.length; counter++) {
            if (word[counter] === item) {
                verification += 1;
                point += 1
                setPontuation(point)
                console.log(item)
            }
        }

        if (verification === 0) {
            err.push('1')
            setDeath(err)
            console.log('naotem')
        }

        setWordsChosen([...wordsChosen, item])

        if (point === word.length) {
            alert('Você ganhou!')
        }
        if (err.length >= 5) {
            setLost(!lost)
        }
    }
}

function GameOver() {
    return (
        <Background>
            <Reload>
                <img src="https://c.tenor.com/BTMPECC4hS4AAAAC/game-over.gif" />
            </Reload>
        </Background>
    )
}

function AddMyWord({ item, wordsChosen }) {

    let verification = 0;

    for (let counter = 0; counter < wordsChosen.length; counter++) {
        if (item === wordsChosen[counter]) {
            verification += 1;
        }
    }

    if (verification === 0) {
        return (
            <Answer color='white' back='white'>{item}</Answer>
        )
    }
    else {
        return (
            <Answer color='white' back='green'>{item}</Answer>
        )
    }
}

function Game() {

    const { word } = useContext(WordContext);

    let navigate = useNavigate()

    const [myWord, setMyWord] = useState([]);
    const [wordsChosen, setWordsChosen] = useState([]);
    const [pontuation, setPontuation] = useState(0);
    const [death, setDeath] = useState([])
    const [lost, setLost] = useState(false)

    const alphabet =
        [
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
        ]

    useEffect(() => {
        let u = []

        for (let counter = 0; counter < word.length; counter++) {
            u.push(word[counter])
        }
        setMyWord(u)
        console.log(u)
    }, [])

    return (
        <Container>
            <Main>
                <Back onClick={() => navigate('/modo')}>
                    <TiArrowBack color='white' size={25} />
                </Back>
                <Life>
                    {death.map((item) => <Heart>
                        <FaHeartBroken color='red' size={25} />
                    </Heart>)}
                </Life>
                <Word>
                    {myWord.map((item, index) => <AddMyWord key={index} item={item} wordsChosen={wordsChosen} />)}
                </Word>
                <Chosen>
                    {wordsChosen.map((item, index) => <h1 key={index}>{item}</h1>)}
                </Chosen>
                <Keyboard>
                    {alphabet.map((item, index) => <Button key={index} onClick={() => Verification({ item, word, wordsChosen, setWordsChosen, pontuation, setPontuation, death, setDeath, lost, setLost })}>{item}</Button>)}
                </Keyboard>
                {lost ? <GameOver /> : ''}
            </Main>
        </Container>
    )
}

export default Game;
import styled from 'styled-components'

export const Main = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 20px;

h1 {
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
}
`

export const Button = styled.button`
width: 100%;
height: 60px;
background-color: ${(props) => props.color};
border: 0;
border-radius: 10px;
margin-bottom: 20px;
cursor: pointer;
font-size: 20px;
font-weight: bold;
color: #000000;
`
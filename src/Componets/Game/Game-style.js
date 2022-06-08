import styled from 'styled-components'

export const Main = styled.div`
height: 100%;
display: flex;
flex-direction: column;
padding: 30px 0 0 20px;
margin: 0 20px;
box-sizing: border-box;
`

export const Back = styled.div`
position: absolute;
top: 20px;
left: 20px;
cursor: pointer;
`

export const Life = styled.div`
height: 50px;
display: flex;
justify-content: center;
`

export const Heart = styled.div`
margin: 5px;
`

export const Word = styled.div`
display: flex;
justify-content: center;
font-size: 60px;
color: #FFFFFF;
margin: 50px 0;
`

export const Answer = styled.button`
width: 30px;
height: 30px;
border: 0;
border-radius: 2px;
cursor: pointer;
font-size: 25px;
font-weight: bold;
color: ${(props) => props.color};
background-color: ${(props) => props.back};
margin: 8px;
`

export const Chosen = styled.div`
height: 100px;
display: flex;
justify-content: center;
flex-wrap: wrap;
border-radius: 5px;
margin-bottom: 50px;
background-color: orange;
padding: 10px;

h1 {
    margin: 0 5px;
    font-weight: bold;
    font-size: 20px;
}
`

export const Keyboard = styled.div`
height: 100px;
display: flex;
justify-content: center;
flex-wrap: wrap;

button:active{
    background-color: red;
}
`

export const Button = styled.button`
width: 40px;
height: 40px;
border: 0;
border-radius: 5px;
cursor: pointer;
font-size: 20px;
font-weight: bold;
color: ${(props) => props.color};
background-color: white;
margin: 8px;
`

export const Background = styled.div`
position: fixed;
display: flex;
align-items: center;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: rgba(0,0,0,.6);
`

export const Reload = styled.div`
width: 100%;
margin: 0 20px;
height: 200px;
border-radius: 10px;
background-color: white;

img {
    width: 100%;
    border-radius: 10px;
}
`
import styled from 'styled-components'

export const Main = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 20px;

img {
    width: 100%;
    margin-bottom: 40px;
    z-index: 1;
}
`

export const Logo = styled.div`
height: 60px;
top: 20px;
right: 20px;
position: absolute;
img {
    width: 150px;
}
`

export const Button = styled.button`
width: 100%;
height: 60px;
border: 0;
border-radius: 10px;
font-size: 20px;
font-weight: bold;
`
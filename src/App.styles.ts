import styled, { createGlobalStyle } from 'styled-components'
// import Background from './images/'

export const Global = createGlobalStyle `::after
    html{
        height: 100%;
    }
    body {
        /* background-image: url(); */
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        
    }
`

export const Wrapper = styled.div `
    display: flex;
    flex-direction:column;
    align-items: center;

    > p {
        color: white;
    }

    .score {
        color: white;
        font-size: 32px;
        margin: 0;
    }
    h1{
        background-clip:text;
        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        --webkit-text-fill-color: color;
        filter: drop-shadow(2px 2px #008583);
        font-size: 70px;
        text-align:center;
        margin: 20px;
        font-weight: 400;
    }

    .start, .next{
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91)
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        border-radius: 10px;
        height:40px;
        margin:20px 0;
        padding: 0 40px;
    }
    .start {
        max-width: 200px;
    }
`
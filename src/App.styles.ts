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
        color: black;
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
        font-size: 60px;
        text-align:center;
        margin: 20px;
        font-weight: 400;
    }

    .start, .next{
        width: 200px;
        font-size: 16px;
        font-weight: 600;
        color: black;
        cursor: pointer;
        background-color: #ebfeff;
        margin: 20px;
        height: 55px;
        text-align:center;
        border: none;
        background-size: 300% 100%;
        border-radius: 50px;
        --moz-transition: all .6s ease-in-out;
        --o-transition: all .6s ease-in-out;
        --webkit-transition: all .6s ease-in-out;
        transition: all .6s ease-in-out;
    }
    .start {
        max-width: 200px;
    }
    .next{
        background-color: #ebfeff;
        border-radius: 1px solid block;
    }
    .next:hover{
        font-weight: 800;
    }
    .start:hover {
        background-position: 100% 0;
        --moz-transition: all .6s ease-in-out;
        --o-transition: all .6s ease-in-out;
        --webkit-transition: all .6s ease-in-out;
        transition: all .6s ease-in-out;
        background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
    }
`

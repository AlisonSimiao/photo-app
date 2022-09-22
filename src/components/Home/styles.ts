import styled from "styled-components"
const background = "./IMG/background.svg"
const logo = "./IMG/logo.svg"

export const Wrapper = styled.div`
    display: grid;

    grid-template-columns: 50vw 50vw;
    grid-template-rows: 100vh;
   
    @media screen and ( max-width: 500px){
        grid-template-columns: 1fr;
        grid-template-rows:  87vh 1fr;
    }
`

export const Content =  styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${background});
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: -3;
`

export const Logo =  styled.div`
    height: 10.65vh;
    width: 54vw;
    background-image: url(${logo});
    background-size: 100% 100%;
    position: relative;

    @media screen and ( max-width: 500px){
        height: 6.65vh;
        width: 54vw;
    }

    &::before{
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background-image: url(${logo});
        background-size: 100% 100%;
        filter: invert(.5);
        z-index: -2;
        animation-name: up;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;

    }

    &::after{
        content: "";
        position: absolute;
        
        height: 100%;
        width: 100%;
        background-image: url(${logo});
        background-size: 100% 100%;
        filter: invert(1);
        z-index: -1;
        animation-name: down;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
`

export const Painel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
    gap: 3vh;
    grid-column: 2;
    
    padding: 3vw;
    min-height: 13vh;
    width: 100%;

    @media screen and ( max-width: 500px){
        grid-column: 1;
        grid-row: 2;
        flex-direction: row;
        gap: 1vh;
        
    }
`
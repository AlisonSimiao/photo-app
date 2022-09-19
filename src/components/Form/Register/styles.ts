import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media screen and (max-width: 500px) {
        justify-content: flex-start;
        padding-top: 5vh;
    }

    form{
        display: flex;
        flex-direction: column;

        gap: 16px;
        width: 100%;
        max-width: 400px;
        padding: 16px;

        
    }

    button{
        width: 100%;
    }    
`

export const Icon = styled(TiArrowBack)`
    font-size: 4vw;
`
export const Title = styled.div`
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: -0.015em;

    color: #000000;

`


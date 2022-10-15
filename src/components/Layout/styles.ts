import styled from "styled-components";

export const Wraper = styled.div`
    display: flex ;

    justify-content: center;
`

export const Content = styled.div`
    background-color: red;
    display: grid;
    width: min(60vw, 500px);
    height: 100vh;
    
    grid-template-rows: 4fr 10vh;
`
import styled from "styled-components";

export const Wraper = styled.div`
    display: flex ;

    justify-content: center;
`

export const Content = styled.div`
    display: grid;
    width: max(60vw, 500px);
    height: 100vh;
    
    grid-template-rows: 1fr 10vh;
`
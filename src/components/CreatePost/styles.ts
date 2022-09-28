import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
`

export const Container = styled.div`
    width: 100vw;
    background-color: red;
    border-radius: 1rem;
`

export const Header = styled.div`
    text-align: center;
    span{
        padding-block: 1rem;
    }
`
import styled from "styled-components";
import { GrClose } from 'react-icons/gr'

export const Close = styled(GrClose)`
    font-size: 20px;
    position: absolute;
    top: 1.5vw;
    right: 1.5vw;

    color: red;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    background-color: rgba(0,0,0,.5);
`

export const Container = styled.div`
    width: 100vw;
    border-radius: 1rem;
`

export const Header = styled.div`
    text-align: center;
    span{
        padding-block: 1rem;
    }
`
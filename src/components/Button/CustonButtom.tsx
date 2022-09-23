import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";
import { Button } from "./styles";


type Props = {
    Loading?: boolean;
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset" | undefined;
    full?: boolean;
}

const size = [1.6, 10];

const Spin = styled.div`
background-color: #0468c7;
width: 1.6em;
height: 1.6em;
border-radius: 50%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid black;
z-index: 10;
overflow: hidden;

animation-name: spin;
animation-duration: 1s;
animation-timing-function: linear;
animation-iteration-count: infinite;

&::after{
    position: absolute;
    content: "";
    transform: rotate(45deg) translate(50%,50%);
    background-color: black;
    width: calc( 2em - ${size[0]}px );
    height: calc( 2em - ${size[0]}px );
    z-index: 11;
}

&::before{
    content: "";
    z-index: 10;
    position: absolute;
    border-radius: 50%;
    background-color: black;
    width: calc( ${size[0]}em - ${size[1]}px );
    height: calc( ${size[0]}em - ${size[1]}px );
}

`

const CustonButton = ({ Loading, children, ...rest }: Props) => {


    return (
        <Button {...rest}>
            {
                Loading
                    ? <Spin />
                    : children
            }
        </Button>
    )
}

export default CustonButton;